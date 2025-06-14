'use client'

import type { PlateLeafProps } from 'platejs/react';

import { PlateLeaf } from 'platejs/react';

/**
 * 代码叶子组件，用于渲染代码节点
 * @param props 
 * @returns 
 */
const CodeLeaf = (props: PlateLeafProps) => {
  return (
    <PlateLeaf
      {...props}
      as="code"
      className="rounded-md bg-muted px-[0.3em] py-[0.2em] font-mono text-sm whitespace-pre-wrap"
    >
      {props.children}
    </PlateLeaf>
  )
}

export default CodeLeaf;
