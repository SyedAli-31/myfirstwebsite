import { Heebo } from "next/font/google";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const heebo = Heebo({ subsets: ["latin"] });
const Footer = () => {
  return (
    <div className="bg-footerBackground space-y-6 h-[243px] flex items-center  justify-center flex-col">
      <div className="flex gap-7 ">
      
        <Link href={""} ><IoLogoFacebook className="w-[30px] h-[30px]" />{" "}  </Link>
        <Link href={""} ><FaInstagram className="w-[30px] h-[30px]" />{" "}  </Link>
        <Link href={""} ><FaTwitter className="w-[30px] h-[30px]" />{" "}  </Link>
        <Link href={""} ><FaLinkedin className="w-[30px] h-[30px]" />  </Link>
      </div>
      <p className={`${heebo.className} text-center font-medium text-[18px] `}>
        Copyright ©2020 All rights reserved
      </p>
    </div>
  );
};

export default Footer;
