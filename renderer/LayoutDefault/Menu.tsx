import { MenuItem } from '@/config/menuConfig'
import { useEffect, useState } from 'react'
import classname from 'classname'

interface MenuPropType {
  menus: MenuItem[]
}

function MenuMobile({ menus }: MenuPropType) {
  const { isActive } = useHook()
  return (
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {menus.map(menu => (
        <li key={menu.href}>
          <a className={classname(isActive(menu.href),'navbar-item-active') } href={menu.href} title={menu.title}>{menu.name}</a>
          {Array.isArray(menu?.children) && menu.children.length && (<ul className="p-2">{menu.children.map(childrenMenu => (
            <li key={menu.href}>
              <a className={isActive(childrenMenu.href)} href={childrenMenu.href} title={childrenMenu.title} >{childrenMenu.name}</a>
            </li>
          ))} </ul>
          )}
        </li>
      ))}
    </ul>
  )
}


function MenuWeb({ menus }: MenuPropType) {
  const { isActive } = useHook()
  return (
    <ul tabIndex={0} className="hidden px-1 menu menu-horizontal lg:flex">
      {menus.map(menu => (
        <li key={menu.href}>
          {(Array.isArray(menu?.children) && menu.children.length) ? (
            <details>
              <summary>{menu.name}</summary>
              <ul className="p-2">{menu.children.map(childrenMenu => (
                <li key={menu.href}>
                  <a className={isActive(childrenMenu.href)} href={childrenMenu.href} title={childrenMenu.title} >{childrenMenu.name}</a>
                </li>
              ))} </ul>
            </details>
          ) : <a className={isActive(menu.href)} href={menu.href} title={menu.title} >{menu.name}</a>}
        </li>
      ))}
    </ul>
  )
}

function useHook() {
  const [pathname, setPathname] = useState('/')
  useEffect(() => {
    setPathname(window.location.pathname)
  })

  function isActive(href: string): string {
    return pathname === href ? 'active' : ''
  }
  return {
    isActive
  }
}

export {
  MenuMobile,
  MenuWeb
}