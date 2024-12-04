
 import Image from "next/image";

;
const Footer = () => {
  return (
    <div className="bg-background w-[325px] lg:w-[1444px] h-[125px] lg:flex items-center  lg:justify-around gap-8  ">
      <Image className="mt-8 mx-auto lg:ml-0 lg:pt-0 lg:mx-0 "
      src={"/image7.png"}
      alt="footer"
      width={242}
      height={18}
      />
      <Image className=" ml-4 pt-6 mx-auto lg:ml-0 lg:pt-0 lg:mx-0 "
      src={"/image7A.png"}
      alt="footer"
      width={326}
      height={25}
      />
    </div>
  );
};

export default Footer;
