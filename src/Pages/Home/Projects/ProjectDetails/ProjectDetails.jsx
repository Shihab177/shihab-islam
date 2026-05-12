import React, { useEffect, useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { Link, useParams } from "react-router";
import {
  FaExclamationTriangle,
  FaExternalLinkAlt,
  FaFileAlt,
  FaTools,
} from "react-icons/fa";
import { TrendingUp } from "lucide-react";
import { FiGlobe } from "react-icons/fi";
const ProjectDetails = () => {
  const { id } = useParams();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // 50px scroll হলে shadow show
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const project = [
    {
      id: 1,
      name: "BazaarTracker BD",
      overview:
        "BazaarTracker BD is a modern web application for tracking daily prices of essential items in local markets across Bangladesh. Users can view, compare, and track price changes while vendors can submit new prices and advertise products. The platform supports user interaction, purchases, and admin moderation.",
      technology: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Stripe",
        "TailwindCss",
        "TanStack Query",
        "JWT",
      ],
      Challenges: [
        "Implementing secure Stripe payment integration with proper status updates for both organizers and participants.",
        "Designing a database structure to handle multiple user roles, camp data, registrations, and feedback efficiently.",
        "Ensuring participants remain logged in on private routes even after page reloads using JWT token persistence.",
        "Managing multiple dashboard routes with role-based access control and maintaining a responsive design for all devices.",
      ],
      Improvements: [
        "AI-based Price Anomaly Detection",
        "Vendor & Buyer Chat System",
        "Location-based Market Suggestions",
        "Subscription & Notification System",
        "QR Code Integration",
      ],
      liveLink: "https://bazaar-tracker--bd.web.app/",
      code: "https://github.com/Shihab177/BazaarTracker-BD?tab=readme-ov-file",
      image: "https://i.postimg.cc/P5fT6Fg5/Screenshot-2025-08-14-040337.png",
      images: [
        "https://i.postimg.cc/9QvF92PZ/Screenshot-2025-08-14-040630.png",
        "https://i.postimg.cc/P5fT6Fg5/Screenshot-2025-08-14-040337.png",
        "https://i.postimg.cc/9QXNBwbj/Screenshot-2025-08-14-040551.png",
        "https://i.postimg.cc/bwMH2ZFg/Screenshot-2025-08-14-040519.png",
        "https://i.postimg.cc/76mrbGwy/Screenshot-2025-08-14-041533.png",
      ],
    },
    {
      id: 2,
      name: "BoiBaksho",
      overview:
        "BoiBaksho is a digital bookshelf web application where users can manage their reading list. They can add books they’ve read, are reading, or want to read. Users can also share reviews, upvote books, and track their reading progress in a clean, organized way.",
      technology: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Firebase Auth",
        "Framer Motion",
        "JWT",
        "TailwindCss",
      ],
      Challenges: [
        "Book Data Structure & Status Management",
        "Implementing secure JWT-based authentication to ensure private route protection without losing login state on reload.",
        "Designing an intuitive UI/UX for item posting, editing, and recovery workflows while keeping forms pre-filled with logged-in user data.",
        "Integrating search and filtering functionality for large datasets without degrading performance.",
      ],
      Improvements: [
        "Users will be able to follow each other and view the books they are reading.",
        "Users will receive notifications when a “Want to Read” book is released or a new edition becomes available.",
        "User’s read books, category distribution, and progress over time chart (using Recharts or Chart.js).",
        "JWT Auth + Role Based Access",
      ],
      liveLink: "https://boibaksho-e735b.web.app/Bookshelf",
      code: "https://github.com/Shihab177/BoiBaksho?tab=readme-ov-file",
      image: "https://i.postimg.cc/J4ZmCS8W/Screenshot-2025-08-14-072632.png",
      images: [
        "https://i.postimg.cc/W4MVByhh/Screenshot-2025-08-14-071106.png",
        "https://i.postimg.cc/br54D0s7/Screenshot-2025-08-14-071522.png",
        "https://i.postimg.cc/MKjF3QcG/Screenshot-2025-08-14-071231.png",
        "https://i.postimg.cc/tTTr3ZQp/Screenshot-2025-08-14-071301.png",
        "https://i.postimg.cc/NMmx71Ch/Screenshot-2025-08-14-071324.png",
      ],
    },
    {
      id: 3,
      name: "RoomSync",
      overview:
        "RoomSync is a roommate finder web application that helps users connect with potential roommates.Users can create listings with their lifestyle preferences, rent budget, and contact details.It also allows browsing and filtering through all listings, liking posts, and managing personal listings.",
      technology: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Firebase Auth",
        "Framer Motion",
        "JWT",
        "TailwindCss",
      ],
      Challenges: [
        "Back-end requests are secured using JWT (JSON Web Tokens). This involves generating, verifying, and handling token expiration.",
        "Correctly configured permissions to allow users to add, update, and delete only their own listings.",
        "Using conditional rendering to display contact information on posts that have been liked.",
        "Saving the theme toggle state to local storage so that the settings are preserved even after a page reload.",
      ],
      Improvements: [
        "Location-based search and map integration.",
        "Categories, dates, locations, and status-based filtering.",
        "Users will be able to comment on other people's posts.There will be an option to report posts with incorrect information.",
        "Users will be able to filter and view items located nearby.",
      ],
      liveLink: "https://roommate-finder-72f3c.web.app/",
      code: "https://github.com/Shihab177/RoomSync",
      image: "https://i.postimg.cc/vHT1D5Cg/Screenshot-2025-08-14-093933.png",
      images: [
        "https://i.postimg.cc/vHT1D5Cg/Screenshot-2025-08-14-093933.png",
        "https://i.postimg.cc/QxCbs9bS/Screenshot-2025-08-14-094132.png",
        "https://i.postimg.cc/4yvdBggD/Screenshot-2025-08-14-094207.png",
      ],
    },
  ];
  const detailsData = project.find((data) => data.id === parseInt(id));
  return (
    <div className=" lg:pb-20 pb-12 mb:pb-16 bg-[#080A0C]">
      <div
        className={`h-18 fixed top-0 left-0 w-full z-50  border-b border-gray-600 bg-[#080A0C] ${scroll ? "shadow-md " : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full">
          <Link to="/">
            <button className="flex items-center gap-2 px-3 py-2 text-[16px] bg-gray-800 font-medium border-gray-600 border-2 text-gray-200 hover:bg-gray-700 hover:text-white rounded-md ">
              <span className="">
                <GoArrowLeft />
              </span>{" "}
              Back To Projects{" "}
            </button>
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-19 ">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:my-10 mt-5 pb-10"
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className=" rounded-xl"
          >
            {detailsData.images.map((img, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center h-[390px]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <img src={img} alt="" className="h-full w-full rounded-xl" />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.section>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-15 mt-5 md:mt-0 lg:flex gap-15 ">
        <div className="lg:w-[70%] ">
          <h2 className="text-[24px] font-semibold text-white flex items-center gap-4">
            <FaFileAlt className="text-[#00d4b4]" />
            Project Overview
          </h2>

          <p className="text-gray-200 text-[15px] md:text-[16px] mt-5">
            {detailsData.overview}
          </p>
          <div className="lg:mt-15 mt-5 md:mt-8">
            <h2 className="text-[24px] font-semibold text-white flex items-center gap-4">
              <FaExclamationTriangle className="text-[#00d4b4]" />
              Challenges Faced
            </h2>
            {detailsData.Challenges.map((cha, index) => (
              <div
                className="flex items-center text-gray-200 text-[15px] md:text-[16px] gap-x-5 mt-5"
                key={index}
              >
                <div className="h-[12px] w-[12px] rounded-full bg-red-500 flex-shrink-0"></div>
                {cha}
              </div>
            ))}
          </div>
          <div className="lg:mt-15 mt-5 md:mt-8">
            <h2 className="text-[24px] font-semibold text-white flex items-center gap-4">
              <TrendingUp className="text-[#00d4b4]" />
              Future Improvements
            </h2>
            {detailsData.Challenges.map((cha, index) => (
              <div
                className="flex items-center text-gray-200 text-[15px] md:text-[16px] gap-x-5 mt-5"
                key={index}
              >
                <div className="h-[12px] w-[12px] rounded-full text-[#00d4b4] flex-shrink-0"></div>
                {cha}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-[30%] lg:mt-0 mt-5 md:mt-8">
          <h2 className="text-[24px] font-semibold text-white flex items-center gap-4 ">
            <FaTools className="text-[#00d4b4]" />
            Technology Stack
          </h2>
          <div className="mt-5 flex flex-col gap-y-3">
            {detailsData.technology.map((tec, index) => (
              <div
                className="w-full px-3 py-2 text-[16px] bg-[#181D39] border-blue-300 rounded-md border text-blue-200"
                key={index}
              >
                {tec}
              </div>
            ))}
          </div>
          <div className="mt-15">
            <h2 className="text-[24px] font-semibold text-white flex items-center gap-4">
              <FiGlobe className="text-[#00d4b4]" />
              Project Links
            </h2>
            <div className="flex flex-col gap-y-3">
              <a href={detailsData.liveLink} target="_blank">
                <button className="py-[8px] opacity-90 mt-6 w-full bg-[var(--primary-color)] rounded-md border-2 border-[var(--primary-color)] shadow-[0_0_10px_#7cf03d] text-[16px] font-semibold hover:bg-transparent hover:shadow-none text-black hover:text-[var(--primary-color)]  transition-all duration-500 ease-in-out">
                  Live Demo
                </button>
              </a>
              <a className="" href={detailsData.code} target="_blank">
                <button className="flex items-center gap-2 w-full justify-center py-2 text-[16px] bg-gray-800 font-medium border-gray-600 border-2 text-gray-200 hover:bg-gray-700 hover:text-white rounded-md ">
                  <span className="">
                    <GoArrowLeft />
                  </span>{" "}
                  Source Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
