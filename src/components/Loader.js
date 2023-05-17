import React from 'react'

const Loader = () => {
  return (
    <div className='bg-black w-[100vw] h-[100vh] flex justify-center items-center'>
        <div id="lds-ripple"><div></div><div></div></div>
    </div>
  )
}

export default Loader