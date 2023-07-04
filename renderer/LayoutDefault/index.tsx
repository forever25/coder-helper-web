import { DefaultHeader } from "./Header"
import { DefaultFooter } from "./Footer"

interface LayoutDefaultProps {
  children: any
}

function LayoutDefault({ children }: LayoutDefaultProps) {
  return (
    <>
      <DefaultHeader></DefaultHeader>
      <div className="mt-[-4rem] pt-16">
        {/* <div className="m-auto md:container"> */}
          {children}
        {/* </div> */}
      </div>
      <DefaultFooter></DefaultFooter>
    </>
  )
}

export { LayoutDefault }