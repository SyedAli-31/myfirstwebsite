import { Heebo } from "next/font/google";
import Image from "next/image";
const heebo = Heebo({ subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="w-full max-w-[1030px] mx-auto mt-32 p-6">
      {/* Main container */}
      <div className="flex flex-col lg:flex-row lg:items-start items-center justify-between">
        {/* Image */}
        <div className="relative w-[292px] h-[299px] lg:order-2 order-1 mb-6 lg:mb-0">
          <Image
            className="z-50  absolute  lg:left-[48px] lg:mx-0"
            src={"/image1.png"}
            alt="hero-image"
            width={"292"}
            height={"299"}
          />
          <div className="bg-heroEllipse w-[292px] h-[299px] -z-10 rounded-full absolute  lg:left-[40px] top-1 right-2" />
        </div>

        {/* Text Content */}
        <div
          className={`${heebo.className} w-full lg:w-[521px] h-auto flex flex-col justify-between items-center lg:items-start order-2 lg:order-1`}
        >
          <h1 className="font-black text-5xl lg:leading-[61px] text-[#21243D] text-center lg:text-left">
            Hi, I am John,
            <br />
            Creative Technologist
          </h1>
          <p className="font-normal mt-4 text-center lg:text-left w-full lg:w-[510px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            <br />
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam
            <br /> consequat sunt nostrud amet
          </p>
          <div className="mt-6">
            <button className="bg-btn w-[205px] h-[50px] text-white shadow-sm shadow-black/65">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
