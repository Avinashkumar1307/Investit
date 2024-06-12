import React from 'react';
import setting from '../assets/icons/setting.svg';
import questions from '../assets/icons/question.svg';
import logout from '../assets/icons/logout.svg'

export default function LowerSidebar() {
    return (
        <>
            <div className='text-[12px] ml-7 my-2 mt-4 font-semibold text-[#98A2B3] mb-1'>
                SUPPORT
            </div>
            <div className='flex mt-4 justify-between items-center w-full mx-2 px-4 rounded-md'>
                <div className='flex  w-full py-1.5  '>
                    <img src={setting} alt='setting' />
                    <div className='ml-2 text-[#344054] font-medium'>Setting</div>
                </div>
            </div>
            <div className='flex mt-2 justify-between items-center w-full mx-2 px-4 rounded-md'>
                <div className='flex  w-full py-1.5  '>
                    <img src={questions} alt='questions' />
                    <div className='ml-2 text-[#344054] font-medium'>FAQs</div>
                </div>
            </div>
            
            <div className='w-[90%] mt-4 h-[1px] bg-[#E4E7EC] mx-auto'></div>


            <div className='flex mt-4 justify-between items-center w-full mx-2 px-4 rounded-md'>
                <div className='flex  w-full py-1.5  '>
                    <img src={logout} alt='logout' />
                    <div className='ml-2 text-[#344054] font-medium'>Logout</div>
                </div>
            </div>
            
        </>
    )
}
