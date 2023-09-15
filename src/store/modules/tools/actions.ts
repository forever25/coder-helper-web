import type { Action } from 'redux'
import {  ToolCategoryKey } from '@/config/toolsConfig'

export interface ToolAction extends Action<EnumTool> {
  activeCategory: ToolCategoryKey
}

export enum EnumTool {
  Filter = 'Filter',
  Init = 'Init',
  ChangeActiveCategory = 'ChangeActiveCategory'
}
