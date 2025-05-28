import { ReactNode } from "react"
import Header from "./Header"

const Container = ({ children }: {children: ReactNode}) => {
  return (
    <div className='flex justify-center w-[100%]'>
      <div className='max-w-[1100px] w-[100%] px-3 py-2'>
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Container