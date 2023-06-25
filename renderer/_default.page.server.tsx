
import { renderToString } from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'
import { PageShell } from './PageShell'
import type { PageContextBuiltInClientWithClientRouting } from 'vite-plugin-ssr/types'

// See https://vite-plugin-ssr.com/data-fetching
const passToClient = ['pageProps', 'routeParams']
async function render(pageContext: PageContextBuiltInClientWithClientRouting) {
  const { Page, pageProps } = pageContext

  const pageHtml = renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}

export { render }
export { passToClient }