function Banner() {
  return (
    <div className="text-center text-primary">
      <h1 className="pt-4 text-2xl font-semibold">CODER HELPER</h1>
      <div className="items-center pt-4 form-control" >
        <input type="text" placeholder="请输入关键字查询工具" className="w-full max-w-4xl input input-bordered input-primary" />
        <label className="max-w-4xl label">
          <span className="text-secondary">
            热门工具：
          </span>
          <HotTool></HotTool>
        </label >
      </div>
      <SearchResult></SearchResult>
    </div>
  )
}

function HotTool(tool: any) {
  return <span className="label-text-alt text-info">

    Bottom
  </span>
}

function SearchResult() {
  return <div>
    <div className="max-w-6xl mx-auto text-left text-black">
      找到&nbsp; “<span className="font-bold text-primary">aaa </span>”&nbsp; 的工具
    </div>

  </div>


}

export { Banner }