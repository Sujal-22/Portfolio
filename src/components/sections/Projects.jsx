import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const PROJECTS = [
  {
    id: "01",
    category: "WEB APP",
    name: "SYNAPSE",
    tagline: "The Platform Where Innovation Doesn't Stop at Demo Day.",
    description:
      "Built an AI-powered hackathon platform enabling event hosting, team collaboration, mentor booking, and post-hackathon project guidance. Designed to help developers transform prototypes into scalable products and startups.   ",
    tech: [
      "React",
      "vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Supabase",
    ],
    liveUrl: "http://13.235.242.251/",
    screenshot: "/synapse.png",
  },
  {
    id: "02",
    category: "MOBILE APPLICATION",
    name: "SPECSCORE",
    tagline: "Score Your Skills. Scale Your Startup",
    description:
      "SpecScore is a smart project evaluation platform built for developers and innovators. Powered by Gemini AI and real-time integrations, it delivers intelligent project scoring, GitHub-based analysis, and industry-driven insights to help users validate ideas, strengthen technical execution, and identify opportunities for growth",
    tech: ["Kotlin", "XML", "Firebase", "Gemini API"],
    liveUrl: "",
    screenshot: "/HomeScreen.jpeg",
  },
];


const slide = {
  enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

export default function Projects() {
  const [[index, dir], setPage] = useState([0, 0]);
  const total = PROJECTS.length;
  const project = PROJECTS[index];

  const go = useCallback(
    (d) => {
      setPage(([i]) => {
        const next = (i + d + total) % total;
        return [next, d];
      });
    },
    [total],
  );

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

 return (
   <section
     id="projects"
     className="relative w-full min-h-screen bg-[#0a0a0a] overflow-hidden text-white"
   >
     <AnimatePresence initial={false} custom={dir}>
       <motion.div
         key={`bg-${index}`}
         custom={dir}
         variants={slide}
         initial="enter"
         animate="center"
         exit="exit"
         transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
         className="absolute inset-0 z-0"
       >
         <img
           src={project.screenshot}
           alt=""
           className="w-full h-full object-cover object-top opacity-25 scale-105"
           style={{ filter: "blur(3px)" }}
         />

         <div className="absolute inset-0 bg-[#0a0a0a]/45" />
         <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/85 to-[#0a0a0a]/50" />
         <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/60" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(251,191,36,0.14),transparent_35%)]" />
       </motion.div>
     </AnimatePresence>

     <div className="relative z-20 flex items-center justify-between px-[6rem] sm:px-10 lg:px-[6rem] pt-30 lg:pt-20">
       <p className="text-xs font-black tracking-[0.35em] text-[#FBBF24] uppercase">
         PROJECTS
       </p>

       <p className="font-mono text-sm font-bold text-white/35 tracking-widest">
         <span className="text-white/90">
           {String(index + 1).padStart(2, "0")}
         </span>{" "}
         / {String(total).padStart(2, "0")}
       </p>
     </div>

     <AnimatePresence initial={false} custom={dir} mode="wait">
       <motion.div
         key={`content-${index}`}
         custom={dir}
         variants={slide}
         initial="enter"
         animate="center"
         exit="exit"
         transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
         className="relative z-20 min-h-[calc(100vh-90px)] flex items-center px-6 sm:px-10 lg:px-[6rem]"
       >
         <div className="w-full grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-end">
           <div className="relative">
             <div className="absolute -left-5 top-2 hidden lg:block w-[2px] h-40 bg-gradient-to-b from-[#FBBF24] to-transparent" />

             <div className="inline-flex items-center gap-2 border border-[#F59E0B]/50 rounded-full px-4 py-2 mb-6 bg-[#F59E0B]/10 backdrop-blur-md">
               <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24]" />
               <span className="text-[11px] font-black tracking-[0.25em] text-[#FBBF24]">
                 {project.category}
               </span>
             </div>

             <h2
               className="font-black text-white leading-[0.9] tracking-[-0.06em] mb-5"
               style={{ fontSize: "clamp(3.8rem, 10vw, 130px)" }}
             >
               {project.name}
             </h2>

             <p className="max-w-[520px] text-base font-semibold text-white/55 mb-8 tracking-wide">
               {project.tagline}
             </p>

             <a
               href={project.liveUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="group inline-flex items-center gap-3 bg-[#FBBF24] hover:bg-[#D97706] text-[#0a0a0a] hover:text-white text-sm font-black px-7 py-4 rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(251,191,36,0.22)]"
             >
               LIVE DEMO
               <ArrowUpRight
                 size={17}
                 className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
               />
             </a>
           </div>

           <div className="lg:ml-auto max-w-[560px] rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-black/40">
             <p className="text-base lg:text-lg font-medium text-white/75 leading-relaxed mb-7">
               {project.description}
             </p>

             <div className="flex flex-wrap gap-2">
               {project.tech.map((t) => (
                 <span
                   key={t}
                   className="px-4 py-2 text-xs font-bold border border-[#F59E0B]/35 text-[#FBBF24] rounded-full bg-[#F59E0B]/10 tracking-wide"
                 >
                   {t}
                 </span>
               ))}
             </div>
           </div>
         </div>
       </motion.div>
     </AnimatePresence>

     <div className="absolute bottom-8 right-6 sm:right-10 lg:right-20 z-30 flex items-center gap-3">
       <button
         onClick={() => go(-1)}
         className="w-12 h-12 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md flex items-center justify-center text-white/55 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all"
         aria-label="Previous project"
       >
         <ChevronLeft size={21} />
       </button>

       <button
         onClick={() => go(1)}
         className="w-12 h-12 rounded-full border border-[#F59E0B]/50 bg-[#F59E0B]/10 backdrop-blur-md flex items-center justify-center text-[#FBBF24] hover:bg-[#F59E0B]/20 hover:border-[#FBBF24] transition-all"
         aria-label="Next project"
       >
         <ChevronRight size={21} />
       </button>
     </div>

     <div className="absolute bottom-0 left-0 right-0 z-30 h-[3px] bg-white/10">
       <motion.div
         className="h-full bg-[#FBBF24] shadow-[0_0_18px_rgba(251,191,36,0.8)]"
         animate={{ width: `${((index + 1) / total) * 100}%` }}
         transition={{ duration: 0.5, ease: "easeInOut" }}
       />
     </div>
   </section>
 );
}
