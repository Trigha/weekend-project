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
            className="absolute w-[200px] h-[135px] mx-[335.2px] my-16"
            src={Roblox}
            alt=""
          />
          <img
            className="mx-[435px] w-[100px] h-[250px] -my-5"
            src={Part4}
            alt=""
          />
        </div>
        <div>
          <p className="text-right mx-10 my-16 ">
            <span className="text-blue-700 font-sans font-extrabold text-lg tracking-tight">
              Deffinition;
            </span>{' '}
            <span className="font-semibold font-sans text-xl leading-6">
              a practice or exercise to test <br />
              or improve one's fitness for athletic
              <br /> competition, ability, or performance to <br /> exhaust
              (something, such as a mine) by <br /> working to devise, arrange,
              or achieve by
              <br /> resolving difficulties.
              <br /> Merriam-Webster.com Dictionary.
            </span>
          </p>
          <p className="text-right text-white mx-10 text-xl font-semibold italic tracking-wide font-sans -my-5">
            -weekend team
          </p>
        </div>

        <div className="block pt-[38px]">
          <img className="mx-[112px] my-[36px]" src={MidOval} alt="" />
          <h1 className="absolute -my-16 mx-20 font-sans font-extrabold text-4xl text-white">
            Testimonial
          </h1>
        </div>
      </div>
    </div>
  );
}

export default PageTwo;
