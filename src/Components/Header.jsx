import React from 'react'
import bell from '../assets/icons/bell.svg';
import profile from '../assets/profile.png';
import search from '../assets/icons/search.svg'
export default function Header() {
  return (
    <div className='w-full h-full flex justify-between items-center shadow-md'>
      <div class='ml-7'>
        <div class="relative flex items-center h-9 w-[386px] rounded-lg focus-within:shadow-lg overflow-hidden bg-[#f2f2f2]">
          <div class="grid place-items-center h-full w-12 text-gray-300 bg-[#f2f2f2]">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg> */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.58332 17.5C13.9556 17.5 17.5 13.9556 17.5 9.58332C17.5 5.21107 13.9556 1.66666 9.58332 1.66666C5.21107 1.66666 1.66666 5.21107 1.66666 9.58332C1.66666 13.9556 5.21107 17.5 9.58332 17.5Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 bg-[#f2f2f2]" />
              <path d="M18.3333 18.3333L16.6667 16.6667" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>

          <input
            class="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-gray-100"
            type="text"
            id="search"
            placeholder="Search for stock & more" />
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center bg-gray-100 mr-3'>
          <img src={bell} alt='Bell' className='w-6 h-6 ' />
        </div>
        <div className=' flex items-center'>
          <div className='w-[40px] h-[40px]  rounded-full mr-2'>
            <img src={profile} alt='profile' className='w-[40px] h-[40px]' />
          </div>
          <div className='mr-6'>
            <div className='font-medium text-[16px] text-[#1D2939]'>Anna</div>
            <div className='text-[#667085] text-[16px]'>anna@tandemloop.in</div>
          </div>
        </div>
      </div>
    </div>
  )
}
