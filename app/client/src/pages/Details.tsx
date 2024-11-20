import React from 'react'
import NavBar from '../components/navbar/NavBar'
import { MoveRight } from 'lucide-react'

const Details = () => {
    return (
        <div className=' w-[100vw]  border-u border-t border-[--border-line] h-[400px] flex justify-center   '>
            <img src="Taskera.png" alt="" className='opacity-[10%] translate-y-[-15%] h-[700px] w-[1100px] z-0' />
            <div className=' h-[30vh] w-[30vw]  absolute top-[200px] m-auto text-start justify-center items-center '>
                <div className=' w-[25vw] mx-auto leading-10 mt-4'>
                    <h1 className='text-[35px] font-light'>Hello there,</h1>
                    <h1 className='text-[35px] font-light'>Welcome to <span className='font-semi-bold'>Taskera</span></h1>
                </div>

                <div className=' mx-auto mt-4' >
                    <div className='w-[25vw]  flex mx-auto gap-3 items-center' >
                        <input type="text" className='bg-[var(--background-2)] text-white w-[300px]  mt-2 rounded-xl py-3 text-sm px-2 outline-none' placeholder='Enter username' />
                        <div className='bg-[var(--secondary)] h-[40px] w-[40px] rounded-[100%]  text-center mt-1'>
                            <MoveRight className='mt-2 mx-auto text-black hover:rotate-[-45deg] transition-all hover:cursor-pointer delay-50' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
