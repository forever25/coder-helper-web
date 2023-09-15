import { TOOL_CATEGORY, TOOL_MAP } from '@/config/toolsConfig'
import { EnumTool, ToolAction } from './actions'

const initialState = {
  allCategory: TOOL_CATEGORY,
  activeCategory: TOOL_CATEGORY[0],
  allToolMap: TOOL_MAP
}

export default (state = initialState, action?: ToolAction) => {
  switch (action?.type) {
    case EnumTool.Filter:
      return {
        ...state,
        allCategory: state.allCategory.filter(it => it)
      }
    case EnumTool.ChangeActiveCategory:
      return {
        ...state,
        activeCategory: action.activeCategory
      }
    case EnumTool.Init:
      return initialState
    default:
      return state
  }
}
