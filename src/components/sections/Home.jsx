import { useEffect, useState } from "react";
import { ArrowUpRight, Github, Instagram, Linkedin, Mouse } from "lucide-react";

const YOUR_NAME_LINE1 = "Sujal";
const YOUR_NAME_LINE2 = "Kumar";
const YOUR_ROLE = "Application Developer";
const YOUR_CITY = "New Delhi, India";
const YOUR_EMAIL = "kumarsujal751@gmail.com";
const PHOTO_SRC = "./src/public/Photo.png";

const SKILLS = ["Debugging", "Problem Solving", "Scalable Application"];

const SOCIALS = [
  {
    icon: <Instagram size={16} />,
    label: "INSTAGRAM",
    href: "https://www.instagram.com/_kumar.sujal_/",
  },
  {
    icon: <Github size={16} />,
    label: "GITHUB",
    href: "https://github.com/Sujal-22",
  },
  {
    icon: <Linkedin size={16} />,
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/sujal22/",
  },
];

function useIndiaTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date()
          .toLocaleTimeString("en-IN", {
            timeZone: "Asia/Kolkata",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          })
          .toUpperCase(),
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function SocialRailItem({ icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-2 group"
    >
      <span className="text-[#171717]/60 group-hover:text-[#171717] transition-colors">
        {icon}
      </span>
      <span
        className="text-[9px] font-bold tracking-[0.28em] text-[#171717] group-hover:text-[#171717] transition-colors"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        {label}
      </span>
    </a>
  );
}

export default function Intro() {
  const time = useIndiaTime();

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden text-[#171717]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FEF0D0] via-[#FBBF24] to-[#D97706]" />

      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "110px 110px",
        }}
      />

      {/* Static orbs (no animation) */}
      {[
        { top: "13%", left: "43%", size: 12 },
        { top: "56%", left: "31%", size: 8 },
        { top: "71%", left: "57%", size: 9 },
      ].map((o, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/40"
          style={{ top: o.top, left: o.left, width: o.size, height: o.size }}
        />
      ))}

      {/* Glow behind image */}
      <div
        className="absolute right-0 bottom-0 z-[5] hidden lg:block pointer-events-none"
        style={{
          width: "55vw",
          height: "100vh",
          background:
            "radial-gradient(ellipse 60% 80% at 70% 60%, rgba(245,158,11,0.35) 0%, rgba(217,119,6,0.15) 50%, transparent 80%)",
        }}
      />

      {/* Accent line */}
      <div
        className="absolute bottom-0 z-[6] hidden lg:block pointer-events-none"
        style={{
          right: "38%",
          width: "2px",
          height: "65vh",
          background:
            "linear-gradient(to bottom, transparent, rgba(245,158,11,0.6), transparent)",
        }}
      />

      {/* Photo */}
      <div>
        <div
          className="absolute right-0 bottom-0 z-0 h-[91vh] hidden lg:block pointer-events-none"
          style={{
            width: "180px",
            background:
              "linear-gradient(to right, #D97706dd, rgba(217,119,6,0.4), transparent)",
          }}
        />
        <img
          src={PHOTO_SRC}
          alt="Profile"
          className="absolute right-0 bottom-0 z-20 h-[94vh] w-auto object-contain hidden lg:block pointer-events-none select-none"
          style={{
            right: "-80px",
            filter:
              "drop-shadow(-30px 0 60px rgba(180,83,9,0.5)) drop-shadow(0 -10px 40px rgba(245,158,11,0.2))",
          }}
        />
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: "220px",
          background:
            "linear-gradient(to top, #FEF0D0, rgba(254,240,208,0.6), transparent)",
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute right-0 bottom-0 z-[11] h-[94vh] w-[50vw] hidden lg:block pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.6,
        }}
      />

      {/* Static gold ring (no animation) */}
      <div
        className="absolute z-[6] hidden lg:block pointer-events-none rounded-full border border-[#F59E0B]/30"
        style={{
          right: "22%",
          bottom: "15%",
          width: 180,
          height: 180,
          opacity: 0.3,
        }}
      />

      {/* Main content */}
      <main className="relative z-20 px-8 lg:px-[6rem] pt-8 lg:pt-20">
        <div className="mb-3">
          <p className="text-base font-medium leading-snug text-[#171717]/80">
            Hi, I'm
          </p>
          <p className="text-base font-bold text-[#92400E]">{YOUR_ROLE}</p>
        </div>

        <h1
          className="font-black leading-[0.83] tracking-[-0.04em] text-[#171717]"
          style={{ fontSize: "clamp(4.5rem, 14vw, 165px)" }}
        >
          {YOUR_NAME_LINE1}
          <br />
          {YOUR_NAME_LINE2}
        </h1>

        <div className="mt-14 lg:mt-20 flex flex-wrap gap-4">
          {SKILLS.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/75 bg-white/30 px-7 py-3 text-sm font-bold backdrop-blur-sm hover:bg-white/50 transition-all cursor-default select-none"
            >
              {s}
            </span>
          ))}
        </div>

        <a
          href="#projects"
          className="mt-10 lg:mt-14 inline-flex items-center gap-3 rounded-full bg-[#F59E0B] px-8 py-4 text-sm font-extrabold text-white shadow-lg shadow-amber-700/25 hover:bg-[#D97706] transition-colors"
        >
          View Projects <ArrowUpRight size={17} />
        </a>
      </main>

      {/* Social rail */}
      <aside className="absolute left-3 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-10">
        {SOCIALS.map((s) => (
          <SocialRailItem key={s.label} {...s} />
        ))}
      </aside>

      {/* Card 1 */}
      <div className="absolute right-[30%] top-[20%] z-30 hidden lg:block w-[370px] rounded-2xl border border-white/65 bg-white/55 p-6 backdrop-blur-2xl shadow-sm">
        <p className="text-[15px] font-black leading-snug">
          Building intelligent, high performance digital experiences with modern{" "}
          <span className="text-[#D97706]">AI-driven Technologies</span>
        </p>
        <p className="mt-3 text-sm font-semibold text-black/55">
          Looking for opportunity
        </p>
      </div>

      {/* Card 2 */}
      <div className="absolute right-[30%] top-[41%] z-30 hidden lg:block w-[370px] rounded-2xl border border-white/65 bg-white/50 p-6 backdrop-blur-2xl shadow-sm">
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_6px_2px_rgba(52,211,153,0.5)]" />
          <p className="text-sm font-black">Available for work</p>
        </div>
        <p className="mt-3 text-sm font-semibold text-black/60">{YOUR_CITY}</p>
        <p className="mt-1 text-sm font-semibold text-black/60">
        </p>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 left-6 z-20 hidden lg:flex flex-col items-center gap-3">
        <span
          className="text-[9px] font-bold tracking-[0.32em] text-[#171717]"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          SCROLL DOWN
        </span>
        <Mouse size={17} className="text-[#171717]/45" />
      </div>
    </section>
  );
}
