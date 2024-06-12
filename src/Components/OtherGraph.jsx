import React from 'react'
import Chart from "react-apexcharts";
import up from '../assets/icons/up.svg';
import down from '../assets/icons/down.svg';
import { BiChevronRight } from "react-icons/bi";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, AreaChart, Tooltip, Area } from 'recharts';
const data = [
    {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400,
        "amt": 2400
    },
    {
        "name": "Page B",
        "uv": 3000,
        "pv": 1398,
        "amt": 2210
    },
    {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800,
        "amt": 2290
    },
    {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908,
        "amt": 2000
    },
    {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181
    },
    {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
    },
    {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
    }
]
export default function OtherGraph() {
    return (
        <div className='flex justify-around bg-white p-2 rounded-lg shadow-xl relative'>
            <div className='absolute w-[35px] h-[35px] rounded-full bg-white flex justify-center items-center -right-4 shadow-xl top-16'>
                <BiChevronRight className='w-[30px] h-[30px] text-[#101828]' />
            </div>
            <div className='flex flex-col p-2 border-[1.5px] rounded-md justify-between my-2 px-4'>
                <div className='font-medium text-[14px] pl-1 pt-1 text-[#667085]'>DOWJONES</div>
                <div className='flex  items-start '>
                    <div className='flex flex-col items-center'>
                        <div className='font-semibold text-[22px] mt-2 text-[#1D2939]'>25,312.12</div>
                        <div className='bg-[#ECFDF3] flex text-[12px] px-[5px] py-[3px] rounded-xl my-2'>
                            <img src={up} alt='up' className='w-[12px] pl-[1px] mr-[4px]' />
                            <p className='text-[#027A48] font-medium'>+0.66%</p>
                        </div>
                    </div>
                    <div className='-mt-6'>
                        <AreaChart width={100} height={70} data={data}
                            margin={{ top: 20, right: 0, left: 10, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#039855" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#039855" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Area type="monotone" dataKey="uv" stroke="#039855" fillOpacity={1} fill="url(#colorUv)" />
                        </AreaChart>
                    </div>
                </div>
            </div>
            <div className='px-4 flex flex-col p-2 border-[1.5px] rounded-md justify-between my-2'>
                <div className='font-medium text-[14px] pl-1 pt-1 text-[#667085]'>S&P500</div>
                <div className='flex  items-start '>
                    <div className='flex flex-col items-center'>
                        <div className='font-semibold text-[22px] mt-2 text-[#1D2939]'>3,881</div>
                        <div className='bg-[#FEF3F2] flex text-[12px] px-[5px] py-[3px] rounded-xl my-2'>
                            <img src={down} alt='up' className='w-[12px] pl-[1px] mr-[4px]' />
                            <p className='text-[#B42318] font-medium'>-0.66%</p>
                        </div>
                    </div>
                    <div className='-mt-6'>
                        <AreaChart width={100} height={70} data={data}
                            margin={{ top: 20, right: 0, left: 10, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorUv1" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#D92D20" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#D92D20" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Area type="monotone" dataKey="uv" stroke="#D92D20" fillOpacity={1} fill="url(#colorUv1)" />
                        </AreaChart>
                    </div>
                </div>
            </div>
            <div className='px-4 flex flex-col p-2 border-[1.5px] rounded-md justify-between my-2'>
                <div className='font-medium text-[14px] pl-1 pt-1 text-[#667085]'>NASDAQ</div>
                <div className='flex  items-start '>
                    <div className='flex flex-col items-center'>
                        <div className='font-semibold text-[22px] mt-2 text-[#1D2939]'>25,312.12</div>
                        <div className='bg-[#ECFDF3] flex text-[12px] px-[5px] py-[3px] rounded-xl my-2'>
                            <img src={up} alt='up' className='w-[12px] pl-[1px] mr-[4px]' />
                            <p className='text-[#027A48] font-medium'>+0.66%</p>
                        </div>
                    </div>
                    <div className='-mt-6'>
                        <AreaChart width={100} height={70} data={data}
                            margin={{ top: 20, right: 0, left: 10, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#039855" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#039855" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Area type="monotone" dataKey="uv" stroke="#039855" fillOpacity={1} fill="url(#colorUv)" />
                        </AreaChart>
                    </div>
                </div>
            </div>
            <div className='px-4 flex flex-col p-2 border-[1.5px] rounded-md justify-between my-2'>
                <div className='font-medium text-[14px] pl-1 pt-1 text-[#667085]'>FTSE</div>
                <div className='flex  items-start '>
                    <div className='flex flex-col items-center'>
                        <div className='font-semibold text-[22px] mt-2 text-[#1D2939]'>3,881</div>
                        <div className='bg-[#FEF3F2] flex text-[12px] px-[5px] py-[3px] rounded-xl my-2'>
                            <img src={down} alt='up' className='w-[12px] pl-[1px] mr-[4px]' />
                            <p className='text-[#B42318] font-medium'>-0.66%</p>
                        </div>
                    </div>
                    <div className='-mt-6'>
                        <AreaChart width={100} height={70} data={data}
                            margin={{ top: 20, right: 0, left: 10, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorUv1" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#D92D20" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#D92D20" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Area type="monotone" dataKey="uv" stroke="#D92D20" fillOpacity={1} fill="url(#colorUv1)" />
                        </AreaChart>
                    </div>
                </div>
            </div>


        </div>
    )
}
