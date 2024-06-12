import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import wallet from '../assets/icons/wallet.png';
import home from '../assets/icons/home.svg';
import { FaRupeeSign } from "react-icons/fa";
import watchlist from '../assets/icons/watchlist.svg';
import portfolio from '../assets/icons/portfolio.svg';
import mutualfunds from '../assets/icons/mutualfunds.svg'
import order from '../assets/icons/order.svg'
import basketorder from '../assets/icons/basketorder.svg'
import research from '../assets/icons/research.svg'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
export default function Menu() {
    const [open ,setOpen]= useState(true)
    function opening(){
        setOpen(!open);
    }
    return (
        <>
            <div className='mt-4 mx-2 flex justify-between items-center border-[1.5px] rounded-md flex-row p-1 border-[#005ECC]'>
                <div className='flex mx-1'>
                    <div>
                        <img src={wallet} alt='wallet' />
                    </div>
                    <div className='text-[#667085]'>
                        <p className='text-[#667085] font-medium'>Wallet</p>
                        <div className='flex justify-center items-center text-[#1D2939]'>
                            <FaRupeeSign className='w-3 h-3 text-[10px]' />
                            <p className='flex font-medium text-[13px] -mt-[2px]'>51,000</p>
                        </div>
                    </div>
                </div>
                <div>
                    <IoIosArrowForward />
                </div>
            </div>
            <div className='text-[12px] ml-4 my-4  font-semibold text-[#98A2B3]'>
                MAIN MENU
            </div>
            {/* Home menu */}
            <div className='flex mt-4' onClick={opening}>
                <div className='flex justify-between items-center w-full mx-2 bg-[#EEF6FF] px-4 rounded-md'>
                    <div className='flex  w-full py-1.5  '>
                        <img src={home} alt='home' />
                        <div className='ml-2 text-[#004799] font-medium '>Home</div>
                    </div>
                    <div>
                        {open ?(<IoIosArrowUp className='text-[#004799] w-5 h-5' />):
                        (<IoIosArrowDown className='text-[#004799] w-5 h-5'/>)}
                    </div>

                </div>
            </div>
           {open && <div className='flex flex-col gap-2 mt-4'>
                <div className='pl-12  bg-[#EEF6FF]  font-medium text-[#004799] rounded-md py-1.5 mx-2 '>DashBoard</div>
                <div className='pl-12  text-[#344054] font-medium  rounded-md py-1.5 mx-2'>Screeners</div>
            </div>}
            {/* Watchlist */}
            <div className='flex justify-between items-center w-full mx-2 px-4 rounded-md mt-2'>
                <div className='flex  w-full py-1.5  '>
                    <img src={watchlist} alt='watchlist' />
                    <div className='ml-2 text-[#344054] font-medium'>Watchlist</div>
                </div>
            </div>
            {/* Portfolio */}

            <div className='flex mt-2.5'>
                <div className='flex justify-between items-center w-full mx-2  px-4 rounded-md'>
                    <div className='flex  w-full py-1.5  '>
                        <img src={portfolio} alt='portfolio' />
                        <div className='ml-2 text-[#344054] font-medium'>Portfolio</div>
                    </div>
                    <div>
                        <IoIosArrowDown className='text-[#344054] w-5 h-5' />
                    </div>
                </div>
            </div>

            <div className='flex mt-2.5'>
                <div className='flex justify-between items-center w-full mx-2  px-4 rounded-md'>
                    <div className='flex  w-full py-1.5  '>
                        <img src={mutualfunds} alt='mutualfunds' />
                        <div className='ml-2 text-[#344054] font-medium'>Mutual funds</div>
                    </div>
                    <div>
                        <IoIosArrowDown className='text-[#344054] w-5 h-5' />
                    </div>
                </div>
            </div>
            {/* Order */}
            <div className='flex justify-between items-center w-full mx-2 px-4 rounded-md mt-2.5'>
                <div className='flex  w-full py-1.5  '>
                    <img src={order} alt='order' />
                    <div className='ml-2 text-[#344054] font-medium'>Order</div>
                </div>
            </div>
            {/* Basketorder */}

            <div className='flex justify-between items-center w-full mx-2 px-4 rounded-md mt-2.5'>
                <div className='flex  w-full py-1.5  '>
                    <img src={basketorder} alt='basketorder' />
                    <div className='ml-2 text-[#344054] font-medium'> Basket order</div>
                </div>
            </div>

            {/* Research report */}
            <div className='flex justify-between items-center w-full mx-2 px-4 rounded-md mt-2.5'>
                <div className='flex  w-full py-1.5  '>
                    <img src={research} alt='research' />
                    <div className='ml-2 text-[#344054] font-medium'> Research</div>
                </div>
            </div>
        </>
    )
}
