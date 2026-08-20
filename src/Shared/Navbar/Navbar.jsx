import React, { useEffect, useState } from "react";
import {
  HiHome,
  HiUser,
  HiLightBulb,
  HiBriefcase,
  HiAcademicCap,
  HiMail,
  HiMenuAlt1,
  HiDownload,
} from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
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
        className={`md:h-20 h-[70px] fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#080A0C]/60 border-b border-white/10 ${
          scroll ? "" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center text-white">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-10 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px]"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={offset}
                activeClass="active-desktop"
                className="cursor-pointer text-gray-400 hover:text-[#00d4b4] text-sm transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Download CV Button */}
          <div className="hidden lg:block">
            <a
              href="/Shihab_Islam_Resume (3).pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Shihab_Islam_Resume (3).pdf"
            >
              <button className="flex items-center gap-2 bg-[#00d4b4] text-black font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#00b398] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer shadow-md shadow-[#00d4b4]/10">
                <HiDownload size={18} />
                Download CV
              </button>
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center gap-3">
            <HiMenuAlt1
              size={27}
              className="cursor-pointer text-white"
              onClick={() => setMenuOpen(true)}
            />
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Side Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-64 h-full bg-[#080A0C] text-white z-50 transform transition-transform duration-300 border-l border-white/10 flex flex-col justify-between ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex justify-between items-center p-5 border-b border-white/10">
            <h2 className="text-lg font-semibold text-gray-200">Menu</h2>
            <IoClose
              size={26}
              className="cursor-pointer text-gray-400 hover:text-white"
              onClick={() => setMenuOpen(false)}
            />
          </div>

          {/* Menu Links */}
          <ul className="flex flex-col p-5 space-y-4">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={offset}
                  activeClass="active-mobile"
                  className="flex text-sm items-center gap-3 text-gray-400 hover:text-[#00d4b4] cursor-pointer transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Download CV Button */}
        <div className="p-5 border-t border-white/10">
          <a
            href="/Shihab_Islam_Resume (3).pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Shihab_Islam_Resume (3).pdf"
            onClick={() => setMenuOpen(false)}
            className="w-full block"
          >
            <button className="w-full flex items-center justify-center gap-2 bg-[#00d4b4] text-black font-semibold text-sm py-3 rounded-lg hover:bg-[#00b398] transition-all duration-200 cursor-pointer">
              <HiDownload size={18} />
              Download CV
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;