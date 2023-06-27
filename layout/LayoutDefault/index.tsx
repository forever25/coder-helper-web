import { DefaultHeader } from "./Header"

interface LayoutDefaultProps {
  children: any
}

function LayoutDefault({ children }: LayoutDefaultProps) {
  return (
    <>
      <DefaultHeader></DefaultHeader>
      <div className="md:container m-auto">
        {children}
      </div>
    </>
  )
}



export { LayoutDefault }