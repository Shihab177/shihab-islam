
const Hero = () => {


  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#060d0d]"
    >
      {/* Background glow and animated code */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00d4b4]/[0.06] blur-[120px]" />

  

      

   

   

        {/* 1. 3D Triangle */}
        <svg
          className="hero-geometry absolute left-[5%] top-[16%] w-20 md:left-[12%] md:top-[18%] md:w-32"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M50 8 L12 76 L85 83 Z" />
          <path d="M50 8 L50 78 M12 76 L65 48 L85 83" />
          <path d="M50 78 L65 48 M50 8 L65 48" strokeDasharray="3 4" />
          <circle cx="50" cy="8" r="1.5" fill="currentColor" />
          <circle cx="12" cy="76" r="1.5" fill="currentColor" />
          <circle cx="85" cy="83" r="1.5" fill="currentColor" />
        </svg>

        {/* 2. Mathematical matrix */}
        <svg
          className="hero-geometry absolute bottom-[13%] left-[8%] w-16 md:bottom-[16%] md:left-[20%] md:w-24"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M17 12 H10 V88 H17 M83 12 H90 V88 H83" />
          <g
            fill="currentColor"
            stroke="none"
            fontSize="12"
            textAnchor="middle"
          >
            <text x="30" y="32">1</text>
            <text x="50" y="32">0</text>
            <text x="70" y="32">0</text>
            <text x="30" y="52">0</text>
            <text x="50" y="52">1</text>
            <text x="70" y="52">0</text>
            <text x="30" y="72">0</text>
            <text x="50" y="72">0</text>
            <text x="70" y="72">1</text>
          </g>
        </svg>

        {/* 3. Animated geometry compass */}
        <svg
          className="hero-compass absolute right-[5%] top-[32%] w-20 md:right-[12%] md:top-[29%] xl:w-32"
          viewBox="0 0 100 150"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          role="img"
          aria-label="Geometry drawing compass"
        >
          {/* Top adjustment knob */}
          <path d="M44 8 L43 22 Q43 27 47 29 L53 29 Q57 27 57 22 L56 8 Z" />
          <path d="M45 8 L55 8 M45 13 L55 13 M45 18 L55 18" />

          {/* Hinge */}
          <path d="M40 29 Q50 23 60 29 L61 43 L56 49 L44 49 L39 43 Z" />
          <circle cx="50" cy="36" r="4" />
          <circle cx="50" cy="36" r="1.5" fill="currentColor" />

          {/* Pencil leg */}
          <path d="M43 48 L23 112 L30 116 L48 49" />
          <path d="M23 112 L22 130 L30 116" />
          <path d="M22 130 L21 135 L24 131" fill="currentColor" />

          {/* Metal leg */}
          <path d="M56 48 L77 125 L81 123 L61 46" />
          <path d="M77 125 L80 137 L82 125" />

          {/* Pencil holder */}
          <path d="M28 91 L43 95 L39 106 L25 102 Z" />
          <path d="M25 96 L40 100" />

          {/* Rotating measurement ring */}
          <ellipse
            cx="50"
            cy="82"
            rx="37"
            ry="12"
            strokeDasharray="3 5"
            opacity=".65"
          />
          <path d="M50 82 L50 36" strokeDasharray="2 5" opacity=".5" />
        </svg>

        {/* 4. Pythagorean formula */}
        <div className="hero-formula absolute right-[6%] top-[19%] font-mono text-xs text-[#28B79C]/60 sm:text-sm md:right-[18%] md:top-[22%] md:text-base">
          a² + b² = c²
        </div>

        {/* 5. Pi */}
        <div className="hero-formula absolute left-[6%] top-[47%] font-serif text-3xl text-[#28B79C]/50 md:left-[15%] md:top-[46%] md:text-5xl">
          π
        </div>

        {/* 6. Function notation */}
        <div className="hero-formula absolute bottom-[23%] right-[8%] font-mono text-lg text-[#28B79C]/50 md:bottom-[20%] md:right-[20%] md:text-2xl">
          f(x)
        </div>

        {/* 7. Right-angle triangle */}
        <svg
          className="hero-geometry absolute bottom-[9%] right-[30%] w-20 md:bottom-[12%] md:right-[35%] md:w-28"
          viewBox="0 0 120 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M12 82 L12 18 L105 82 Z" />
          <path d="M12 70 H24 V82" />
          <path d="M12 50 H105" strokeDasharray="3 4" opacity=".65" />
          <path d="M50 82 L50 58" strokeDasharray="3 4" opacity=".65" />
          <text x="28" y="76" fontSize="9" fill="currentColor" stroke="none">
            90°
          </text>
          <text x="5" y="13" fontSize="9" fill="currentColor" stroke="none">
            A
          </text>
          <text x="3" y="94" fontSize="9" fill="currentColor" stroke="none">
            B
          </text>
          <text x="106" y="94" fontSize="9" fill="currentColor" stroke="none">
            C
          </text>
        </svg>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center gap-8 px-6 py-28 text-center sm:px-8">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#060d0d]/80 px-4 py-1.5 text-[13px] text-white/70 backdrop-blur-md">
          <span className="inline-block h-[7px] w-[7px] animate-pulse rounded-full bg-[#00d4b4] shadow-[0_0_6px_#00d4b4]" />
          Available for new projects
        </div>

        {/* Heading */}
        <div>
          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-tight tracking-tight text-white">
            Hi, I'm{" "}
            <span className="text-[#28B79C] [text-shadow:0_0_40px_rgba(0,212,180,0.3)]">
              Shihab
            </span>
          </h1>

          <h2 className="text-[clamp(2rem,6vw,4.2rem)] font-bold leading-tight tracking-tight text-white/50">
            I Build Digital Experiences
          </h2>
        </div>

        {/* Description */}
        <p className="max-w-[630px] text-[clamp(1.01rem,1.5vw,1.09rem)] leading-relaxed text-white/55">
          Crafting secure, scalable and SEO-optimized digital products with
          clean design, modern technologies and production-ready architecture.
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="cursor-pointer rounded-lg bg-[#00d4b4] px-7 py-3 text-sm font-semibold text-[#0a1a1a] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-85"
          >
            View Projects
          </button>

          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="cursor-pointer rounded-lg border border-white/25 bg-transparent px-7 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[#00d4b4]/60"
          >
            Hire Me
          </button>

          <a
            href="/Shihab_Islam_Resume%20(4).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 bg-white/5 px-7 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
          >
            Download CV
          </a>
        </div>

        {/* Technology cards */}
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#060d0d]/80 px-3 py-2.5 backdrop-blur-md md:px-5">
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
              <div className="text-sm font-semibold text-white">Frontend</div>
              <div className="text-xs text-white/40">React &amp; Next.js</div>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#060d0d]/80 px-3 py-2.5 backdrop-blur-md md:px-5">
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
              <div className="text-sm font-semibold text-white">Backend</div>
              <div className="text-xs text-white/40">Express, MongoDB, PostgreSQL</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        .hero-code {
          position: absolute;
          display: flex;
          width: max-content;
          gap: 18px;
          color: #28b79c;
          font-family: "Courier New", monospace;
          font-size: 11px;
          line-height: 2.5;
          white-space: nowrap;
          opacity: 0.24;
          will-change: transform;
        }

        .hero-code-top {
          top: 2%;
          left: 0;
          animation: heroCodeRight 55s linear infinite;
        }

        .hero-code-bottom {
          bottom: 2%;
          left: 0;
          animation: heroCodeLeft 60s linear infinite;
        }

        .hero-code-left {
          top: 10%;
          left: 1%;
          width: 190px;
          flex-direction: column;
          white-space: normal;
          overflow-wrap: anywhere;
          animation: heroCodeUp 60s linear infinite;
        }

        .hero-code-right {
          top: 10%;
          right: 1%;
          width: 190px;
          flex-direction: column;
          white-space: normal;
          overflow-wrap: anywhere;
          text-align: right;
          animation: heroCodeDown 65s linear infinite;
        }

        .hero-geometry {
          color: rgba(40, 183, 156, 0.55);
          transform-origin: center;
          animation: geometryFloat 7s ease-in-out infinite;
        }

        .hero-compass {
          color: rgba(40, 183, 156, 0.9);
          filter: drop-shadow(0 0 8px rgba(0, 212, 180, 0.3));
          transform-origin: 50% 25%;
          animation: compassFloat 6s ease-in-out infinite;
        }

        .hero-formula {
          animation: geometryFloat 8s ease-in-out infinite;
        }

        @keyframes heroCodeRight {
          from { transform: translateX(-25%); }
          to { transform: translateX(0); }
        }

        @keyframes heroCodeLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); }
        }

        @keyframes heroCodeUp {
          from { transform: translateY(0); }
          to { transform: translateY(-30%); }
        }

        @keyframes heroCodeDown {
          from { transform: translateY(-30%); }
          to { transform: translateY(0); }
        }

        @keyframes geometryFloat {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.45;
          }
          50% {
            transform: translateY(-9px);
            opacity: 0.85;
          }
        }

        @keyframes compassFloat {
          0%, 100% {
            transform: translateY(0) rotate(-2deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }

        @media (max-width: 640px) {
          .hero-code {
            font-size: 9px;
            opacity: 0.16;
          }

          .hero-code-left,
          .hero-code-right {
            width: 75px;
            opacity: 0.14;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-code,
          .hero-geometry,
          .hero-compass,
          .hero-formula {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
