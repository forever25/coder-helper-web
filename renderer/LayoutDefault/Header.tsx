import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { menus } from "@/config/menuConfig"
import { MenuMobile, MenuWeb } from './Menu'
import logoSvgF from '@/assets/images/logo.svg?url'

function DefaultHeader() {
  return (
    <div className="sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 
  bg-transparent text-base-content drop-shadow-sm">
      <div className="navbar md:container ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul >
              <MenuMobile menus={menus}></MenuMobile>
            </ul>
          </div>
          <Logo></Logo>
          <MenuWeb menus={menus}></MenuWeb>
        </div>
        <div className="navbar-center hidden lg:flex">

        </div>
        <div className="navbar-end">
          <NavbarEnd></NavbarEnd>
        </div>
      </div>
    </div>
  )
}

function Logo() {
  return (<a className="btn btn-ghost normal-case text-xl" href="/" title="coder helper logo,程序员工具">
    <img src={logoSvgF} alt="程序员工具logo,coder helper-logo" />
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

  return <select className="select select-bordered select-sm  max-w-xs" data-choose-theme>
    <option value="default">default</option>
    <option value="light">Light</option>
  </select>
}

export { DefaultHeader }