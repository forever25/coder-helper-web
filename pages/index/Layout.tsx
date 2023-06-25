import { FC } from 'react'

import './Layout.css'


const Layout: FC<any> = ({ children }) => {
  return <div id="landing-page">{children}</div>
}

export { Layout }