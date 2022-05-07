import React from 'react';
import { motion } from 'framer-motion';
import Img1 from '../../image/1.png';
import Img2 from '../../image/2.png';
import Img3 from '../../image/3.png';
import roblox from '../../image/roblox3.png';
import Bean from '../../image/Path5.png';
import { IoIosArrowRoundForward } from 'react-icons/io';

// <div className="page-four">
//     <motion.div
//         className="page-four-content"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//     />

function PageThree() {
  return (
    <div>
      <div className="w-full h-[2000px]">
        {/* slide box */}
        <div className="absolute border bg-white -my-16 mx-10 w-[247px] h-[140px]">
          <h1 className="flex justify-start my-5 mx-5 font-extrabold text-3xl font-sans ">
            Blu Kicks
          </h1>
          <p className="text-left mx-6 text-[12px] leading-tight">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            cumque corrupti
          </p>
        </div>
        {/* main course */}
        <div className="flex flex-col mx-10 pt-40">
          <h1 className="text-left text-white text-4xl font-extrabold font-sans">
            POV
          </h1>
          <p className="text-left text-white mt-8 text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud ullamco laboris nisi ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </p>

          <h1 className="text-left text-white text-4xl font-extrabold font-sans mt-16">
            Resource
          </h1>
          <p className="text-left text-white mt-8 text-[18px]">
            These cases are perfectly simple and easy to distinguish. In a free
            hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best
          </p>

          <h1 className="text-left text-white text-4xl font-extrabold font-sans mt-[67px]">
            Help & Tips
          </h1>
          <div>
            <img
              src={Img1}
              alt="img"
              className="w-full h-full object-cover pt-14"
            />
            <div className="-translate-y-0 border-none bg-black  h-[83px] w-full -my-[82px] opacity-50"></div>
            <h1 className="absolute text-left text-white font-sans font-bold text-xl tracking-wide mx-6 my-3">
              Start quickly with simple <br />
              steps
            </h1>
            <div className="rounded-full absolute  mx-[24rem] mt-4 w-12 h-12 bg-white"></div>
            <IoIosArrowRoundForward
              className="absolute text-blue-600 text-4xl  mx-[390.5px] my-[22px]"
              width={50}
            />
          </div>

          <h1 className="text-left text-white text-4xl font-extrabold font-sans mt-44">
            You're all set.
          </h1>
          <p className="text-left text-white mt-8 text-[18px]">
            The wise man therefore always holds in these matters to this
            principle of selection.
          </p>
        </div>
        <div>
          <img className="absolute pt-24 mx-5" src={roblox} alt="img" />
          <img className="pt-36" src={Bean} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default PageThree;
