import React, { useState } from "react";
import { NavLink } from "react-router";
import tailwindImage from "../../../assets/images/tailwind.png";
import javascriptImage from "../../../assets/images/javascript.png";
import reactImage from "../../../assets/images/react.png";
import nextjsImage from "../../../assets/images/nextjs.png";
import typescriptImage from "../../../assets/images/typescript.png";
import zustandImage from "../../../assets/images/justand.png";
import nodejsImage from "../../../assets/images/nodejs.png";
import expressImage from "../../../assets/images/express.png";
import restApiImage from "../../../assets/images/restapi.png";
import jwtImage from "../../../assets/images/jwt.png";
import mongodbImage from "../../../assets/images/mongodb.png";
import postgresImage from "../../../assets/images/postgres.png";
import dockerImage from "../../../assets/images/docker.png";
const Skills = () => {
  const [category, setCategory] = useState("Frontend");
  const skills = [
    {
      id: 1,
      category: "Frontend",
      frontend: [
        {
          name: "Tailwind CSS",
          image: tailwindImage,
        },
        {
          name: "JavaScript",
          image: javascriptImage,
        },
        {
          name: "React",
          image: reactImage,
        },
        {
          name: "Next.js",
          image: nextjsImage,
        },
        {
          name: "TypeScript",
          image: typescriptImage,
        },
        {
          name: "Zustand",
          image: zustandImage,
        },
      ],
    },
    {
      id: 2,
      category: "Backend",
      frontend: [
        {
          name: "Node.js",
          image: nodejsImage,
        },
        {
          name: "Express.js",
          image: expressImage,
        },

        {
          name: "Rest Api",
          image: restApiImage,
        },
        {
          name: "Jwt",
          image: jwtImage,
        },
        {
          name: "MongoDB",
          image: mongodbImage,
        },
        {
          name: "PostgresSQL",
          image: postgresImage,
        },
      ],
    },
    {
      id: 3,
      category: "Tools",
      frontend: [
        {
          name: "Git & GitHub",
          image:
            "https://i.ibb.co.com/cXJq9hnJ/074d0b06-a5e3-11e2-8b7f-9f09eb2ddfae.webp",
        },
        {
          name: "Postman",
          image: "https://i.postimg.cc/fTnxC0HR/postman-icon-filled-256.webp",
        },

        {
          name: "Docker",
          image:
            dockerImage,
        },

        {
          name: "Pnpm",
          image:
            "https://i.postimg.cc/bw4RcCxJ/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.avif",
        },

        {
          name: "Vercel",
          image: "https://i.postimg.cc/fLHmL6d8/images-5.png",
        },
        {
          name: "VS Code",
          image: "https://i.ibb.co.com/Ld25RzD9/images-10.jpg",
        },
      ],
    },
  ];

  const AlwaysLearning = [
    "Mobile Apps (React Native)",
    "Microservices",
    "System Design & Architecture",
    "DevOps",

    "Docker",
    "Testing (Jest/RTL)",
  ];

  const handelClick = (category) => {
    setCategory(category);
  };
  const activeCategory = skills.find((item) => item.category === category);
  return (
    <div
      id="skills"
      className="text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pb-12 md:pb-8 pb-4 pt-8"
    >
      <h1 className="lg:text-[36px] md:text-[30px] text-[24px] font-semibold text-center ">
        Skills & <span className="text-[var(--primary-color)]">Expertise</span>
      </h1>
      <p className="text-[16px] text-center font-medium mt-4 lg:mb-14 md:mb-8 mb-6">
        Here are the technologies and tools I work with to create amazing
        digital <br />
        experiences.
      </p>
      <div className="w-76 border-gray-600  font-medium text-[16px] mx-auto border rounded-md flex ">
        {skills.map((item) => (
          <button
            onClick={() => {
              handelClick(item.category);
            }}
            className={`rounded-md cursor-pointer shadow-md px-5 text-black py-2 ${
              category === item.category
                ? "bg-[var(--primary-color)] "
                : "text-gray-200 hover:text-white"
            }`}
            key={item.id}
          >
            {item.category}
          </button>
        ))}
      </div>

      <div className="lg:mt-12 md:mt-8 mt-6 grid grid-cols-2 md:grid-cols-3  lg:grid-cols-6 lg:gap-8 md:gap-6 gap-4 items-center w-full">
        {activeCategory?.frontend.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 xl:py-8 lg:py-6 md:py-10 py-4 rounded-md shadow hover:bg-gray-700 border border-gray-700 flex flex-col gap-4 items-center"
          >
            <img
              className="h-15 w-15 rounded-md animate-slow-bounce"
              src={skill.image}
              alt={skill.name}
            />
            <p className="font-medium text-[16px]">{skill.name}</p>
          </div>
        ))}
      </div>

      <div className="lg:mt-14 md:mt-8 mt-6 w-full">
        <h1 className="text-[24px] font-medium text-center mb-4 md:mb-6 lg:mb-7">
          Always <span className="text-[var(--primary-color)]">Learning</span>
        </h1>
        <div className=" flex justify-center gap-4 flex-wrap">
          {AlwaysLearning.map(
            (item, colIndex) =>
              item && (
                <p
                  key={colIndex}
                  className="bg-[#1B2949]  py-2 px-4  rounded-4xl hover:shadow-lg transition-shadow duration-300 shadow-xl text-blue-200 border border-gray-700 font-medium text-[14px]"
                >
                  {item}
                </p>
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
