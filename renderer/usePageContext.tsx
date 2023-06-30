// `usePageContext` allows us to access `pageContext` in any React component.
// See https://vite-plugin-ssr.com/pageContext-anywhere



import React, { useContext, createContext } from 'react'

const Context = createContext(null)

function PageContextProvider({ pageContext, children }: any) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>
}

function usePageContext() {
  const pageContext = useContext(Context)
  return pageContext
}


export { PageContextProvider }
export { usePageContext }