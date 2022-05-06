import React from 'react';
import BlueTop from '../../image/blue-top.png';
import MidTop from '../../image/midTop.png';
import OvalTop from '../../image/Oval.png';
import MidOval from '../..//image/midOval.png';
// import BlackMid from '../../image/Path2.png';
import BlackMed from '../../image/black2.png';
import Bean from '../..//image/Path3.png';
import Roblox from '../../image/roblox.png';

function PageOne() {
  return (
    <div className="w-full bg-blossom">
      <img
        className="hidden md:block md:w-[900px] md:h-[220px] md:mx-0 xl:mx-80 z-50"
        src={MidTop}
        alt=""
      />
      <div className="bg-blossom w-full  h-[667px] md:h-[768px]">
        <img
          className="w-full top-[100px] sm:w-30 sm:h-30 -mx-10 md:hidden"
          src={BlueTop}
          alt=""
        />

        <img
          className="hidden w-full h-[610px] xl:h-[695px] -my-28 mx-0 md:block"
          src={BlackMed}
          alt=""
        />

        <img
          className="w-[100px] h-[170px] top-[343px] -mx-10 absolute md:hidden"
          src={OvalTop}
          alt=""
        />

        <img
          className="invisible md:visible md:w-[132px] md:h-[132px] absolute top-[320px]  md:left-[24%] lg:left-[33%] xl:left-[33%]"
          src={MidOval}
          alt=""
        />

        <div className="flex flex-wrap">
          <div className="absolute  mx-auto top-[150px] md:top-[180px] left-32 sm:left-[27%] md:left-[10%] lg:left-[27%] xl:left-[27%]">
            <h1 className="top-[134px] text-[52px] md:text-[62px] md:w-[721px] font-sans leading-tight text-white font-bold md:tracking-normal">
              WEEKEND
              <span className="font-bold block md:inline"> FROM HOME </span>
            </h1>
            <h4 className="italic text-white text-[18px] md:text-xl font-semibold flex justify-center pt-1 md:leading-tight md:tracking-wide">
              Stay active with a litte workout
            </h4>
            <div className="hidden md:block">
              <img
                className="w-[266px] h-[327px] mx-[80%] md:mx-[60%] lg:mx-[70%] xl:mx-[90%] my-10"
                src={Bean}
                alt=""
              />
            </div>
            <div className="flex justify-center pt-5 md:pt-[67px]">
              <img
                className="h-[305px] w-[184px] md:-my-96"
                src={Roblox}
                alt="Roblox"
              />
              <button className="absolute bg-white text-black font-sans w-[231px] h-[58px] py-2 px-4 rounded-full top-[385px] md:top-[405px]">
                Let's Go
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageOne;
