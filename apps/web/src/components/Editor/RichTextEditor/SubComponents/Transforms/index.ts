'use client'

import type { PlateEditor } from 'platejs/react'

import { insertCallout } from '@platejs/callout'
import { insertCodeBlock } from '@platejs/code-block'
import { insertDate } from '@platejs/date'
import { insertColumnGroup, toggleColumnGroup } from '@platejs/layout'
import { triggerFloatingLink } from '@platejs/link/react'
import { insertEquation, insertInlineEquation } from '@platejs/math'
import {
  insertAudioPlaceholder,
  insertFilePlaceholder,
  insertMedia,
  insertVideoPlaceholder,
} from '@platejs/media'
import { KEYS, NodeEntry, Path, PathApi, TElement } from 'platejs'
import { insertToc } from '@platejs/toc'
import { TablePlugin } from '@platejs/table/react'
import { SuggestionPlugin } from '@platejs/suggestion/react'

const ACTION_THREE_COLUMNS = 'action_three_columns'

class Helpers {
  /**
   * 插入列表
   * @param editor 编辑器实例
   * @param type 列表类型
   */
  static insertList(editor: PlateEditor, type: string) {
    editor.tf.insertNodes(
      editor.api.create.block({
        indent: 1,
        listStyleType: type, // 列表样式类型
      }),
      { select: true }
    )
  }

  /**
   * 设置列表
   * @param editor 编辑器实例
   * @param type 列表类型
   * @param entry 节点入口
   */
  static setList(editor: PlateEditor, type: string, entry: NodeEntry<TElement>) {
    editor.tf.setNodes(
      editor.api.create.block({
        indent: 1,
        listStyleType: type,
      }),
      {
        at: entry[1],
      }
    )
  }
}

// 插入块工具函数映射
const insertBlockMap: Record<string, (editor: PlateEditor, type: string) => void> = {
  [KEYS.listTodo]: Helpers.insertList,
  [KEYS.ol]: Helpers.insertList,
  [KEYS.ul]: Helpers.insertList,
  [ACTION_THREE_COLUMNS]: (editor) =>
    insertColumnGroup(editor, { columns: 3, select: true }),
  [KEYS.audio]: (editor) => insertAudioPlaceholder(editor, { select: true }),
  [KEYS.callout]: (editor) => insertCallout(editor, { select: true }),
  [KEYS.codeBlock]: (editor) => insertCodeBlock(editor, { select: true }),
  [KEYS.equation]: (editor) => insertEquation(editor, { select: true }),
  [KEYS.file]: (editor) => insertFilePlaceholder(editor, { select: true }),
  [KEYS.img]: (editor) =>
    insertMedia(editor, {
      select: true,
      type: KEYS.img,
    }),
  [KEYS.mediaEmbed]: (editor) =>
    insertMedia(editor, {
      select: true,
      type: KEYS.mediaEmbed,
    }),
  [KEYS.table]: (editor) =>
    editor.getTransforms(TablePlugin).insert.table({}, { select: true }),
  [KEYS.toc]: (editor) => insertToc(editor, { select: true }),
  [KEYS.video]: (editor) => insertVideoPlaceholder(editor, { select: true }),
}

// 插入行工具函数映射
const insertInlineMap: Record<string, (editor: PlateEditor, type: string) => void> = {
  [KEYS.date]: (editor) => insertDate(editor, { select: true }),
  [KEYS.link]: (editor) => triggerFloatingLink(editor, { focused: true }),
  [KEYS.inlineEquation]: (editor) => insertInlineEquation(editor, '', { select: true })
}

// 设置块工具函数映射
const setBlockMap: Record<string, (editor: PlateEditor, type: string, entry: NodeEntry<TElement>) => void> = {
  [KEYS.listTodo]: Helpers.setList,
  [KEYS.ol]: Helpers.setList,
  [KEYS.ul]: Helpers.setList,
  // 设置三列布局
  [ACTION_THREE_COLUMNS]: (editor) =>
    toggleColumnGroup(editor, { columns: 3 }),
}

// 插入块
export function insertBlock (editor: PlateEditor, type: string) {
  editor.tf.withoutNormalizing(() => {
    const block = editor.api.block()

    if (!block) return
    
    if (type in insertBlockMap) {
      // 执行插入块映射工具函数
      insertBlockMap[type](editor, type)
    } else {
      editor.tf.insertNodes(editor.api.create.block({ type }), {
        at: PathApi.next(block[1]),
        select: true
      })
    }

    if (getBlockType(block[0]) !== type) {
      editor.getApi(SuggestionPlugin).suggestion.withoutSuggestions(() => {
        editor.tf.removeNodes({ previousEmptyBlock: true });
      });
    }
  })
}

export function insertInlineElement(editor: PlateEditor, type: string) {
  // 如果type在映射表中，则执行映射工具函数
  if (type in insertInlineMap) {
    insertInlineMap[type](editor, type)
  } else {
    // 如果不在映射表中，则返回
    return
  }
}

export function setBlockType(editor: PlateEditor, type: string, { at }: { at?: Path } = {}) {
  editor.tf.withoutNormalizing(() => {
    const setEntry = (entry: NodeEntry<TElement>) => {
      const [node, path] = entry

      if (node[KEYS.listType]) {
        // 如果节点是列表，则移除列表类型和缩进
        editor.tf.unsetNodes([KEYS.listType, 'indent'], { at: path } )
      }
      else if (type in setBlockMap) {
        // 执行设置块映射工具函数
        setBlockMap[type](editor, type, entry)
      } else {
        // 否则直接设置节点类型
        editor.tf.setNodes(({ type }), { at: path })
      }
    }

    if (at) {
      // 如果提供了at，则设置节点类型
      const entry = editor.api.node<TElement>(at)

      if (entry) {
        setEntry(entry)
        return
      }
    }

    const entries = editor.api.blocks({ mode: 'lowest' })
    // 遍历所有块节点，设置节点类型
    entries.forEach((entry) => setEntry(entry))
  })
}

export function getBlockType(block: TElement) {
  if (block[KEYS.listType]) {
    // 有序列表
    if (block[KEYS.listType] === KEYS.ol) {
      return KEYS.ol
    } else if (block[KEYS.listType] === KEYS.listTodo) {
      // 待办列表
      return KEYS.listTodo
    } else {
      // 无序列表
      return KEYS.ul
    }
  }

  return block.type
}