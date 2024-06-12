import React from 'react';
import logo from '../assets/Logomark.png';
import logo1 from '../assets/Logotype.png';
import Menu from './Menu';
import LowerSidebar from './LowerSidebar';
import { IoIosArrowBack } from "react-icons/io";
export default function Sidebar() {
  return (
    <div className=' w-full  h-screen '>
      <div className='pl-4 flex items-center w-full h-[11%] border relative'>
        <img src={logo} alt='logo' className='w-[32px]' />
        <img src={logo1} alt='logo' className='w-[80px] pl-2' />
        <div className='absolute w-[30px] h-[30px] rounded-full bg-[#005ECC] flex justify-center items-center -right-4'>
          <IoIosArrowBack className='w-[20px] h-[20px] text-white' />
        </div>
      </div>
      <div className='overflow-y-scroll scrollbar-none overflow-x-hidden h-[89%] w-full  flex justify-center items-center'>
        <div className='w-[95%] h-[98%] '>
          <Menu />
          <LowerSidebar />
        </div>
       
      </div>
      
    </div>
  )
}
