import React from 'react';
import up from '../assets/icons/arrow-up.svg';
import down from '../assets/icons/arrow-down.svg';

const data = [
    {
        "symbol": "HDFCLIFE",
        "change_percent": "+1.47%",
        "change": "+20.05",
        "price": "482.75",
        "bool":true
    },
    {
        "symbol": "RELIANCE",
        "change_percent": "+2.00%",
        "change": "+10.50",
        "price": "2,269.70",
        "bool": true // Fixed typo here
    },
    {
        "symbol": "ICICIBANK",
        "change_percent": "-8.3%",
        "change": "+80.50",
        "price": "852.40",
        "bool": false
    },
    {
        "symbol": "SBIN",
        "change_percent": "-2.6%",
        "change": "+25.05",
        "price": "521.85",
        "bool": false
    },
    {
        "symbol": "INFOSYS",
        "change_percent": "+10.5%",
        "change": "+80.30",
        "price": "1,390.61",
        "bool": true
    },
    {
        "symbol": "WIPRO",
        "change_percent": "+10.5%",
        "change": "+30.55",
        "price": "1,390.61",
        "bool": true
    },
    {
        "symbol": "JBMAUTO",
        "change_percent": "+10.5%",
        "change": "+50.55",
        "price": "1,390.61",
        "bool": true
    }
];

export default function List() {
    return (
        <div className='bg-white '>
            {data.map((item, index) => (
                <div key={index} className='grid grid-cols-5 py-5 border-[1px] border-t-[#d2d2de] text-[14px] font-medium text-[#101828]'>
                    <div className='col-span-2 pl-2 ml-2'>{item.symbol}</div>
                    <div className='flex'>
                        {item.bool ? (
                            <div className='bg-[#ECFDF3] flex text-[12px] px-[5px] py-[3px] rounded-xl'>
                                <img src={up} alt='up' className='w-[12px] pl-[1px] mr-[4px] flex' />
                                <p className='text-[#027A48] font-medium flex'>{item.change_percent}</p>
                            </div>
                        ) : (
                            <div className='bg-[#FEF3F2] flex text-[12px] px-[5px] py-[3px] rounded-xl'>
                                <img src={down} alt='down' className='w-[12px] pl-[1px] mr-[4px] flex' />
                                <p className='text-[#B42318] font-medium flex'>{item.change_percent}</p>
                            </div>
                        )}
                    </div>
                    <div>{item.change}</div>
                    <div>{item.price}</div>
                </div>
            ))}
        </div>
    );
}
