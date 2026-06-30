import React, { useEffect, useState } from "react";
import {
  HiHome,
  HiUser,
  HiLightBulb,
  HiBriefcase,
  HiAcademicCap,
  HiMail,
  HiMenuAlt1,
} from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../../assets/images/bird.png";
import scrollSpy from "react-scroll/modules/mixins/scroll-spy";
const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [offset, setOffset] = useState(-80);

  useEffect(() => {
    scrollSpy.update();
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOffset(-70);
      } else {
        setOffset(-80);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { to: "hero", name: "Home", icon: <HiHome size={20} /> },
    { to: "about", name: "About", icon: <HiUser size={20} /> },
    { to: "skills", name: "Skills", icon: <HiLightBulb size={20} /> },
    { to: "projects", name: "Projects", icon: <HiBriefcase size={20} /> },
    { to: "education", name: "Education", icon: <HiAcademicCap size={20} /> },
    { to: "contact", name: "Contact", icon: <HiMail size={20} /> },
  ];

  return (
    <>
      <nav
        className={`md:h-20 h-[70px] fixed top-0 left-0 w-full z-50
  backdrop-blur-xl bg-[#080A0C]/60 border-b border-white/10 ${
    scroll ? "" : ""
  }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 h-full flex justify-between items-center text-white">
          <div className="">
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-10 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px]"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-6 xl:gap-8 font-medium ">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={offset}
                activeClass="active-desktop"
                className="cursor-pointer text-gray-400 hover:text-[#00d4b4]
                 text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="lg:hidden">
            <HiMenuAlt1
              size={27}
              className="cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Side Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-64 h-full bg-gray-900 text-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold">Menu</h2>
          <IoClose
            size={28}
            className="cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col p-4 space-y-4">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={offset}
                activeClass="active-mobile"
                className="flex text-sm items-center gap-3 text-gray-400 hover:text-[#00d4b4] cursor-pointer "
                onClick={() => setMenuOpen(false)}
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
