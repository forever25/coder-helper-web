export interface MenuItem {
  href: string
  title: string
  name: string
  children?: MenuItem
}

export const menus: MenuItem[] = [
  {
    name: '首页',
    title: '首页',
    href: '/'
  },
  {
    name: '站内工具',
    title: '站内工具',
    href: '/in-site-tools'
  },
  {
    name: '外链工具',
    title: '外链工具',
    href: '/external-link-tools'
  },
  {
    name: '关于我们',
    title: '关于我们',
    href: '/about'
  },
]
