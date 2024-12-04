import Image from "next/image";

const Thirdframe = () => {
  return (
    <div className="bg-white w-full   lg:h-[580px] mx-auto pt-8 lg:pt-12 px-4 lg:px-12">
      {/* Main container */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-around">
        {/* Image */}
        <div className="relative w-full max-w-[644px] h-[380px] lg:h-[478px] lg:order-2 order-1">
          <Image
            
            src={"/image5.png"}
            alt="hero-image"
            width={600}
            height={565}
            layout="intrinsic" // Ensures proper scaling on mobile
          />
        </div>

        {/* Text Content */}
        <div
          className={`w-full max-w-[416px] ml-0 lg:ml-[100px] h-auto flex flex-col justify-between   lg:items-start order-2 lg:order-1  lg:mt-[80px]`}
        >
          
            <p className="text-[24px]  lg:text-[40px] leading-[30px] sm:leading-[40px] lg:leading-[50px] text-black font-crimson font-bold">
              Lorem ipsum dolor sit amet consectetur
            </p>
          
          <p className="font-normal font-sans mt-4  lg:text-left w-full max-w-[416px] min-h-18 text-[14px] sm:text-[15px] leading-[18.75px] text-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </p>
          <div className="mt-6 ">
            <button className="bg-black w-[170px]   h-[48px]  text-white rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thirdframe;
