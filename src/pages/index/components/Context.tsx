import { ToolCard } from '@/components/ToolCard'
import { useSelector } from '@/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { EnumTool } from '@/store/modules/tools/actions'
import { ToolInterface, ToolCategoryKey } from '@/config/toolsConfig'

function LeftMenu() {
  const { allCategory } = useSelector(store => store.tool)
  return (
    <ul className="absolute left-0 w-32 menu rounded-box">
      {allCategory.map(category => (
        <LeftMenuItem category={category} key={category}></LeftMenuItem>
      ))}
    </ul>
  )
}

function LeftMenuItem({ category }: { category: string }) {
  const { activeCategory } = useSelector(store => store.tool)
  const dispatch = useDispatch()

  return (
    <li
      onClick={() =>
        dispatch({
          type: EnumTool.ChangeActiveCategory,
          activeCategory: category
        })
      }>
      <a className={activeCategory === category ? 'active' : ''} href={`#${category}`}>
        {category}
      </a>
    </li>
  )
}

function ToolContext({ toolList, category }: { toolList: ToolInterface[] | undefined; category: ToolCategoryKey }) {
  if (!Array.isArray(toolList)) {
    return null
  }
  return (
    <div className="mt-4">
      <h2>{category}</h2>
      <div className="flex flex-wrap justify-between">
        {toolList.map((tool: ToolInterface) => (
          <ToolCard key={tool.title} tool={tool}></ToolCard>
        ))}

        <div className="h-0 w-80"></div>
        <div className="h-0 w-80"></div>
        <div className="h-0 w-80"></div>
      </div>
    </div>
  )
}

function ContextWrapper() {
  const { allToolMap, allCategory } = useSelector(store => store.tool)

  return (
    <div className="box-border relative pl-32">
      <LeftMenu></LeftMenu>
      <div className=" h-[76vh] overflow-y-auto overflow-x-hidden">
        {allCategory.map(category => (
          <ToolContext key={category} category={category} toolList={allToolMap[category]}></ToolContext>
        ))}
      </div>
    </div>
  )
}

export { ContextWrapper }
