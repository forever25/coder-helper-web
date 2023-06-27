import { menus } from "@r/config/menuConfig"
import { MenuMobile, MenuWeb } from './Menu'
import logoSvgF from '@r/assets/images/logo.svg?url'

function DefaultHeader() {
  return (
    <div className="navbar bg-base-100">
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
      </div>
      <div className="navbar-center hidden lg:flex">
        <MenuWeb menus={menus}></MenuWeb>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  )
}

function Logo() {
  return (<a className="btn btn-ghost normal-case text-xl" href="/" title="coder helper logo,程序员工具">
    <img src={logoSvgF} alt="程序员工具logo,coder helper-logo" />
  </a>)
}

export { DefaultHeader }