import React from 'react'
import { Heebo } from 'next/font/google';

const heebo = Heebo({ subsets: ['latin'] });
const Recpostcard = () => {
  return (
    <div>
        <div className=" md:w-auto lg:w-[483px] h-[356px] bg-white flex items-center">
            <div className={`m-auto md:w-auto lg:w-[391px] h-[286px] flex flex-col items-start justify-between`}>
                <h2 className={`${heebo.className} font-bold text-[24px]  lg:text-[26px] ml-2`}>Making a design system from scratch</h2>
                <div className="w-[301.28px] h-[42.12px] flex items-center justify-between ">
                    <p className={`${heebo.className} font-normal  lg:text-[18px] text-black/70 ml-2`}>12 Feb 2020</p>
                    <p className={`${heebo.className} font-normal  lg:text-[18px] text-black/70 `}>|</p>
                    <p className={`${heebo.className} mr-10 font-normal sm:text-[14px] md:text-[16px]  lg:text-[18px] text-black/70`}>Design, Pattern</p>
                </div>
                <div className={`${heebo.className} font-normal  text-black text-[16px] lg:text-[18px] ml-2 mt-5`}>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recpostcard