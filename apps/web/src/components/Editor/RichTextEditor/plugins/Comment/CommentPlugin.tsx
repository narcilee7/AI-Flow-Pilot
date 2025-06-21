'use client'

import { ExtendConfig, Path } from "platejs"

import {
  type BaseCommentConfig,
  BaseCommentPlugin,
  getDraftCommentKey,
} from '@platejs/comment'
import { toTPlatePlugin } from "platejs/react"
import { isSlateString } from "platejs"
import { CommentLeaf } from "../../SubComponents/Comment/CommentLeafNode"

type CommentConfig = ExtendConfig<
  BaseCommentConfig,
  {
    activeId: string | null;
    commentingBlock: Path | null;
    hotKey: string[];
    hoverId: string | null;
    uniquePathMap: Map<Path, string>;
  }
>

const commentPlugin = toTPlatePlugin<CommentConfig>(BaseCommentPlugin, {
  handlers: {
    onClick: ({ api, event, setOption, type }) => {
      let leaf = event.target as HTMLElement
      let isSet = false

      const unSetActiveSuggestion = () => {
        setOption('activeId', null)
        isSet = true
      }

      if (!isSlateString(leaf)) unSetActiveSuggestion()

      while (leaf.parentElement) {
        if (leaf.classList.contains(`slate-${type}`)) {
          const commentsEntry = api.comment!.node()

          if (!commentsEntry) {
            unSetActiveSuggestion()

            break
          }

          const id = api.comment!.nodeId(commentsEntry[0])

          setOption('activeId', id ?? null)

          isSet = true
          break
        }

        leaf = leaf.parentElement
      }

      if (!isSet) unSetActiveSuggestion()
    }
  },
  options: {
    activeId: null,
    commentingBlock: null,
    hoverId: null,
    uniquePathMap: new Map(),
  }
})
  .extendTransforms(
    ({
      editor,
      setOption,
      tf: {
        comment: { setDraft },
      },
    }) => ({
      setDraft: () => {
        if (editor.api.isCollapsed()) {
          editor.tf.select(editor.api.block()![1])
        }
        setDraft()
        editor.tf.collapse()
        setOption('activeId', getDraftCommentKey())
        setOption('commentingBlock', editor.selection!.focus.path.slice(0, 1))
      },
    })
  )
  .configure({
    node: { component: CommentLeaf },
    shortcuts: {
      setDraft: { keys: 'mod+shift+m' },
    },
  })

export {
  commentPlugin
}
