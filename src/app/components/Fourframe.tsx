import Image from "next/image";
import React from "react";

const Fourframe = () => {
  return (
    <div className="bg-white mx-auto pt-12 px-4 lg:px-0">
      {/* Text */}
      <div className="lg:h-[700px] h-[1650px] mx-auto text-center">
        <h2 className="text-[16px] text-recBackground font-bold leading-[20px] pt-12">
          T E A M
        </h2>
        <h3 className="text-[32px] sm:text-[40px] font-crimson font-bold leading-[50px] pt-5">
          Our Talents
        </h3>
        <h3 className="pt-5 text-[16px] sm:text-[20px] text-[#000000] font-normal leading-[25px]">
          Lorem ipsum, dolor sit amet consectetur <br />
          Suscipit nemo hic quos, ab,
        </h3>
        <div className=" lg:flex">
        <Image
          className="mx-auto mt-8 sm:mt-10 lg:mt-12 "
          src={"/pic6.png"}
          alt="image"
          width={252}
          height={299}
        />
        <Image
          className="mx-auto mt-8 sm:mt-10 lg:mt-12 "
          src={"/pic7.png"}
          alt="image"
          width={252}
          height={299}
        />
        <Image
          className="mx-auto mt-8 sm:mt-10 lg:mt-12 "
          src={"/pic8.png"}
          alt="image"
          width={252}
          height={299}
        />
        <Image
          className="mx-auto mt-8 sm:mt-10 lg:mt-12 "
          src={"/pic9.png"}
          alt="image"
          width={252}
          height={299}
        />
       </div>
        <button className="bg-black w-[170px] h-[48px] text-white mt-12 mx-auto rounded">
          View Team
        </button>
      </div>
    </div>
  );
};

export default Fourframe;
