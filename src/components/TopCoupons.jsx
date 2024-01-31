import React, { useEffect, useState } from 'react'

import axios from 'axios'; 
import { getBanner } from '../service/banner.service';
export default function TopCoupons() {

   
    
  const [couponList, setCouponList] = useState([])

    useEffect(()=>{
      setCouponList(getBanner())
      },[])


  return (
    <div className='flex flex-col justify-center items-center px-[8vw]'>
      <h1 className='text-2xl font-semibold text-center mt-10 mb-14  '>Today's Top Coupons & Offers</h1>

        <div className='grid grid-cols-5 gap-5 '>
            {
                couponList.map((coupon,index)=>(
                    <div key={index} className='h-[15rem] border rounded-lg shadow-md p-3 flex flex-col justify-between items-center'>
                        <div className='w-48  bg-gray-400 rounded-lg overflow-hidden'>
                            <img src={coupon.brandLogoUrl} alt="bandlogo" />
                        </div>
                        
                        <a href={coupon.url} target='_blank' className='text-center'>
                            <h3 className='font-bold text-lg'>{coupon.store}</h3>
                            <p>{coupon.title}</p>
                        </a>
                        <button className='btn font-light'>Get Code</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
