import { ToolCard } from '@/components/ToolCard'

function LeftMenu() {
  return (
    <ul className="absolute left-0 w-32 menu rounded-box">
      <li>
        <a className="active">Item 1</a>
      </li>
      <li>
        <a>Item 2</a>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </ul>
  )
}

function ToolContext() {
  return (
    <div className="mt-4">
      <h2>文本工具</h2>
      <div className="flex flex-wrap justify-between">
        <ToolCard></ToolCard>
        <ToolCard></ToolCard>
        <ToolCard></ToolCard>
        <ToolCard></ToolCard>
        <ToolCard></ToolCard>
        <ToolCard></ToolCard>
        <div className="h-0 w-80"></div>
        <div className="h-0 w-80"></div>
        <div className="h-0 w-80"></div>
      </div>
    </div>
  )
}

function ContextWrapper() {
  return (
    <div className="box-border relative pl-32">
      <LeftMenu></LeftMenu>
      <div className=" h-[76vh] overflow-y-auto overflow-x-hidden">
        <ToolContext></ToolContext>
        <ToolContext></ToolContext>
        <ToolContext></ToolContext>
        <ToolContext></ToolContext>
      </div>
    </div>
  )
}

export { ContextWrapper }
