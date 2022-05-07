import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Img1 from '../../image/1.png';
import Img2 from '../../image/2.png';
import Img3 from '../../image/3.png';
import roblox from '../../image/roblox3.png';
import Bean from '../../image/Path5.png';
import { IoIosArrowRoundForward } from 'react-icons/io';

const callouts = [
  {
    title: 'Blu Kicks',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cumque corrupti',
  },
  {
    title: 'POV',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cumque corrupti',
  },
  {
    title: 'SoYoung',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cumque corrupti',
  },
];

function PageThree() {
  const [width, setWidth] = useState(0);
  const slide = useRef();

  useEffect(() => {
    setWidth(slide.current.scrollWidth - slide.current.offsetWidth);
  }, []);

  return (
    <div>
      <div className="w-full h-vh">
        {/* slide box */}

        <motion.div
          ref={slide}
          className="overflow-hidden cursor-grab mx-5 lg:mx-[12rem] 2xl:mx-[32rem]"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="absolute  border bg-white -my-16 mx-10 w-[300px] h-[140px] lg:w-[250px] lg:py-0"
          >
            <h1 className="flex justify-start my-5 mx-5 font-extrabold text-3xl font-sans ">
              Blu Kicks
            </h1>
            <p className="text-left mx-6 text-[12px] leading-tight">
              Places where you can leverage tools and software to free up time
              to focus on growing the business.
            </p>
          </motion.div>
        </motion.div>

        {/* main course */}
        <div className="flex flex-col mx-10 pt-40">
          <h1 className="text-left text-white text-4xl font-extrabold font-sans lg:text-center">
            POV
          </h1>
          <p className="text-left text-white mt-8 text-[18px] lg:hidden ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud ullamco laboris nisi ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p className="text-left text-white mt-8 text-[18px] hidden lg:block lg:text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            <br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim
            <br /> veniam, quis nostrud ullamco laboris nisi ea commodo
            consequat. Duis
            <br /> aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu
            <br /> fugiat nulla pariatur.
          </p>

          <h1 className="text-left text-white text-4xl font-extrabold font-sans mt-16 lg:text-center">
            Resource
          </h1>
          <p className="text-left text-white mt-8 text-[18px] lg:hidden">
            These cases are perfectly simple and easy to distinguish. In a free
            hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best
          </p>
          <p className="text-left text-white mt-8 text-[18px] hidden lg:block lg:text-center">
            These cases are perfectly simple and easy to distinguish. In a free
            hour,
            <br /> when our power of choice is untrammelled and when nothing
            prevents our <br /> being able to do what we like best
          </p>

          <h1 className="text-left text-white text-4xl font-extrabold font-sans mt-[67px] lg:text-center">
            Help & Tips
          </h1>
          <div className="lg:flex lg:mx-auto lg:pt-10">
            <div>
              <img
                src={Img1}
                alt="img"
                className="w-full h-full object-cover pt-14 lg:w-[311px] lg:h-[176px] lg:pt-0 lg:mx-2"
              />
              <div className="-translate-y-0 border-none bg-black  h-[83px] w-full -my-[82px] opacity-50"></div>
              <h1 className="absolute text-left text-white font-sans font-bold text-xl lg:text-[16px] tracking-wide mx-6 my-3">
                Start quickly with simple <br />
                steps
              </h1>
              <div className="rounded-full absolute  mx-[24rem] mt-4 w-12 h-12 lg:w-10 lg:h-10 bg-white lg:mx-[254px] lg:my-5"></div>
              <IoIosArrowRoundForward
                className="absolute text-blue-600 text-4xl  mx-[390.5px] my-[22px] lg:mx-64"
                width={50}
              />
            </div>
            <div>
              <img
                src={Img2}
                alt="img"
                className="w-full h-full object-cover pt-24 lg:w-[311px] lg:h-[176px] lg:pt-0 lg:mx-2"
              />
              <div className="-translate-y-0 border-none bg-black  h-[83px] w-full -my-[82px] opacity-50"></div>
              <h1 className="absolute text-left text-white font-sans font-bold text-xl lg:text-[16px] tracking-wide mx-6 my-3">
                Run smoothly at vero eos et <br />
                accusamus
              </h1>
              <div className="lg:-mx-[7.5rem] lg:my-0">
                <div className="rounded-full absolute  mx-[24rem] mt-4 w-12 h-12 lg:w-10 lg:h-10 bg-white"></div>
                <IoIosArrowRoundForward
                  className="absolute text-blue-600 text-4xl  mx-[390.5px] my-[22px] lg:mx-[386px] lg:my-5"
                  width={50}
                />
              </div>
            </div>
            <div>
              <img
                src={Img3}
                alt="img"
                className="w-full h-full object-cover pt-24 lg:w-[311px] lg:h-[176px] lg:pt-0 lg:mx-2"
              />
              <div className="-translate-y-0 border-none bg-black  h-[83px] w-full -my-[82px] opacity-50"></div>
              <h1 className="absolute text-left text-white font-sans font-bold text-xl lg:text-[16px] tracking-wide mx-6 my-3">
                Denounce with righteous <br />
                indignation
              </h1>
              <div className="lg:mx-5">
                <div className="rounded-full absolute mx-[24rem] mt-4 w-12 h-12 lg:w-10 lg:h-10 bg-white lg:mx-[15rem]"></div>
                <IoIosArrowRoundForward
                  className="absolute text-blue-600 text-4xl  mx-[390.5px] my-[22px] lg:mx-[242px] lg:my-5 "
                  width={50}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex">
          <div className="mx-10 lg:mx-auto">
            <h1 className="text-left lg:text-center text-white text-4xl font-extrabold font-sans mt-44">
              You're all set.
            </h1>
            <p className="text-left text-white mt-8 text-[18px]">
              The wise man therefore always holds in these matters to this
              principle of selection.
            </p>
          </div>
        </div>
        <div className="lg:flex lg:justify-start">
          <img
            className="absolute pt-24 mx-5 lg:pt-0 lg:-my-20"
            src={roblox}
            alt="img"
          />
          <img className="pt-36 lg:pt-0 lg:-my-5" src={Bean} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default PageThree;
