import React from 'react';import alertIcon from '../assets/icons/alert.svg';
import bagIcon from '../assets/icons/bag.svg';
import ipoIcon from '../assets/icons/ipo.svg';
import nfoIcon from '../assets/icons/nfo.svg';

const data = [
  {
    "title": "IPO",
    "description": "Apply for companies that are yet to be listed on stock exchange.",
    "icon": ipoIcon
  },
  {
    "title": "NFO",
    "description": "Invest in new funds that are to be launched by the asset management company.",
    "icon": nfoIcon
  },
  {
    "title": "Basket order",
    "description": "Create stock baskets and invest in the companies through SIP.",
    "icon": bagIcon
  },
  {
    "title": "Alert",
    "description": "Get notifications based on customized price alerts and never miss any opportunity.",
    "icon": alertIcon
  }
];

export default function Callout() {
  return (
    <div className="flex justify-between bg-white p-3 rounded-lg shadow-xl gap-4 mt-4">
      {data.map((item, index) => (
        <div key={index} className="border p-2 rounded-lg">
            <div className='flex'>
                <img src={item.icon} alt='icon' className='mr-3'/>
                <h3 className="font-bold text-[#1D2939] text-[16px]">{item.title}</h3>
            </div>
          
          <p className='text-[#667085] mt-3 text-[14.7px]'>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
