export interface MenuItem {
  href: string
  title: string
  name: string
  children?: MenuItem
}

export const menus: MenuItem[] = [
  {
    name: '首页',
    title: 'title',
    href: '/'
  },
  {
    name: '站内工具',
    title: 'title',
    href: '/in-site-tools'
  },
  {
    name: '外链工具',
    title: 'title',
    href: '/external-link-tools'
  },
  {
    name: '关于我',
    title: 'title',
    href: '/about'
  },
]
