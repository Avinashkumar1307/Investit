import React from 'react'
import Header from './Header'
import Mainsection from './Mainsection'
export default function Rightside() {
  return (
    <div className=' w-full h-screen'>
     <div className='flex h-[11%]'>
     <Header/>
     </div>
     <div className='overflow-x-hidden '>
     <Mainsection/>
     </div>
    </div>
  )
}
