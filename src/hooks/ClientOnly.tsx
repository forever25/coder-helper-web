import { Suspense, useEffect, useState, lazy, FC, ComponentType, ReactNode } from "react"

interface ClientOnlyPropType {
  load: any,
  fallback: any
}


const defaultProps: ClientOnlyPropType = {
  load: null,
  fallback: <Loading></Loading>
}


function ClientOnly({ load, fallback } = defaultProps) {
  const [Component, setComponent] = useState(() => fallback)

  useEffect(() => {
    setComponent(() => lazy(load))
  }, [])

  return (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  )
}

function Loading() {
  return (<div>
    <span className="loading loading-infinity loading-lg"></span>
  </div>)
}


export {
  ClientOnly
}