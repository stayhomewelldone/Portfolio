import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen  bg-[rgb(10,25,47)] ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col  justify-center  h-full ">
        <p className="text-pink-600 ">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Jafir Kluis
        </h1>
        <h2 className=" text-4xl sm:text-7xl font-bold text-[#8892b0] ">
          I'm a Full Stack Developer.
        </h2>
        <p className=" text-[#8892b0] py-4 max-w-[700] ">
          I'm a full stack developer skilled in crafting complete web solutions.
          From user interfaces using HTML, CSS, and JavaScript to complex server
          logic, I bring seamless, innovative, and reliable digital experiences
          to life.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white border-2 hover:animate-bounce group px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className=" ml-3  " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
