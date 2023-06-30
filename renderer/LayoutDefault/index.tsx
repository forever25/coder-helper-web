import { DefaultHeader } from "./Header"

interface LayoutDefaultProps {
  children: any
}

function LayoutDefault({ children }: LayoutDefaultProps) {
  return (
    <>
      <DefaultHeader></DefaultHeader>
      <div className="mt-[-4rem] pt-16">
        {/* <div className="md:container m-auto"> */}
          {children}
        {/* </div> */}
      </div>
    </>
  )
}

export { LayoutDefault }