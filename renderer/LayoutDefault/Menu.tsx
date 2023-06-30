import { MenuItem } from '@/config/menuConfig'
import { useState } from 'react'

interface MenuPropType {
  menus: MenuItem[]
}

function MenuMobile({ menus }: MenuPropType) {

  return (
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {menus.map(menu => (
        <li key={menu.href}>
          <a href={menu.href} title={menu.title} className='navbar-item-active'>{menu.name}</a>
          {Array.isArray(menu?.children) && menu.children.length && (<ul className="p-2">{menu.children.map(childrenMenu => (
            <li key={menu.href}>
              <a href={childrenMenu.href} title={childrenMenu.title} >{childrenMenu.name}</a>
            </li>
          ))} </ul>
          )}
        </li>
      ))}
    </ul>
  )
}


function MenuWeb({ menus }: MenuPropType) {

  return (
    <ul tabIndex={0} className="menu menu-horizontal px-1 hidden lg:flex">
      {menus.map(menu => (
        <li key={menu.href}>
          {(Array.isArray(menu?.children) && menu.children.length) ? (
            <details>
              <summary>{menu.name}</summary>
              <ul className="p-2">{menu.children.map(childrenMenu => (
                <li key={menu.href}>
                  <a href={childrenMenu.href} title={childrenMenu.title} >{childrenMenu.name}</a>
                </li>
              ))} </ul>
            </details>
          ) : <a href={menu.href} title={menu.title} >{menu.name}</a>}
        </li>
      ))}
    </ul>
  )
}

export {
  MenuMobile,
  MenuWeb
}