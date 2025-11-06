import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div
      id="hero"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen text-white flex justify-center flex-col-reverse  lg:flex-row lg:items-center lg:justify-between gap-5 md:gap-8"
    >
      {/*hero-info*/}
      <div className="w-full lg:w-[60%] text-center lg:text-left ">
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[55px] font-bold">
          Hi, It’s Shihab
        </h1>
        <div className="text-[15px] sm:text-[22px] md:text-[23px] xl:text-[30px] mt-[-5px] font-semibold inline-block">
          <span className="text-white">I'm a</span>{" "}
          <TypeAnimation
            sequence={[
              " MERN Stack Developer",
              1000,
              " Mobile App Developer (React Native)",
              1000,
            ]}
            speed={50}
            style={{ color: "#7cf03d" }}
            repeat={Infinity}
          />
        </div>
        <p className="text-[14px] sm:text-[15px] md:text-[16px] mt-[10px] mb-[25px] max-w-xl mx-auto lg:mx-0">
          Fresher skilled in React, Node.js, Express.js, MongoDB, and Firebase,
          focused on building responsive web applications. Open to remote or
          on-site opportunities to apply skills and gain teamwork experience.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 md:justify-center lg:justify-start">
          <a href="/Resume (9).pdf" target="_blank" rel="noopener noreferrer">
            <button className="py-[10px] cursor-pointer px-[25px] sm:px-[30px] bg-[var(--primary-color)] rounded-[40px] border-2 border-[var(--primary-color)] shadow-[0_0_10px_#7cf03d] text-[14px] sm:text-[16px] font-semibold hover:bg-transparent hover:shadow-none text-black hover:text-[var(--primary-color)] transition-all duration-500 ease-in-out">
              Download Resume
            </button>
          </a>
          <div className="flex gap-2 ">
            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/Shihab177",
              },
              {
                icon: <FaLinkedinIn />,
                link: "https://www.linkedin.com/in/shihab-islam77/",
              },
              {
                icon: <FaFacebookF />,
                link: "https://www.facebook.com/sk.shihab.73594",
              },
              {
                icon: <FaYoutube />,
                link: "http://www.youtube.com/@ultracoder-j3i",
              },
              {
                icon: <FaXTwitter />,
                link: "",
              },
            ].map((item, index) => (
              <a
                key={index}
                className="p-2 border-2 border-[var(--primary-color)] rounded-full text-[var(--primary-color)] text-[18px] sm:text-[20px] hover:bg-[var(--primary-color)] hover:text-[#1f242d] hover:shadow-[0_0_10px_#7cf03d] transition-all duration-500 ease-in-out"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/*hero-img*/}
      <div className="flex justify-center lg:justify-end w-full lg:w-[40%] pt-22 md:mt-0">
        <div className=" bg-[var(--primary-color)] rounded-full relative w-[250px] sm:w-[300px] md:w-[380px] lg:w-[500px] aspect-square flex justify-center overflow-hidden shadow-[0_0_25px_#7cf03d] transition-all duration-500 ease-in-out">
          <img
            className="w-[200px] sm:w-[250px] md:w-[320px] lg:w-[400px] hover:shadow-[0_0_25px_#7cf03d,0_0_50px_#7cf03d,0_0_100px_#7cf03d]"
            src="https://i.ibb.co.com/vvc1MkpS/shihab-removebg-preview.png"
            alt="Shihab"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
