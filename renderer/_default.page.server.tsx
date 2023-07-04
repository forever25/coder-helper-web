
import { renderToString } from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'
import { PageShell } from './PageShell'

// See https://vite-plugin-ssr.com/data-fetching
const passToClient = ['pageProps', 'routeParams']
async function render(pageContext: any) {
  const { Page, pageProps } = pageContext
  const { documentProps } = pageContext.exports;

  const pageHtml = renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )
  const title = documentProps?.title
  const description = documentProps?.description
  const keywords = documentProps?.keywords

  return escapeInject`<!DOCTYPE html>
    <html data-theme="default">
      <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="${description}">
        <meta name="keywords" content="${keywords}">
        <meta charset="utf-8">
        <link rel="icon" href="/logo.svg" />
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}

export { render }
export { passToClient }