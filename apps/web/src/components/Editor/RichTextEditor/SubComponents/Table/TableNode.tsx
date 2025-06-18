'use client'

import * as React from 'react'

import { PlateElement, PlateElementProps } from 'platejs/react'
import { TTableElement } from 'platejs'

function TableElement(props: PlateElementProps<TTableElement>) {
  return (
    <PlateElement {...props} />
  )
}