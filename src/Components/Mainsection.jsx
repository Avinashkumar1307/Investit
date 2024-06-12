import React from 'react';

import List from './List';
import Otherlist from './Otherlist';
import Callout from './Callout';
import Graphdata from './Graphdata';
import down from '../assets/icons/up.svg';
import OtherGraph from './OtherGraph';

export default function Mainsection() {


  return (
    <div className='w-full  bg-gray-100 pb-6'>
      <p className='mx-6 pt-3  mb-3 text-[#667085] font-medium text-[14px]'>Dashboard</p>
      <div className='mx-6'>
        <div className='flex justify-between mb-2'>
          <p className='text-[#667085] font-semibold text-[18px]'>Indices</p>
          <p className='text-[#004799] text-[14px]'>See all</p>
        </div>
        <Graphdata />
      </div>
      <div className='flex mx-6 justify-between'>
        <div className='w-[49%]  ' >
          <div className='flex justify-between mb-2 mt-5'>
            <p className='text-[#667085] font-semibold text-[18px]'>Top movers</p>
            <p className='text-[#004799] text-[14px]'>See all</p>
          </div>
          <div className='flex  bg-white justify-start pt-2 pb-1 rounded-t-lg'>
            <div className='m-2 py-1 px-2 border-[1.5px] rounded-2xl flex text-[13px] font-semibold text-[#667085] bg-[#EEF6FF] border-[#66ADFF]'>Top gainers</div>
            <div className='m-2 py-1 px-2 border-[1.5px] rounded-2xl flex text-[13px] font-semibold text-[#667085]'>Top Losers</div>
            <div className='m-2 py-1 px-2 border-[1.5px] rounded-2xl flex text-[13px] font-semibold text-[#667085] border-[#E4E7EC]'>Active by valume</div>
          </div>
          <div className='grid grid-cols-5 p-3 border border-t-[#d2d2de]'>
            <div className='col-span-3 text-[13px] font-semibold text-[#667085]'>Stock</div>
            <div className='text-[13px] font-semibold text-[#667085]'>Change</div>
            <div className='text-[13px] font-semibold text-[#667085]'>Current&nbsp;price</div>
          </div>
          <List />
        </div>
        <div className='w-[49%]  ' >
          <div className='h-[100px] bg-white flex justify-center items-center  mt-5 rounded-lg border-[1.5px] shadow-lg border-[#99C8FF]'>
            <div className=' grid grid-cols-4 place-items-center gap-3'>
              <div className='ml-2'>
                <div className='text-[#667085] font-medium text-[11px]'>OVERALL&nbsp;RETURNS</div>
                <div className='flex gap-2'>
                  <div className='font-semibold text-[22px] text-[#344054]'>14.0%</div>
                  <img src={down} alt='up' className='w-[20px] pl-[1px] mr-[4px]' />
                </div>
              </div>
              <div className='ml-5'>
                <div className='text-[#667085] font-medium text-[9px]'>Day’s P&L</div>
                <div className='text-[#027A48] font-medium '>+19.00&nbsp;(0.2%)</div>
              </div>
              <div className='ml-5'>
                <div className='text-[#667085] font-medium text-[9px]'>CURRENT</div>
                <div className='font-medium text-[#344054]'>2,100.0</div>
              </div>
              <div>
                <div className='text-[#667085] font-medium text-[9px]'>INVESTED</div>
                <div className='font-medium text-[#344054]'>1,000.0</div>
              </div>
            </div>
          </div>
          <div>
            <div className='flex justify-between mb-2 mt-3 '>
              <p className='text-[#667085] font-semibold text-[18px]'>Currencies & commodities</p>
              <p className='text-[#004799] text-[14px]'>See all</p>

            </div>
            <div className='flex  bg-white justify-start pt-2 pb-1 rounded-t-lg'>
              <div className='m-2 py-1 px-2 border-[1.5px] rounded-2xl flex text-[13px] font-semibold text-[#667085] bg-[#EEF6FF] border-[#66ADFF]'>Currencies</div>
              <div className='m-2 py-1 px-2 border-2 rounded-2xl flex text-[13px] font-semibold text-[#667085]'>commodities</div>
            </div>
            <div className='grid grid-cols-4 m-3'>
              <div className='text-[13px] font-semibold text-[#667085]'>Stock</div>
              <div className='text-[13px] font-semibold text-[#667085]'>Change</div>
              <div className='text-[13px] font-semibold text-[#667085]'>Expire date</div>
              <div className='text-[13px] font-semibold text-[#667085]'>Current price</div>
            </div>
            <Otherlist />
          </div>

        </div>
      </div>
      <div className='mx-6'>
        <Callout />
      </div>
      <div className='mx-6 my-4'>
        <div className='flex justify-between mb-2 mt-3'>
          <p className='text-[#667085] font-semibold text-lg'>Global Indices</p>
          <p className='text-[#004799] text-[14px]'>See all</p>
        </div>
        <div className='mt-3'>
          <OtherGraph />
        </div>
      </div>
    </div>
  );
}
