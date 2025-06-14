'use client'

import * as React from 'react';

import type { PlateLeafProps } from 'platejs/react';

import { PlateLeaf } from 'platejs/react';

const HighlightLeaf =(props: PlateLeafProps) => {
  return (
    <PlateLeaf {...props} as="mark" className="bg-highlight/10 text-inherit">
      {props.children}
    </PlateLeaf>
  )
}

export default HighlightLeaf;