import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full max-w-[1180px] mx-auto mt-6 p-4 lg:p-6">
      {/* Main container */}
      <div className="flex flex-col lg:flex-row lg:items-center items-center justify-between">
        {/* Image */}
        <div className="relative w-full max-w-[644px] h-[220px] lg:h-[378px] lg:order-2 order-1 lg:ml-0 mb-4 lg:mb-0">
          <Image
            className="z-50 absolute lg:left-0"
            src={"/image1.png"}
            alt="hero-image"
            width={644}
            height={378}
            layout="responsive" // Ensures proper scaling on all screens
            priority // Optimizes loading
          />
        </div>

        {/* Text Content */}
        <div
          className={`w-full max-w-[416px] flex flex-col    lg:items-start order-2 lg:order-1`}
        >
          <h1 className="text-[16px] leading-[20px] font-sans font-bold text-white text-start lg:text-left">
            W E L C O M E
            <br />
            <p className="font-crimson text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[34px] sm:leading-[42px] md:leading-[48px] lg:leading-[50px] font-bold text-white pt-2">
              Lorem ipsum dolor sit amet consectetur
            </p>
          </h1>
          <p className="font-normal font-sans mt-1 text-start lg:text-left w-full max-w-[416px] text-[14px] sm:text-[15px] leading-[18px] sm:leading-[18.75px] text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </p>
          <div className="mt-3">
            <button className="bg-white w-[140px] sm:w-[170px] h-[40px] sm:h-[48px] text-black rounded">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
