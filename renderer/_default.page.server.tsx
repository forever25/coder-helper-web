import { renderToString } from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'
import { PageShell } from './PageShell'
import { PageContext } from './types'
import { Provider } from 'react-redux'
import { getStore } from '@/store/index'

// See https://vite-plugin-ssr.com/data-fetching
const passToClient = ['pageProps', 'routeParams', 'PRELOADED_STATE']
async function render(pageContext: any) {
  const { documentProps } = pageContext.exports
  const { pageHtml } = pageContext

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

function onBeforeRender(pageContext: PageContext) {
  const store = getStore()

  const { Page, pageProps } = pageContext

  const pageHtml = renderToString(
    <Provider store={store}>
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>
    </Provider>
  )

  const PRELOADED_STATE = store.getState()

  return {
    pageContext: {
      PRELOADED_STATE,
      pageHtml
    }
  }
}

export { render }
export { passToClient }
export { onBeforeRender }
