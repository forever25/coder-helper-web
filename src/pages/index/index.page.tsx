import { useContext } from 'react'
import { ReactReduxContext } from 'react-redux'
import { useSelector } from 'react-redux'

import { Search } from './components/Search'
import { ContextWrapper } from './components/Context'
import { documentTitle } from '@/config/systemConfig'

const documentProps = {
  title: `首页-${documentTitle}`,
  description: '程序员工具网站-coder helper，致力于开发程序员工具，提高程序员开发效率，减少重复性工作，更好摸鱼',
  keywords: '程序员工具,coder helper,工具网站'
}

function Page() {
  return (
    <>
      <main className="mx-auto md:container">
        <Search></Search>
        <ContextWrapper></ContextWrapper>
      </main>
    </>
  )
}

export { Page, documentProps }
