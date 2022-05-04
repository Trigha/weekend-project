import React from 'react';
import BlueTop from '../../image/blue-top.png';
import OvalTop from '../../image/Oval.png';
import BlackMid from '../../image/Path2.png';
import Roblox from '../../image/roblox.png';

function PageOne() {
  return (
    <div>
      <div className="bg-blossom w-full h-[667px] ">
        <img className="w-full top-[100px] -mx-10  " src={BlueTop} alt="" />

        <img
          className="w-[100px] h-[170px] top-[343px] -mx-10 absolute"
          src={OvalTop}
          alt=""
        />

        <div className="flex flex-wrap">
          <div className="absolute top-[150px] left-32 items-center">
            <h1 className="top-[134px] text-[52px] md:text-xl font-sans leading-tight text-white font-bold">
              WEEKEND
              <span className="flex flex-col font-sans font-bold">
                {' '}
                FROM HOME{' '}
              </span>
            </h1>
            <h4 className="text-white text-[18px] md:text-2xl font-bold flex justify-center pt-2 md:leading-relaxed">
              Stay active with a litte workout
            </h4>
            <div className="flex justify-center pt-5">
              <img className=" h-[305px] w-[184px]" src={Roblox} alt="Roblox" />
              <button className="absolute bg-white text-black font-sans w-[231px] h-[58px] py-2 px-4 rounded-full top-[385px]">
                Let's Go
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute top-10  -z-10 bg-blossom w-full h-[600px]">
        <img className="h-[182.83px] w-[751.56px]" src={BlueTop} alt="" />
        <h1 className="top-0 text-[52px] md:text-xl font-sans leading-tight text-white font-bold">
          WEEKEND
          <span className="flex flex-col font-sans font-bold"> FROM HOME </span>
        </h1>
        <h4 className="text-white text-[18px] md:text-2xl font-bold flex justify-center pt-5 md:leading-relaxed">
          Stay active with a litte workout
        </h4>
        <div className="top-[273px] left-[-5px] absolute">
          <img
            className="h-[150px] w-[80px] top-[273px]"
            src={OvalTop}
            alt=""
          />
        </div>

        <div className="bg-blossom w-full h-[600px]">
          <div className="flex flex-col items-center  w-full h-[600px]"></div>
        </div>
      </div> */}
    </div>
  );
}

export default PageOne;
