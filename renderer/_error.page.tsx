

function Page(pageProps: any) {
  if (pageProps.is404) {
    // 返回 UI 组件 "Page Not Found"
    return <PageNotFound></PageNotFound>
  } else {
    // 返回 UI 组件 "Our server is having problems. Sincere apologies. Try again later."
  }
}


function PageNotFound() {
  return <div className="w-1/2 mx-auto">
    <img src="/404.svg" alt="404" />
  </div>
}

export { Page }