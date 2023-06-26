export { render }
export const clientRouting = true
export const hydrationCanBeAborted = true

import React from 'react'
import { createRoot, hydrateRoot, Root } from 'react-dom/client'
import { PageShell } from './PageShell'

let reactRoot: Root
async function render(pageContext: any) {
  const { Page, pageProps } = pageContext

  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )

  const reactRootElem: HTMLElement = document.getElementById('react-root')!

  if (pageContext.isHydration) {
    reactRoot = hydrateRoot(reactRootElem, page)
  } else {
    if (!reactRoot) {
      reactRoot = createRoot(reactRootElem)
    }
    reactRoot.render(page)
  }
}
