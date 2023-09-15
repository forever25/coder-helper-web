import { ToolInterface } from '@/config/toolsConfig'

function ToolCard({ tool }: { tool: ToolInterface }) {
  return (
    <div className="mt-4 text-left text-black shadow-lg w-80 card bg-base-8 scale-up-center">
      <div className="p-4 card-body">
        <h3 className="text-sm card-title">{tool.title}</h3>
        <div className="tooltip tooltip-bottom" data-tip={tool.detail}>
          <p className="overflow-hidden text-left text-ellipsis whitespace-nowrap">{tool.detail}</p>
        </div>
        {/* <div className="text-right">
   
        </div> */}
      </div>
    </div>
  ) 
}

export { ToolCard }
