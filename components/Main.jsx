import React from "react";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-500">
            Learning, Evolving!
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Dhruvkumar</span>
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
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Main;
