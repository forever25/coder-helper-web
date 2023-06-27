
import React from 'react'
import { createRoot, hydrateRoot, Root } from 'react-dom/client'
import { PageShell } from './PageShell'
import { Analytics } from '@vercel/analytics/react'

import "./styles/index.css"

let reactRoot: Root
async function render(pageContext: any) {
  const { Page, pageProps } = pageContext

  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
      <Analytics />
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


export { render }
export const clientRouting = true
export const hydrationCanBeAborted = true
