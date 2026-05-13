const Hero = () => {
  return (
    <div
      id="hero"
      className="relative min-h-screen flex items-center justify-center  bg-[#060d0d] "
    >
      <div
        className={` w-full px-6 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center gap-8 transition-all 
         
        }`}
      >
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-full px-4 py-1.5 text-[13px] text-white/70">
          <span className="w-[7px]  animate-pulse h-[7px] rounded-full bg-[#00d4b4] shadow-[0_0_6px_#00d4b4] inline-block" />
          Available for new projects
        </div>

        {/* Heading */}
        <div>
          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold text-white leading-tight tracking-tight">
            Hi, I'm{" "}
            <span className="text-[#28B79C] [text-shadow:0_0_40px_rgba(0,212,180,0.3)]">
              Shihab
            </span>
          </h1>
          <h2 className="text-[clamp(2rem,6vw,4.2rem)] font-bold text-white/50 leading-tight tracking-tight">
            I Build Digital Experiences
          </h2>
        </div>

        {/* Subtext */}
        <p className="text-[clamp(1.01rem,1.5vw,1.09rem)] text-white/55 max-w-[630px] leading-relaxed">
          Crafting secure, scalable and SEO-optimized digital products with
          clean design, modern technologies and production-ready architecture.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="bg-[#00d4b4] text-[#0a1a1a] font-semibold text-sm px-7 py-3 rounded-lg hover:opacity-85 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            View Projects
          </button>

          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="bg-transparent text-white font-medium text-sm px-7 py-3 rounded-lg border border-white/25 hover:border-white/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            Hire Me
          </button>

          <a href="/Resume (9).pdf" target="_blank" rel="noopener noreferrer">
            <button className="bg-white/5 backdrop-blur-md text-white font-medium text-sm px-7 py-3 rounded-lg border border-white/10 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
              Download CV
            </button>
          </a>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mt-2">
          <div className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-xl md:px-5 px-3 py-2.5">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00d4b4"
              strokeWidth="2"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            <div className="text-left">
              <div className="text-white text-sm font-semibold">Frontend</div>
              <div className="text-white/40 text-xs">React &amp; Next.js</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-xl md:px-5 px-3 py-2.5">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00d4b4"
              strokeWidth="2"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <div className="text-left">
              <div className="text-white text-sm font-semibold">Backend</div>
              <div className="text-white/40 text-xs"> Express , MongoDB</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
