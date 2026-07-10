import { motion } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import avatarImg from "../assets/images/Minh Loc.png";

export default function Hero() {
  const handleScrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#09090b] pt-24"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px"
      }}
    >
      {/* Background massive typography graphic */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <h1 className="font-display font-black text-[25vw] tracking-tighter leading-none select-none text-white opacity-[0.01]">
          AI/ML
        </h1>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10 py-16">
        {/* Left Column (Text Content) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left" id="hero-left-col">
          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#10b981] uppercase mb-6"
            id="hero-subheading"
          >
            <span className="h-2 w-2 rounded-full bg-[#10b981]"></span>
            <span>AI ENGINEER</span>
          </motion.div>

          {/* Main Headings */}
          <div className="space-y-1 mb-8" id="hero-headings">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
              className="font-display italic font-normal text-[12vw] sm:text-[8vw] lg:text-[6vw] tracking-tight leading-[0.95] text-white"
            >
              Intelligent
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
              className="font-sans-display font-black text-[12vw] sm:text-[7vw] lg:text-[5.5vw] tracking-tighter leading-[0.9] uppercase"
            >
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2px #10b981"
                }}
              >
                SYSTEMS
              </span>
              <span className="text-[#10b981]">.</span>
            </motion.h1>
          </div>

          {/* Intro Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-base sm:text-lg text-gray-400 font-sans leading-relaxed max-w-xl mb-12"
            id="hero-body"
          >
            Recent Computer Science graduate building production-grade Computer Vision and RAG/LLM systems, from model training to deployment.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
            id="hero-cta-group"
          >
            {/* View My Work */}
            <button
              onClick={handleScrollToWork}
              className="group relative flex items-center space-x-3 bg-gradient-to-r from-[#10b981] to-[#059669] text-zinc-950 font-display font-bold text-sm tracking-wide px-8 py-4 rounded-full transition-all hover:scale-[1.03] shadow-[0_4px_20px_rgba(16,185,129,0.2)] active:scale-95 cursor-pointer"
              id="hero-cta-work"
            >
              <span>VIEW MY WORK</span>
              <ArrowDown size={16} className="text-zinc-950 stroke-[2.5px] group-hover:translate-y-0.5 transition-transform" />
            </button>

            {/* Contact Me */}
            <button
              onClick={handleScrollToContact}
              className="flex items-center space-x-3 bg-zinc-900 border border-white/10 hover:border-white/20 text-white font-display font-bold text-sm tracking-wide px-8 py-4 rounded-full transition-all active:scale-95 cursor-pointer hover:bg-zinc-800"
              id="hero-cta-contact"
            >
              <span>CONTACT ME</span>
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
              </span>
            </button>
          </motion.div>
        </div>

        {/* Right Column (Interactive Badge) */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-12 lg:py-0" id="hero-right-col">
          {/* Floating constraints helper */}
          <div className="w-full max-w-[320px] aspect-[3/4] relative">
            {/* Lanyard Line (Stretches off screen top) */}
            <div className="absolute left-1/2 -top-[1000px] bottom-full w-1.5 bg-zinc-900 border-l border-r border-white/5 -translate-x-1/2 z-0 pointer-events-none" />
            <div className="absolute left-1/2 -top-12 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-900 border border-white/15 flex items-center justify-center z-20 pointer-events-none">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            </div>

            {/* Snap back motion wrapper */}
            <motion.div
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.2}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              animate={{
                y: [0, -15, 0],
                rotateZ: [-1, 1, -1]
              }}
              transition={{
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                rotateZ: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.02 }}
              whileDrag={{ scale: 1.05, cursor: "grabbing" }}
              className="absolute inset-0 w-full h-full bg-zinc-950 rounded-[24px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden cursor-grab z-10 select-none group flex flex-col justify-between p-6"
              id="interactive-badge"
            >
              {/* Card glossy overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.05] pointer-events-none rounded-[24px] z-20" />

              {/* Top Slot Header */}
              <div className="flex justify-end items-center pb-4 border-b border-white/5 relative z-10">
                <span className="text-[10px] font-mono text-zinc-500 font-medium">UIT VNU-HCM</span>
              </div>

              {/* Middle Frame for portrait */}
              <div className="relative flex-1 my-6 rounded-xl overflow-hidden border border-white/10 bg-zinc-900 flex items-center justify-center group-hover:border-[#10b981]/30 transition-colors duration-500">
                <img
                  src={avatarImg}
                  alt="Nguyen Minh Loc Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none pointer-events-none transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none z-10" />

                {/* Info Text inside picture overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end">
                  <div className="text-left">
                    <p className="text-xs font-mono text-[#10b981] tracking-wide mb-0.5">CURRENT LOC</p>
                    <p className="text-[10px] font-mono text-zinc-400">BIEN HOA, VN</p>
                  </div>
                  <div className="bg-[#10b981]/10 border border-[#10b981]/20 rounded-full px-2.5 py-0.5">
                    <span className="font-mono text-[8px] text-[#10b981] tracking-wide">VERIFIED</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Identity Details */}
              <div className="pt-2 border-t border-white/5 flex flex-col text-left relative z-10">
                <h3 className="font-display font-bold text-lg tracking-tight text-white mb-0.5">
                  Nguyen Minh Loc
                </h3>
                <p className="text-xs font-mono text-zinc-400 flex items-center justify-between">
                  <span>AI Engineer</span>
                  <span className="text-[9px] text-[#10b981]/60 font-semibold uppercase">SECURED BY SSL</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
