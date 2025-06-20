'use client'

import { TableCellHeaderPlugin, TableCellPlugin, TablePlugin, TableRowPlugin } from '@platejs/table/react';

export const TableKit = [
	TablePlugin.withComponent(TableElement),
	TableRowPlugin.withComponent(),
	TableCellPlugin.withComponent(),
	TableCellHeaderPlugin.withComponent()
]
