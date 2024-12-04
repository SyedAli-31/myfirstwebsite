import Image from "next/image";

const Secframe = () => {
  return (
    <div className="bg-white w-full   lg:h-[520px] mx-auto pt-8 lg:pt-12 px-4 lg:px-12">
      {/* Main container */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-around">
        {/* Image */}
        <div className="relative w-full max-w-[644px] h-[280px] lg:h-[478px] sm:max-w-[500px] lg:w-[644px]   lg:ml-12 mb-6  ">
          <Image
            className="z-50"
            src={"/image3.png"}
            alt="hero-image"
            width={500}
            height={431}
          />
        </div>

        {/* Text Content */}
        <div className="w-full max-w-[470px] flex flex-col lg:justify-between   lg:items-start lg:order-1 lg:mr-12">
          
            <p className="text-[24px]  lg:text-[40px] leading-[30px] sm:leading-[40px] lg:leading-[50px] text-black font-crimson font-bold">
              Lorem ipsum dolor sit amet consectetur
            </p>
          
          <p className="font-normal font-sans mt-4  lg:text-left w-full max-w-[416px] min-h-18 text-[14px] sm:text-[15px] leading-[18.75px] text-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </p>
          <div className="mt-4 sm:mt-6">
            <button className="bg-black w-[170px]   h-[48px]  text-white rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secframe;
