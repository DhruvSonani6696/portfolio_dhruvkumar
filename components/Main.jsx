import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-500">
            Learning, Evolving!
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I am <span className="text-[#5651e5]">Dhruvkumar</span>
          </h1>
          <h1 className="py-2 text-gray-700">
            <TypeAnimation
              sequence={[
                "A Front-End Web Developer", // Types 'One'
                1000, // Waits 1s
                "A Back-End Web Developer", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "A FullStack Web Developer", // Types 'Three' without deleting 'Two'
                () => {
                  console.log("Done typing!"); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a Front-End Developer
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100">
              <a href="https://www.linkedin.com/in/dhruvkumarsonani/">
              <FaLinkedin />
              </a>
             
            </div>
            <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100">
              <a href="https://github.com/DhruvSonani6696">
              <FaGithub />
              </a>
           
            </div>
            <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100">
            <a href="mailto:dhruvsonani07@gmail.com"><AiOutlineMail /></a>
            
            </div>
            {/* <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150">
              <FaLinkedin />
            </div> */}
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Main;
