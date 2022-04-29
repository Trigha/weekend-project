import React from 'react';
import Logo from '../image/Bitmap.png';

function Header() {
  return (
    <div>
      <div className="bg-white">
        <div className="px-10 py-5 sm:px-10 sm:py-5 md:px-64">
          <div className="flex ">
            <img className="h-12 w-12 sm:h-16 sm:w-16" src={Logo} alt="" />
            <div className="flex flex-col ml-5">
              <h1 className="text-[18px] md:text-xl font-sans leading-tight">
                Good Morning
              </h1>
              <h1 className="text-[20px] md:text-2xl font-bold flex justify-start leading-tight md:leading-relaxed">
                Fellas
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
