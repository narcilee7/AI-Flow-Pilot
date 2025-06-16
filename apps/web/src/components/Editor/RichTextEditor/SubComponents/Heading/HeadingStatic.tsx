import * as React from 'react'
import type { SlateElementProps } from 'platejs';
import { SlateElement } from 'platejs';
import { cva } from 'class-variance-authority';

// 标题内置样式
const headingVariants = cva('relative mb-1', {
  variants: {
    variant: {
      h1: 'mt-[1.6em] pb-1 font-heading text-4xl font-bold',
      h2: 'mt-[1.4em] pb-px font-heading text-2xl font-semibold tracking-tight',
      h3: 'mt-[1em] pb-px font-heading text-xl font-semibold tracking-tight',
      h4: 'mt-[0.75em] font-heading text-lg font-semibold tracking-tight',
      h5: 'mt-[0.75em] text-lg font-semibold tracking-tight',
      h6: 'mt-[0.75em] text-base font-semibold tracking-tight',
    },
  },
})

interface HeadingStaticProps extends SlateElementProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const HeadingStatic = ({ variant, ...props}: HeadingStaticProps) => {
  return (
    <SlateElement
      {...props}
      as={variant}
      className={headingVariants({ variant })}
    >
      {props.children}
    </SlateElement>
  )
}

HeadingStatic.displayName = 'HeadingStatic';

const HeadingStaticH1 = (props: SlateElementProps) => {
  return <HeadingStatic variant='h1' {...props} />
}

const HeadingStaticH2 = (props: SlateElementProps) => {
  return <HeadingStatic variant='h2' {...props} />
}

const HeadingStaticH3 = (props: SlateElementProps) => {
  return <HeadingStatic variant='h3' {...props} />
}

const HeadingStaticH4 = (props: SlateElementProps) => {
  return <HeadingStatic variant='h4' {...props} />
}

const HeadingStaticH5 = (props: SlateElementProps) => {
  return <HeadingStatic variant='h5' {...props} />
}

const HeadingStaticH6 = (props: SlateElementProps) => {
  return <HeadingStatic variant='h6' {...props} />
}

export {
  // HeadingStatic, // 标题静态块基础组件
  HeadingStaticH1,
  HeadingStaticH2,
  HeadingStaticH3,
  HeadingStaticH4,
  HeadingStaticH5,
  HeadingStaticH6,
}