import Image from "next/image";
import React from "react";

const Frame26 = () => {
  return (
    <div className="bg-white mx-auto px-4">
      {/* Text */}
      <div className="h-auto lg:h-[380px] text-center">
        <h2 className="text-[14px] sm:text-[16px] text-recBackground font-bold leading-[18px] sm:leading-[20px] pt-6 sm:pt-12">
          P A R T N E R S
        </h2>
        <h3 className="text-[28px] sm:text-[36px] lg:text-[40px] font-crimson font-bold leading-[34px] sm:leading-[42px] lg:leading-[50px] pt-3 sm:pt-5">
          Lorem, Ipsum Dolor
        </h3>
        <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-normal leading-[22px] sm:leading-[24px] lg:leading-[25px] pt-3 sm:pt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </h3>
        <div className=" lg:flex lg:w-[1158px] items-center mx-auto">
        <Image
          className="mx-auto mt-8 sm:mt-10 lg:mt-12 "
          src={"/pic1.png"}
          alt="image"
          width={160}
          height={50}
        />
        <Image
          className="mx-auto mt-8 sm:mt-10 lg:mt-12 "
          src={"/pic2.png"}
          alt="image"
          width={160}
          height={50}
        />
        <Image
          className="mx-auto mt-8 sm:mt-10 lg:mt-12 "
          src={"/pic3.png"}
          alt="image"
          width={160}
          height={50}
        />
        <Image
          className="mx-auto mt-8 sm:mt-10 lg:mt-12 "
          src={"/pic4.png"}
          alt="image"
          width={160}
          height={50}
        />
        <Image
          className="mx-auto mt-8 sm:mt-10 lg:mt-12 "
          src={"/pic5.png"}
          alt="image"
          width={160}
          height={50}
        /></div>
        <button className="bg-black w-[170px] sm:w-[170px] h-[48px] sm:h-[48px] text-white mt-8 sm:mt-10 lg:mt-12 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Frame26;
