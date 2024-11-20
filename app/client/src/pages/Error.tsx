import React from 'react'

function Error() {
  return (
    <div className='h-[calc(100vh-60px)] w-[100vw] relative'>
      <img src="\images\404page.jpg" alt="" className='h-full w-full opacity-[40%] object-cover'/>
      <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[--ternary] text-[53vw] font-bold leading-none overflow-hidden opacity-[70%] m-0 p-0 h-[calc(100vh-60px)] flex items-center'>
        404
      </h1>
      <h1 className='absolute top-1/2 -translate-y-1/2 text-white left-1/2 -translate-x-1/2 text-[3vw]'>Looks like you are lost</h1>

    </div>
  )
}

export default Error