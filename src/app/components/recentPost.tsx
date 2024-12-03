import React from 'react';
import Link from 'next/link';
import { Heebo } from 'next/font/google';
import Recpostcard from './Recpostcard';

const heebo = Heebo({ subsets: ['latin'] });

const RecentPost = () => {
  return (

<div className='bg-recBackground my-[66px] md:w-auto lg:h-[502px] flex flex-col justify-evenly'>
    <div className="  lg:w-[1030px] mx-auto p-6 flex flex-col justify-between">
        <div className='flex flex-row justify-between'>
        <h2 className={`${heebo.className} text-[22px] font-bold `}>Recent Post</h2>
        <Link href={""} className={`${heebo.className} font-medium text-btn`}>View All</Link>
        </div>

        <div className="mt-6 flex  flex-col lg:flex-row lg:items-start space-y-3 md:space-y-0 items-center justify-between">
        <Recpostcard />
        <Recpostcard />
        </div>
        </div>
      

        
</div>
  )
};

export default RecentPost;
