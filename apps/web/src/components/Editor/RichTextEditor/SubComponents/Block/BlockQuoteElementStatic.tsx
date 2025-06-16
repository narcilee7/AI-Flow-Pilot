import { type SlateElementProps, SlateElement } from 'platejs'

/**
 * 引用静态块组件
 * @param props 
 * @returns 
 */
const BlockQuoteElementStatic = (props: SlateElementProps) => {
  return (
    <SlateElement 
      {...props}
      as="blockquote"
      className="border-l-2 border-gray-300 pl-4"
    />
  )
}

export default BlockQuoteElementStatic
