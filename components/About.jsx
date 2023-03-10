import React from "react";
import Title from "components/Title";
import Card from "components/Card";
import { FaBars, FaMobile } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen py-6">
      <div className="max-w-[1240px] m-auto md:grid">
        <Title title="About Me" des="What I Do" />
        <div className="grid grid-cols-3 gap-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-12 sm:px-12">
          <Card
            title="Business Startegy"
            des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            icon= {<FaBars/>}
          />
          <Card
            title="Business Startegy"
            des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."            icon= {<FaMobile/>}
          />
          <Card
            title="Business Startegy"
            des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."            icon= {<FaMobile/>}
          />
          <Card
            title="Business Startegy"
            des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."            icon= {<FaMobile/>}
          />
          <Card
            title="Business startegy"
            des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."            icon= {<FaMobile/>}
          />
          <Card
            title="Business startegy"
            des="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."            icon= {<FaMobile/>}
          />
        </div>
      </div>
    </div>
  );
};

export default About;

// @media (max-width: 640px)
// .sm\:grid-cols-1 {
//     grid-template-columns: repeat(1, minmax(0, 1fr));
// }
