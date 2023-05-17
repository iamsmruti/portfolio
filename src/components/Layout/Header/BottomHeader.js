import Link from 'next/link'
import React from 'react'

const BottomHeader = () => {
  return (
    <div className='flex'>
      <Link href={"#"}>
        <p>Start</p>
      </Link>
    </div>
  )
}

export default BottomHeader