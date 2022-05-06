import React from 'react';
import Roblox from '../../image/roblox2.png';
import Part4 from '../../image/Path4.png';
import MidOval from '../../image/midOval.png';

function PageTwo() {
  return (
    <div>
      <div className="w-full bg-blossom h-[780px]">
        <div className="flex">
          <img
            className="absolute w-[200px] h-[135px] mx-[335.2px] my-16 sm:mx-[537px] md:mx-[663px] lg:mx-[973px] xl:mx-[1299px] 2xl:mx-[1914px]"
            src={Roblox}
            alt=""
          />
          <img
            className="mx-[435px] w-[100px] h-[250px] -my-5 sm:mx-[635px] md:mx-[762px] lg:mx-[1073px] xl:mx-[1399px] 2xl:mx-[2013px]"
            src={Part4}
            alt=""
          />
        </div>
        <div>
          <p className="text-right mx-10 my-16 sm:flex sm:justify-center md:flex md:justify-center">
            <span className="text-blue-700 font-sans font-extrabold text-lg tracking-tight xl:hidden">
              Deffinition;{' '}
              <span className="font-semibold font-sans text-xl leading-6 text-black xl:hidden">
                a practice or exercise to test <br />
                or improve one's fitness for athletic
                <br /> competition, ability, or performance to <br /> exhaust
                (something, such as a mine) by <br /> working to devise,
                arrange, or achieve by
                <br /> resolving difficulties.
                <br /> Merriam-Webster.com Dictionary.
              </span>
            </span>
            <span className="text-blue-700 font-sans font-extrabold text-lg xl:text-2xl tracking-tight hidden xl:block">
              Deffinition;
              <span className="font-semibold font-sans text-xl xl:text-2xl leading-6 text-black ">
                a practice or exercise to test or improve one's <br /> fitness
                for athletic competition, ability, or performance to <br />{' '}
                exhaust (something, such as a mine) by working to devise,
                <br />
                arrange, or achieve by resolving difficulties.
                <br />
                Merriam-Webster.com Dictionary.
              </span>
            </span>
          </p>
          <p className="text-right text-white mx-10 text-xl font-semibold italic tracking-wide font-sans -my-5 sm:mx-48 md:mx-64 lg:mx-[25.5rem] xl:mx-[30.5rem] 2xl:mx-[47.5rem] 2xl:text-2xl">
            -weekend team
          </p>
        </div>

        <div className="block pt-[38px]">
          <img className="mx-[112px] my-[36px]" src={MidOval} alt="" />
          <h1 className="absolute -my-16 mx-24 font-sans font-extrabold text-4xl text-white xl:mx-[43rem] xl:-my-20 2xl:mx-[62rem]">
            Testimonial
          </h1>
        </div>
      </div>
    </div>
  );
}

export default PageTwo;
