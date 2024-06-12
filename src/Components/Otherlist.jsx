import React from 'react';
import up from '../assets/icons/arrow-up.svg';
import down from '../assets/icons/arrow-down.svg';
const data = [
    {
        "currency_pair": "USDINR",
        "change": "+0.47%",
        "date": "26 Apr",
        "rate": "82.1245",
        "bool":true
    },
    {
        "currency_pair": "USDINR",
        "change": "+1.20%",
        "date": "29 May",
        "rate": "82.1858",
        "bool":true
    },
    {
        "currency_pair": "GBPINR",
        "change": "-2.3%",
        "date": "26 Apr",
        "rate": "101.7697",
        "bool":false
    },
    {
        "currency_pair": "GBPINR",
        "change": "-0.20%",
        "date": "29 May",
        "rate": "102.4534",
        "bool":false
    },
    {
        "currency_pair": "EURINR",
        "change": "+0.50%",
        "date": "26 Apr",
        "rate": "90.4545",
        "bool":true
    }
]
export default function Otherlist() {
    return (
        <div className='bg-white'>
            {data.map((item, index) => (
                <div key={index} className='grid grid-cols-4 py-5 border-[1px] border-t-[#d2d2de] text-[14px] font-medium text-[#101828]'>
                    <div className='pl-2 ml-2'>{item.currency_pair}</div>
                    {/* <div></div> */}
                    <div className='flex'>
                    {item.bool ? (
                            <div className='bg-[#ECFDF3] flex text-[12px] px-[5px] py-[3px] rounded-xl'>
                                <img src={up} alt='up' className='w-[12px] pl-[1px] mr-[4px] flex' />
                                <p className='text-[#027A48] font-medium flex'>{item.change}</p>
                            </div>
                        ) : (
                            <div className='bg-[#FEF3F2] flex text-[12px] px-[5px] py-[3px] rounded-xl'>
                                <img src={down} alt='down' className='w-[12px] pl-[1px] mr-[4px] flex' />
                                <p className='text-[#B42318] font-medium flex'>{item.change}</p>
                            </div>
                        )}
                    </div>
                    <div>{item.date}</div>
                    <div>{item.rate}</div>
                </div>
            ))}
        </div>
    )
}
