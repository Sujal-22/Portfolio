import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const FIRST_NAME = "Sujal";
const LAST_NAME = "Kumar";
const ROLE = "APPLICATION DEVELOPER";
const BIO =
  "Designing and developing user-focused mobile solutions powered by modern technology and innovation.";
const EMAIL = "kumarsujal751@gmail.com";
const LINKEDIN_MSG_URL = "https://www.linkedin.com/in/sujal22";
const VIDEO_SRC = "/Contact.mp4";
const YEAR = new Date().getFullYear();
const INITIALS = "SK";

function useGreeting() {
  const [greeting, setGreeting] = useState("");
  

  useEffect(() => {
    const hour = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
    ).getHours();

    if (hour < 12) setGreeting("GOOD MORNING");
    else if (hour < 17) setGreeting("GOOD AFTERNOON");
    else setGreeting("GOOD EVENING");
  }, []);

  return greeting;
}

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

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
});

export default function Contact() {
  const greeting = useGreeting();
  const videoRef = useRef(null);
  useIndiaTime();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.currentTime = 0;
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);


  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden flex flex-col"
    >
      {/* Centre AI video */}
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          autoPlay
          muted
          playsInline
          onEnded={(e) => e.currentTarget.pause()}
          className="h-[92vh] w-auto object-contain object-bottom select-none opacity-35"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </div>

      {/* Watermark name */}
      <div className="absolute bottom-16 left-0 right-0 z-0 overflow-hidden pointer-events-none select-none">
        <p
          className="text-center font-black tracking-[0.08em] text-white/[0.04] whitespace-nowrap"
          style={{ fontSize: "clamp(4rem, 14vw, 160px)" }}
        >
          {FIRST_NAME.toUpperCase()} {LAST_NAME.toUpperCase()}
        </p>
      </div>

      {/* Floating gold orb */}

      <div className="relative z-20 flex-1 flex items-center">
        <div className="w-full px-[6rem] flex flex-col lg:flex-row justify-between gap-12 lg:gap-0">
          {/* LEFT */}
          <div className="max-w-[340px]">
            <motion.div
              {...fadeUp(0.1)}
              className="flex items-center gap-2 mb-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_2px_rgba(52,211,153,0.5)]" />
              <span className="text-[10px] font-bold tracking-[0.3em] text-white/60">
                {greeting}
              </span>
            </motion.div>

            <motion.p
              {...fadeUp(0.15)}
              className="text-[10px] font-black tracking-[0.25em] text-[#FBBF24] mb-3"
            >
              {ROLE}
            </motion.p>

            <motion.div {...fadeUp(0.2)}>
              <h1
                className="font-black leading-none tracking-tight"
                style={{ fontSize: "clamp(2.4rem, 5vw, 64px)" }}
              >
                <span className="text-white">{FIRST_NAME.toUpperCase()}</span>
                <br />
                <span className="text-white/30">{LAST_NAME.toUpperCase()}</span>
              </h1>
            </motion.div>

            <motion.p
              {...fadeUp(0.3)}
              className="mt-5 text-[13px] font-medium text-white/50 leading-relaxed"
            >
              {BIO}
            </motion.p>

            <motion.a
              {...fadeUp(0.4)}
              href={`mailto:${EMAIL}`}
              className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-white/55 hover:text-white transition-colors"
            >
              <Mail size={15} className="text-white/40" />
              {EMAIL}
            </motion.a>
          </div>

          {/* RIGHT */}
          <div className="max-w-[420px] lg:text-right flex flex-col lg:items-end justify-center gap-6">
            <motion.p
              {...fadeUp(0.1)}
              className="text-[10px] font-bold tracking-[0.35em] text-white/35 uppercase"
            >
              Available for Collaborations
            </motion.p>

            <motion.div {...fadeUp(0.2)}>
              <h2
                className="font-black leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 5vw, 58px)" }}
              >
                <span className="text-white">
                  TRANSFORMING
                  <br />
                  IDEAS
                  <br />
                  INTO
                  <br />
                  SCALABLE
                  <br />
                </span>
                <span className="text-[#FBBF24]">
                  MOBLIE <br /> APPLICATION
                </span>
              </h2>
            </motion.div>

            <motion.a
              {...fadeUp(0.35)}
              href={LINKEDIN_MSG_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 w-full lg:w-[360px] border border-[#FBBf24]/70 rounded-full px-8 py-4 text-sm font-black tracking-[0.2em] text-[#FBBF24] hover:bg-[#F59E0B]/10 transition-all"
            >
              LET&apos;S TALK <ArrowRight size={16} />
            </motion.a>
          </div>
        </div>
      </div>

      <footer className="relative z-20 flex items-center justify-between px-[6rem] pb-6 pt-4 flex-shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center relative">
            <span className="text-[11px] font-black text-white/70 tracking-wider">
              {INITIALS}
            </span>
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#FBBF24]" />
          </div>

          <div>
            <p className="text-[10px] font-black tracking-[0.2em] text-white/50">
              © {YEAR} {FIRST_NAME.toUpperCase()} {LAST_NAME.toUpperCase()}
            </p>
            <p className="text-[9px] font-bold tracking-[0.2em] text-white/25 mt-0.5">
              ALL RIGHTS RESERVED
            </p>
          </div>
        </div>

        <p className="hidden md:block text-[10px] font-bold tracking-[0.2em] text-white/25 text-right">
          DESIGNED & DEVELOPED
          <br />
          WITH PRECISION.
        </p>
      </footer>
    </section>
  );
}
