import React from "react";

const Card = ({ title, des, icon }) => {
  return (
    // <div className="w-full px-12 h-80 bg-red-100  rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] hover:bg-gradient-to-b hover:from-black hover:text-[#5651e5] hover:to-[#1e2024] hover:text-white-1600 transition-color duration-100">
      <div className="w-full px-12 h-80 shadow-md rounded-lg shadow-gray-400 flex items-center cursor-pointer shadow-shadowOne hover:scale-105 ease-in duration-150 hover:text-[#5651e5]">
      <div className="flex flex-col gap-6 translate-y-2">
        <div>
          <span className="text-5xl">{icon}</span>
        </div>
        <div>
          <h2 className="text-2xl">{title}</h2>
          <p className="base">{des}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
