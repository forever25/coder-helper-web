import { MenuItem } from '@r/config/menuConfig'

interface MenuPropType {
  menus: MenuItem[]
}

function MenuMobile({ menus }: MenuPropType) {

  return (
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {menus.map(menu => (
        <li>
          <a href={menu.href} title={menu.title} >{menu.name}</a>
          {Array.isArray(menu?.children) && menu.children.length && (<ul className="p-2">{menu.children.map(childrenMenu => (
            <li>
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
    <ul tabIndex={0} className="menu menu-horizontal px-1">
      {menus.map(menu => (
        <li>
          {(Array.isArray(menu?.children) && menu.children.length) ? (
            <details>
            <summary>{menu.name}</summary>
              <ul className="p-2">{menu.children.map(childrenMenu => (
                <li>
                  <a href={childrenMenu.href} title={childrenMenu.title} >{childrenMenu.name}</a>
                </li>
              ))} </ul>
            </details>
          ) : <a href={menu.href} title={menu.title} >{menu.name}</a>}
        </li>
      ))}
    </ul>
  )

  return (<ul className="menu menu-horizontal px-1">
    <li><a>Item 1</a></li>
    <li tabIndex={0}>
      <details>
        <summary>Parent</summary>
        <ul className="p-2">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </details>
    </li>
    <li><a>Item 3</a></li>
  </ul>)

}

export {
  MenuMobile,
  MenuWeb
}