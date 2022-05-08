import React from 'react';

function Footer() {
  return (
    <div>
      <div className="absolute border-none bg-mainBlue w-full h-[100px]">
        <div className="flex justify-between py-8 mx-7">
          <h1 className="text-white font-sans">
            <span className="font-bold">wknd@</span>2020
          </h1>
          <div className="border rounded-full border-white w-40 h-18 text-white">
            alpha version 0.1
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
