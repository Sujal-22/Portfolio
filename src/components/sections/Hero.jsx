import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VIDEO_SRC = "./src/public/Protfolio.mp4";
const YOUR_NAME = "SUJAL KUMAR";
const YOUR_ROLES = "Application developer · AI Integration · Modern UI";

export default function Hero() {
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setStarted(true);
    }
  };

  const handleVideoEnd = () => {
    document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen px-[6rem] overflow-hidden bg-[#080808]"
    >
      {/* ── Video — full clear when playing ── */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        onEnded={handleVideoEnd}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
          ${started ? "opacity-100" : "opacity-30"}`}
        playsInline
        muted
      />

      {/* ── All overlays + content hidden when playing ── */}
      <AnimatePresence>
        {!started && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-10"
          >
            {/* Dark overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/70 via-[#080808]/50 to-[#080808]/80" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 30%, rgba(8,8,8,0.85) 100%)",
              }}
            />

            {/* Left — name watermark */}
            <div className="absolute  lg:px-[6rem] bottom-[28%]">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-[11px] font-bold tracking-[0.3em] text-[#F59E0B]/80 mb-3 uppercase"
              >
                Hi, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-black leading-none tracking-tight text-white/20"
                style={{ fontSize: "clamp(3rem, 9vw, 110px)" }}
              >
                {YOUR_NAME.split(" ")[0]}
                <br />
                <span className="text-white/10">
                  {YOUR_NAME.split(" ").slice(1).join(" ")}
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-4 text-[11px] font-bold tracking-[0.2em] text-white/25 uppercase"
              >
                {YOUR_ROLES}
              </motion.p>
            </div>

            {/* Center — name + START button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="font-mono text-sm font-bold tracking-[0.4em] text-white/40 uppercase"
              >
                {YOUR_NAME.toUpperCase()}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.8,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 180,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleStart}
                className="px-12 py-4 rounded-full border border-[#F59E0B]/60 text-[#F59E0B] font-black text-sm tracking-[0.4em] uppercase hover:bg-[#F59E0B]/10 transition-all"
              >
                START
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
