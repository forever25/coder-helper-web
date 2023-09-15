import { FC, StrictMode } from 'react'
import { LayoutDefault } from './LayoutDefault'
import { PageContextProvider } from './usePageContext'
import { PageContext } from './types'

const PageShell: FC<{ children: any; pageContext: PageContext }> = ({ children, pageContext }) => {
  const Layout = pageContext.exports.Layout || LayoutDefault

  return (
    <StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>{children}</Layout>
      </PageContextProvider>
    </StrictMode>
  )
}

export { PageShell }
