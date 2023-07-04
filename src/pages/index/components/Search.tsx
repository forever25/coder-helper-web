
import { CloseOne } from '@icon-park/react'

function Search() {
  return (
    <div className="text-center text-primary">
      <h1 className="pt-4 text-2xl font-semibold">CODER HELPER</h1>
      <div className="relative items-center max-w-4xl pt-4 mx-auto form-control">
        <input type="text" placeholder="请输入关键字查询工具" className="w-full max-w-4xl input input-bordered input-primary" />
        <label className="max-w-4xl label">
          <span className="text-secondary">热门工具：</span>
          <HotTool></HotTool>
        </label>
        <CloseOne className="absolute transition-transform cursor-pointer right-3 top-7 hover:scale-90"  theme="outline" size="24" />
      </div>
      <SearchResult></SearchResult>
    </div>
  )
}

function HotTool(tool: any) {
  return <span className="label-text-alt text-info">Bottom</span>
}

function SearchResult() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl mx-auto text-left text-black">
        <p>
          找到&nbsp; “<span className="font-bold text-primary">aaa </span>”&nbsp; 的工具
        </p>
        <p className="text-gray-400">
          共：<span className="text-primary">111</span> 个
        </p>
      </div>
      <div className="grid lg:grid-cols-4 xm:grid-cols-3">
      </div>
    </div>
  )
}

export { Search }
