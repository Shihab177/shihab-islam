import React from "react";

const Footer = () => {
  return (
    <div className="bg-black pt-8 pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-200">
              © {new Date().getFullYear()} Shihab Islam. All rights reserved.
            </p>
            <p className="text-gray-200 text-sm">
              Built with React, and Tailwind CSS
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="py-2 px-4 cursor-pointer opacity-90 mt-6 w-full bg-[var(--primary-color)] rounded-md border-2 border-[var(--primary-color)] shadow-[0_0_10px_#7cf03d] text-[16px] font-semibold hover:bg-transparent hover:shadow-none text-black hover:text-[var(--primary-color)]  transition-all duration-500 ease-in-out"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
