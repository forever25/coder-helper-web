import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { menus } from "@/config/menuConfig"
import { MenuMobile, MenuWeb } from './Menu'

function DefaultHeader() {
  return (
    <div className="sticky top-0 z-30 flex justify-center w-full h-16 transition-all duration-100 bg-transparent bg-opacity-90 backdrop-blur text-base-content drop-shadow-sm">
      <div className="navbar md:container ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul >
              <MenuMobile menus={menus}></MenuMobile>
            </ul>
          </div>
          <Logo></Logo>
          <MenuWeb menus={menus}></MenuWeb>
        </div>
        <div className="hidden navbar-center lg:flex">

        </div>
        <div className="navbar-end">
          <NavbarEnd></NavbarEnd>
        </div>
      </div>
    </div>
  )
}

function Logo() {
  return (<a className="text-xl normal-case btn btn-ghost" href="/" title="coder helper logo,程序员工具">
    <img className="h-8"  src="/logo.svg" alt="程序员工具logo,coder helper-logo" />
    CODER HELPER
  </a>)
}

function NavbarEnd() {
  return (
    <>
      {/* <ChangeTheme></ChangeTheme> */}
    </>
  )
}

function ChangeTheme() {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  return <select className="max-w-xs select select-bordered select-sm" data-choose-theme>
    <option value="default">default</option>
    <option value="light">Light</option>
  </select>
}

export { DefaultHeader }