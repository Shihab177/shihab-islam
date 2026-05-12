import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Building } from "lucide-react";

const Education = () => {
  const educations = [
    {
      id: 1,
      degree: "BBA in Finance and Banking",
      institution: "Govt. Debendra College, Manikganj",
      location: "Manikganj, Bangladesh",
      period: "2022 - 2027",
      description: [
        "Pursuing undergraduate degree in Finance and Banking",
        "Passionate about web development and modern JavaScript frameworks",
        "Building projects with React, Node.js, and MongoDB alongside academic studies",
      ],
      icon: "🎓",
    },
  ];
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div
      id="education"
      className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pb-12 md:pb-8 pb-4"
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-center lg:mb-14 md:mb-8 mb-6"
      >
        <motion.h2
          variants={itemVariants}
          className="lg:text-[36px] md:text-[30px] text-[24px] font-semibold text-white mb-4"
        >
          Education{" "}
          <span className="text-[var(--primary-color)]">Background</span>
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-[16px] text-white max-w-2xl mx-auto"
        >
          My academic qualifications and the institutions where I have studied.
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative"
      >
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-1  bg-[var(--primary-color)] to-green-900"></div>

        <div className="space-y-12">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className={`relative flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-8 h-8 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-lg z-20">
                {edu.icon}
              </div>

              <div
                className={`flex-1 ml-16 md:ml-0 ${
                  index % 2 === 0
                    ? "md:mr-8 md:text-right"
                    : "md:ml-8 md:text-left"
                }`}
              >
                <motion.div
                  className="bg-[#111826] dark:bg-gray-800 p-6 rounded-md shadow-2xl hover:shadow-xl transition-shadow duration-300 border-2 border-gray-700"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-4 ">
                    <div
                      className={`${index % 2 === 0 ? "md:text-right" : ""}`}
                    >
                      <h3 className="text-xl text-left font-semibold text-white mb-1">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-[var(--primary-color)]  mb-2">
                        <Building className="h-4 w-4" />
                        <span className="font-semibold">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-100">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul
                    className={`space-y-2  ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    {edu.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="text-gray-100 flex items-center gap-2 text-left"
                      >
                        <span className="  h-3 w-3 rounded-full bg-[var(--primary-color)]  flex-shrink-0"></span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <div className="hidden md:block flex-1"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
