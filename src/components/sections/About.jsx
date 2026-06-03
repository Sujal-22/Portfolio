import { Github, Linkedin, Instagram, X, MessageCircle } from "lucide-react";
import TiltedCard from "../../styles/Animation/TitledCard";

const YOUR_NAME_SCRIPT = "Sujal Kumar";
const BIO1 = `Passionate Mobile Application Developer focused on crafting high-quality digital experiences that blend clean design, robust engineering, and real-world impact. As a Bachelor of Technology graduate from Guru Gobind Singh Indraprastha University, I enjoy transforming ideas into scalable mobile products that people love to use.`;
const BIO2 = `My work spans Android and cross-platform development, application architecture, API integration, and full product development. I am constantly exploring new technologies, refining my craft, and building solutions that are both technically strong and user-focused.`;

const TICKER_TAGS = [
  "APPLICATION DEVELOPER",
  "REACT",
  "KOTLIN",
  "EXPRESS.JS",
  "NODE.JS",
  "AI INTEGRATION",
  "POSTGRES SQL",
  "MODERN UI&UX",
];

const SOCIALS = [
  {
    icon: <Github size={19} />,
    href: "https://github.com/Sujal-22",
    label: "GitHub",
  },
  {
    icon: <Linkedin size={19} />,
    href: "https://www.linkedin.com/in/sujal22/",
    label: "LinkedIn",
  },
  {
    icon: <Instagram size={19} />,
    href: "https://www.instagram.com/_kumar.sujal_/",
    label: "Instagram",
  },
  { icon: <X size={19} />, href: "https://twitter.com", label: "X" },
  {
    icon: <MessageCircle size={19} />,
    href: "https://wa.me/919667301770",
    label: "WhatsApp",
  },
];

export default function About() {
  const repeated = [...TICKER_TAGS, ...TICKER_TAGS, ...TICKER_TAGS];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-white text-[#171717] overflow-hidden"
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#FBBF24] to-transparent" />

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Section label */}
      <div className="absolute top-20 left-[6rem] z-10 flex items-center gap-3">
        <div className="w-8 h-[2px] bg-[#FBBF24]" />
        <span className="text-[12px] font-black tracking-[0.4em] text-[#FBBF24] uppercase">
          About
        </span>
      </div>

      {/* Main layout */}
      <div className="max-w-9xl px-[6rem] pt-28 pb-20 flex flex-col lg:flex-row gap-20 items-start">
        {/* LEFT */}
        <div className="max-w-[800px] flex-shrink-0 flex flex-col items-center  lg:w-[400px] lg:pt-12">
          {/* Image with gold corner accents */}
          <div className=" relative ">
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#FBBF24] z-10 rounded-tl-sm" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#FBBF24] z-10 rounded-br-sm" />
            <div className="rounded-2xl overflow-hidden">
              <TiltedCard
                imageSrc="/profile.png"
                altText="Sujal Kumar"
                captionText="Sujal Kumar"
                containerHeight="400px"
                containerWidth="400px"
                imageHeight="400px"
                imageWidth="400px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent
                overlayContent={<p className="tilted-card-demo-text"></p>}
              />
            </div>
          </div>

          {/* Cursive name */}
          <div className="mt-5 text-center">
            <span
              className="text-[70px] font-bold leading-none text-[#FbbF24] select-none"
              style={{ fontFamily: '"Dancing Script", cursive' }}
            >
              {YOUR_NAME_SCRIPT}
            </span>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-[#F59E0B]/40 to-transparent mt-2 mb-4 ml-1" />

          {/* Socials */}
          <div className="flex items-center gap-4 ml-1">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-[#171717]/12 flex items-center justify-center text-[#171717]/50 hover:text-[#FBBF24] hover:border-[#D97706]/50 hover:bg-[#F59E0B]/5 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 pt-4 lg:pt-8">
          {/* WHO I AM */}
          <div className="flex items-center gap-4 mb-6">
            <p className="text-xs font-black tracking-[0.3em] text-[#FBBF24] uppercase">
              Who I Am
            </p>
            <div className="flex-1 h-px bg-gradient-to-r from-[#F59E0B]/30 to-transparent" />
          </div>

          {/* Ticker */}
          <div className="overflow-hidden mb-10 relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            <div className="flex animate-[ticker_22s_linear_infinite] whitespace-nowrap w-max">
              {repeated.map((tag, i) => (
                <span
                  key={i}
                  className="text-[11px] font-bold tracking-[0.22em] text-[#171717]/30 px-4"
                >
                  {i % TICKER_TAGS.length === 0 ? (
                    <span className="text-[#FBBF24]/80">{tag}</span>
                  ) : (
                    tag
                  )}{" "}
                  &nbsp;•
                </span>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-5 max-w-[800px]">
            <p className="text-[1.2rem] lg:text-[1.2rem] text-justify font-black leading-[1.6] text-[#171717]">
              {BIO1}
            </p>
            <p className="text-[1.1rem] lg:text-[1.2rem] text-justify font-semibold leading-[1.7] text-[#171717]/65">
              {BIO2}
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 flex gap-10">
            {[
              { num: "10+", label: "Projects Built" },
              { num: "5+", label: "Tech Stacks" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-black text-[#FBBF24]">{stat.num}</p>
                <p className="text-xs font-bold tracking-widest text-[#171717]/40 uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
