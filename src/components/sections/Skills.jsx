import MagicBento from "../../styles/Animation/MagicBento";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen px-[6rem] bg-[#0a0a0a] text-white overflow-auto"
    >
      {/* Radial bg glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,158,11,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 pt-20 pb-16 pr-[6rem]">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-[#FBBF24] uppercase mb-4"
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: "12px",
              letterSpacing: "0.35em",
              fontWeight: 500,
            }}
          >
            SKILLS
          </p>
          <h1
            className="flex items-center gap-4 uppercase font-black leading-[1.1] tracking-[-0.04em]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 64px)" }}
          >
            <span className="text-white">WHAT I</span>
            <span className="text-[#FBBF24]">BUILD WITH.</span>
          </h1>
        </div>

        {/* Bento Grid with Magic effects */}
        <MagicBento
          textAutoHide={false}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect
          spotlightRadius={400}
          particleCount={12}
          glowColor="245, 158, 11"
          disableAnimations={false}
        />
      </div>
    </section>
  );
}
