import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300 ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 ">
            <p className="text-4xl font-bold  inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className=" max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8  ">
          <div className=" sm:text-right text-4xl font-bold ">
            <p>Hi. I'm Jafir, nice to meet you. Please take a look around. </p>
          </div>
          <div>
            <p>
              I am a full stack developer with a flair for IoT innovation. I
              create seamless web apps, from captivating front-end interfaces to
              robust back-end systems. My IoT skills add a unique dimension,
              allowing me to connect devices, gather insights, and bridge the
              digital-physical gap. Let's collaborate and bring your
              tech-powered visions to life!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
