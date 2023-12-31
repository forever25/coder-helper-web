export type ToolType = 'link' | 'inside'
export type ToolCategoryKey = '数据转换' | '文本工具' | '图片工具' | '文件工具' | '视频工具' | '其他'
export enum EnumToolType {
  link = 'link',
  inside = 'inside'
}

export interface ToolInterface {
  label: string
  ToolType: ToolType
  title: string
  detail: string
  url: string
  keyWords: string
}

export type ToolCategoryMap = {
  [key in ToolCategoryKey]: ToolInterface[]
}

export const TOOL_MAP: Readonly<Partial<ToolCategoryMap>> = {
  数据转换: [
    {
      keyWords: '1',
      title: '测试',
      ToolType: EnumToolType.inside,
      label: '1',
      detail: 'ces',
      url: '/',
    }
  ],
  文本工具: []
}

export const TOOL_CATEGORY: Readonly<ToolCategoryKey[]> = ['数据转换', '文本工具', '图片工具', '视频工具', '文件工具', '其他']
