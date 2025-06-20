'use client'

import * as React from 'react'

import type * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import { useDraggable, useDropLine } from '@platejs/dnd'
import {
	BlockSelectionPlugin,
	useBlockSelected
} from '@platejs/selection/react'
import { setCellBackground } from '@platejs/table'
import {
	TablePlugin,
	TableProvider,
	useTableBordersDropdownMenuContentState,
	useTableCellElement,
	useTableCellElementResizable,
	useTableElement,
	useTableMergeState,
} from '@platejs/table/react'
import { PopoverAnchor } from '@radix-ui/react-popover'
import { cva } from 'class-variance-authority'
import {
	ArrowDown,
	ArrowLeft,
	ArrowRight,
	ArrowUp,
	CombineIcon,
	EraserIcon,
	Grid2X2Icon,
	GripVertical,
	PaintBucketIcon,
	SquareSplitHorizontalIcon,
	Trash2Icon,
	XIcon,
} from 'lucide-react'
import type {
	TElement,
	TTableCellElement,
	TTableElement,
	TTableRowElement
} from 'platejs'
import { KEYS, PathApi } from 'platejs'
import {
	type PlateElementProps,
	PlateElement,
	useComposedRef,
	useEditorPlugin,
	useEditorRef,
	useEditorSelector,
	useElement,
	usePluginOption,
	useReadOnly,
	useRemoveNodeButton,
	useSelected,
	withHOC,
} from 'platejs/react'
import { useElementSelector } from 'platejs/react'

import { Button } from '@/components/Button'

import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuTrigger,
} from '@/components/DropdownMenu'
import {
	Popover,
	PopoverContent
} from '@/components/Popover'
import { cn } from '@/utils/styleHelper'

// import { blockSelectionVariants }

import {
	ColorDropdownMenuItems,
	DEFAULT_COLORS
} from '@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/FontColorToolbarButton'

import {
	BorderAllIcon,
	BorderBottomIcon,
	BorderLeftIcon,
	BorderNoneIcon,
	BorderRightIcon,
	BorderTopIcon,
} from '../TableIcons';

import {
	Toolbar,
	ToolbarButton,
	ToolbarGroup,
	ToolbarMenuGroup,
} from '@/components/ToolBar'
import { isDragging } from 'framer-motion';

export const TableElement = withHOC(
	TableProvider,
	function TableElement({
		children,
		...props
	}: PlateElementProps<TTableElement>){
		const readOnly = useReadOnly()

		const isSelectionAreaVisible = usePluginOption(
			BlockSelectionPlugin,
			'isSelectionAreaVisible'
		)
		const hasControls = !readOnly && !isSelectionAreaVisible

		const selected = useSelected()
		const {
			isSelectingCell,
			marginLeft,
			props: tableProps
		} = useTableElement()

		const content = (
			<PlateElement
				{...props}
				className={cn(
					"overflow-x-auto py-5",
					hasControls && '-ml-2 *:data-[slot=block-selection]:left-2')
				}
				style={{ paddingLeft: marginLeft }}
			>
				<div className="group/table relative w-fit">
					<table
						className={cn(
							'mr-0 ml-px table h-px table-fixed border-collapse',
							isSelectingCell && 'selection:bg-transparent'
						)}
						{...tableProps}
					>
						<tbody className="min-w-full">{children}</tbody>
					</table>
				</div>
			</PlateElement>
		)

		if (readOnly || !selected) {
			return content
		}

		return <TableFloatingToolbar>{content}</TableFloatingToolbar>
	}
)

function TableFloatingToolbar({ children, ...props }: React.ComponentProps<typeof PopoverContent>) {
	const { tf } = useEditorPlugin(TablePlugin)
	const element = useElement<TTableElement>()
	const { props: buttonProps } = useRemoveNodeButton({ element })
	const collapsed = useEditorSelector((editor) => !editor.api.isExpanded(), [])

	const { canMerge, canSplit } = useTableMergeState()

	return (
		<Popover open={canMerge || canSplit || collapsed} modal={false}>
			<PopoverAnchor asChild>{children}</PopoverAnchor>
			<PopoverContent asChild onOpenAutoFocus={(e) => e.preventDefault()} contentEditable={false} {...props}>
				<Toolbar
					className="scrollbar-hide flex w-auto max-w-[80vw] flex-row overflow-x-auto rounded-md border bg-popover p-1 shadow-md print:hidden"
					contentEditable={false}
				>
					<ToolbarGroup>
						<ColorDropdownMenu tooltip="Backgroun Color">
							<PaintBucketIcon />
						</ColorDropdownMenu>
						{/* 合并单元格 */}
						{canMerge && (
							<ToolbarButton
								onClick={() => tf.table.merge()}
								onMouseDown={(e) => e.preventDefault()}
								tooltip="Merge Cells"
							>
								<CombineIcon />
							</ToolbarButton>
						)}
					  {/*	分离 */}
						{canSplit && (
							<ToolbarButton
								onClick={() => tf.table.split()}
								onMouseDown={(e) => e.preventDefault()}
								tooltip="Split Cells"
							>
								<SquareSplitHorizontalIcon />
							</ToolbarButton>
						)}

						<DropdownMenu modal={false}>
							<DropdownMenuTrigger asChild>
								<ToolbarButton tooltip="Cell Borders">
									<Grid2X2Icon />
								</ToolbarButton>
							</DropdownMenuTrigger>

							<DropdownMenuPortal>
								{/* 边框设置 */}
								<TableBordersDropdownMenuContent />
							</DropdownMenuPortal>
						</DropdownMenu>
						{/* 删除 */}
						{collapsed && (
							<ToolbarGroup>
								<ToolbarButton tooltip="Delete Table" {...buttonProps}>
									<Trash2Icon />
								</ToolbarButton>
							</ToolbarGroup>
						)}
					</ToolbarGroup>

					{collapsed && (
						<ToolbarGroup>
							<ToolbarButton
								onClick={() => { tf.insert.tableRow({ before: true })}}
								onMouseDown={(e) => e.preventDefault()}
								tooltip="Insert Row Before"
							>
								<ArrowUp />
							</ToolbarButton>
							<ToolbarButton
								onClick={() => { tf.insert.tableRow() }}
								onMouseDown={(e) => e.preventDefault()}
								tooltip="Insert Row After"
							>
								<ArrowDown />
							</ToolbarButton>
							<ToolbarButton
								onClick={() => { tf.remove.tableRow() }}
								onMouseDown={(e) => e.preventDefault()}
								tooltip="Delete Row"
							>
								<XIcon />
							</ToolbarButton>
						</ToolbarGroup>
					)}

					{collapsed && (
						<ToolbarGroup>
							<ToolbarButton
								onClick={() => { tf.insert.tableColumn({ before: true })}}
								onMouseDown={(e) => e.preventDefault()}
								tooltip="Insert Column Before"
							>
								<ArrowLeft />
							</ToolbarButton>
							<ToolbarButton
								onClick={() => { tf.insert.tableColumn() }}
								onMouseDown={(e) => e.preventDefault()}
								tooltip="Insert Column After"
							>
								<ArrowRight />
							</ToolbarButton>
							<ToolbarButton
								onClick={() => { tf.remove.tableColumn() }}
								onMouseDown={(e) => e.preventDefault()}
								tooltip="Delete Column"
							>
								<XIcon />
							</ToolbarButton>
						</ToolbarGroup>
					)}
				</Toolbar>
			</PopoverContent>
		</Popover>
	)
}

function ColorDropdownMenu({ children, tooltip }: { children: React.ReactNode, tooltip: string }) {
	const [open, setOpen] = React.useState(false)

	const editorRef = useEditorRef()

	const selectedCells = usePluginOption(TablePlugin, 'selectedCells')
	// 更新颜色
	const onUpdateColor = React.useCallback(
		(color: string) => {
			setOpen(false)
			setCellBackground(editorRef, { color, selectedCells: selectedCells ?? [] })
		},
		[selectedCells, editorRef]
	)
	// 清空颜色
	const onClearColor = React.useCallback(
		() => {
			setOpen(false)
			setCellBackground(editorRef, {
				color: null,
				selectedCells: selectedCells ?? []
			})
		},
		[selectedCells, editorRef]
	)

	return (
		<DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
			<DropdownMenuTrigger asChild>
				<ToolbarButton tooltip={tooltip}>{children}</ToolbarButton>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="start">
				<ToolbarMenuGroup label="Colors">
					<ColorDropdownMenuItems colors={DEFAULT_COLORS} updateColor={onUpdateColor} className="px-2" />
				</ToolbarMenuGroup>
				<DropdownMenuGroup>
					{/*清空颜色*/}
					<DropdownMenuItem className="p-2" onClick={onClearColor}>
						<EraserIcon />
						<span>清空</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

function TableBordersDropdownMenuContent(props: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
	const editorRef = useEditorRef()
	const {
		getOnSelectTableBorder,
		hasBottomBorder,
		hasLeftBorder,
		hasNoBorders,
		hasOuterBorders,
		hasRightBorder,
		hasTopBorder
	} = useTableBordersDropdownMenuContentState()

	return (
		<DropdownMenuContent
			className="min-w-[220px]"
			onCloseAutoFocus={(e) => {
				e.preventDefault()
				editorRef.tf.focus()
			}}
			align="start"
			side="right"
			sideOffset={0}
			{...props}
		>
			<DropdownMenuGroup>
				<DropdownMenuCheckboxItem
					checked={hasTopBorder}
					onCheckedChange={getOnSelectTableBorder('top')}
				>
					<BorderTopIcon />
					<div>上边框</div>
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					checked={hasBottomBorder}
					onCheckedChange={getOnSelectTableBorder('bottom')}
				>
					<BorderBottomIcon />
					<div>下边框</div>
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					checked={hasLeftBorder}
					onCheckedChange={getOnSelectTableBorder('left')}
				>
					<BorderLeftIcon />
					<div>左边框</div>
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					checked={hasRightBorder}
					onCheckedChange={getOnSelectTableBorder('right')}
				>
					<BorderRightIcon />
					<div>右边框</div>
				</DropdownMenuCheckboxItem>
			</DropdownMenuGroup>

			<DropdownMenuGroup>
				<DropdownMenuCheckboxItem
					checked={hasNoBorders}
					onCheckedChange={getOnSelectTableBorder('none')}
				>
					<BorderNoneIcon />
					<div>无边框</div>
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					checked={hasOuterBorders}
					onCheckedChange={getOnSelectTableBorder('outer')}
				>
					<BorderAllIcon />
					<div>添加边框</div>
				</DropdownMenuCheckboxItem>
			</DropdownMenuGroup>
		</DropdownMenuContent>
	)
}

export function TableRowElement(props: PlateElementProps<TTableElement>) {
	const { element } = props
	const readOnly = useReadOnly()
	const selected = useSelected()
	const editorRef = useEditorRef()
	const isSelectionAreaVisible = usePluginOption(
		BlockSelectionPlugin,
		'isSelectionAreaVisible'
	)
	const hasControls = !readOnly && !isSelectionAreaVisible

	const { isDragging, previewRef, handleRef } = useDraggable({
		element,
		type: element.type,
		canDropNode: ({ dragEntry, dropEntry }) =>
			PathApi.equals(
				PathApi.parent(dropEntry[1]),
				PathApi.parent(dropEntry[1])
			),
		onDropHandler: (_, { dragItem }) => {
			const dragElement = (dragItem as { element: TElement }).element

			if (dragElement) {
				editorRef.tf.select(dragElement)
			}
		}
	})

	return (
		<PlateElement
			{...props}
			ref={useComposedRef(props.ref, previewRef)}
			as="tr"
			className={cn('group/row', isDragging && 'opacity-50')}
			attributes={{
				...props.attributes,
				'data-selected': selected ? 'true' : undefined
			}}
		>
			{hasControls && (
				<td className="w-2 select-none" contentEditable={false}>
					<RowDragHandle dragRef={handleRef} />
					<RowDropLine />
				</td>
			)}
		</PlateElement>
	)
}

function RowDragHandle({ dragRef }: { dragRef: React.Ref<any> }) {
	const editorRef = useEditorRef()
	const element = useElement()

	return (
		<Button
			ref={dragRef}
			variant="outline"
			className={cn(
				'absolute top-1/2 left-0 z-55 h-6 2-4 -translate-y-1/2 p-0 focus-visible:ring-0 focus-visible:ring-offset-0',
				'cursor-grab active:cursor-grabbing',
				'opacity-0 transition-opacity duration-100 group-hover/row:opacity-100 group-has-data-[resizing="true"]/row:opacity-0'
			)}
			onClick={() => {
				editorRef.tf.select(element)
			}}
		>
			<GripVertical className="text-muted-foreground"/>
		</Button>
	)
}

function RowDropLine() {
	const { dropLine } = useDropLine()

	if (!dropLine) return null

	return (
		<div className={cn(
			'absolute inset-x-0 left-2 z-50 h-0.5 bg-brand/50',
			dropLine === 'top' ? '-top-px' : '-bottom-px'
		)} />
	)
}
