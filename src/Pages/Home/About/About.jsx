import React from "react";

const About = () => {
  const interests = [
    "Building SaaS Products",
    "Open Source",
    "System Design",
    "UI/UX Exploration",
    "Performance Optimization",
    "Learning New Technologies",
    "Problem Solving",
    "Tech Research",
    "Backend Architecture",
    "Developer Tools",
    "AI & Automation",
    "Tech Content Watching",
  ];
  return (
    <div className="">
      <div
        id="about"
        className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 lg:pb-12 md:pb-8 pb-4 flex flex-col-reverse lg:flex-row lg:gap-x-16 xl:gap-x-22 pt-8 md:pt-0"
      >
        <div className="lg:w-[60%] text-white">
          <h1 className="lg:text-[36px] md:text-[30px] text-[24px] font-semibold mt-0 md:mt-16 lg:mt-8">
            About <span className="text-[var(--primary-color)]">Me</span>
          </h1>
          <p className="lg:mt-8 md:mt-6 mt-4  text-white/55 ">
            Hi, I'm Shihab — a passionate Full Stack Developer from Bangladesh.
            With over 3+ years of experience, I specialize in building scalable
            web applications, secure authentication systems, SEO-friendly
            platforms, and modern backend architectures.
          </p>
          <p className="mt-6 text-white/55">
            My journey began with a deep curiosity about how the web works,
            which quickly evolved into a career dedicated to crafting
            exceptional digital experiences. I am a firm believer in clean code,
            thoughtful design, and building solutions that truly serve the
            users.
          </p>
          <div className="">
            <h1 className="text-2xl lg:mt-8 md:mt-6 mt-4 font-bold text-white mb-4">
              Interests & Hobbies
            </h1>

            <div className=" flex gap-4  flex-wrap">
              {interests.map(
                (item, colIndex) =>
                  item && (
                    <div
                      key={colIndex}
                      className="bg-[#1B2949] py-2 px-4  rounded-4xl hover:shadow-lg transition-shadow duration-300 shadow-xl"
                    >
                      <p className="text-blue-200 font-medium text-[12px] md:text-[14px]  text-center">
                        {item}
                      </p>
                    </div>
                  ),
              )}
            </div>
          </div>
        </div>
        <div className="lg:w-[40%] hidden lg:flex">
          <img
            className="rounded-md h-100 w-full mt-[100px] opacity-90"
            src="https://i.ibb.co.com/pvBS30z6/a.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
