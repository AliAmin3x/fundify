import React from "react";

const SideLayout = ({ children }) => {
  return (
    <div className="bg-[#4b5945]">
      <div className="absolute flex items-center m-8">
        <h1 className="font-bold text-3xl text-white font-Inter">Fundify</h1>
      </div>
      <div className="flex flex-row h-screen max-h-full">
        <div className="w-1/2 h-full text-white flex items-center justify-center relative">
          <div className="h-screen pt-24 z-50">
            <img
              src={`/Images/login image1.png`}
              alt=""
              className="h-2/3 w-auto z-20"
            />
          </div>
        </div>

        <div className="w-1/2 max-h-full h-screen bg-[#141414] text-black  overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SideLayout;
