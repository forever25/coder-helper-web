import { ToolInterface } from '@/config/toolsConfig'

function ToolCard(tool: ToolInterface) {
  return (
    <div className="mt-4 text-left text-black shadow-md w-80 card bg base-100 scale-up-center">
      <div className="card-body">
        <h3 className="card-title">MD5加密工具</h3>
        <div className="tooltip tooltip-right" data-tip="hello">
          <p className="overflow-hidden text-left text-ellipsis whitespace-nowrap">If a dog chews shoes whose shoes does he choose?</p>
        </div>
        <div className="text-right">
          <a className="link link-secondary">I'm a simple link</a>
        </div>
      </div>
    </div>
  )
}

export { ToolCard }
