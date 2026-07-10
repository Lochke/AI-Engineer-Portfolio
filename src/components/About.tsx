import { motion } from "motion/react";

export default function About() {
  const skills = [
    "Python",
    "PyTorch",
    "TensorFlow",
    "OpenCV",
    "YOLOv5",
    "LangChain",
    "ChromaDB",
    "FastAPI",
    "Flask",
    "Docker",
    "Git",
    "SQL"
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const chipVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="about"
      className="relative py-32 w-full bg-[#09090b] border-t border-white/5 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column (Bio & Stats) */}
        <div className="lg:col-span-6 flex flex-col text-left" id="about-left-col">
          {/* Section Marker */}
          <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-4 block">
            ABOUT / BIO
          </span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-10 text-left"
            id="about-heading"
          >
            <span className="font-display italic font-normal text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white block">
              Building with
            </span>
            <span className="font-sans-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter text-[#10b981] block uppercase mt-1">
              PURPOSE.
            </span>
          </motion.h2>

          {/* Paragraphs */}
          <div className="space-y-6 text-zinc-400 font-sans leading-relaxed text-sm sm:text-base max-w-xl mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              I am a Computer Science graduate from the <strong>University of Information Technology (UIT), VNU-HCM</strong>. My academic and hands-on journey has focused heavily on solving complex, multi-modal problems using artificial intelligence.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              With practical experience spanning <strong>Computer Vision (YOLOv5, OpenCV)</strong> and modern <strong>LLM/RAG systems (LangChain, ChromaDB, Google Gemini API)</strong>, I specialize in building complete backend pipelines, optimising model performance, and deploying real-world, production-ready applications.
            </motion.p>
          </div>

          {/* Verified Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8"
            id="about-stats"
          >
            {/* Stat 1 */}
            <div className="text-left">
              <p className="font-sans-display font-black text-3xl sm:text-4xl text-[#10b981] tracking-tight mb-1">
                7.4
              </p>
              <p className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase">
                UIT GPA / 10
              </p>
            </div>

            {/* Stat 2 */}
            <div className="relative pl-4">
              <div className="absolute left-0 top-1 bottom-1 w-[1px] bg-white/10" />
              <p className="font-sans-display font-black text-3xl sm:text-4xl text-white tracking-tight mb-1">
                6.0
              </p>
              <p className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase">
                IELTS BAND
              </p>
            </div>

            {/* Stat 3 */}
            <div className="relative pl-4">
              <div className="absolute left-0 top-1 bottom-1 w-[1px] bg-white/10" />
              <p className="font-sans-display font-black text-3xl sm:text-4xl text-[#10b981] tracking-tight mb-1">
                2026
              </p>
              <p className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase leading-tight">
                Gemini Certified
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column (My Toolkit glassmorphism card) */}
        <div className="lg:col-span-6" id="about-right-col">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/[0.02] border border-white/10 rounded-[32px] p-8 sm:p-12 backdrop-blur-md relative overflow-hidden flex flex-col items-start"
            id="skills-card"
          >
            {/* Gloss reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.05] pointer-events-none rounded-[32px]" />

            <div className="flex items-center space-x-2 mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
              <span className="font-mono text-xs font-semibold tracking-wider text-white">
                TECHNICAL TOOLKIT
              </span>
            </div>

            <h3 className="font-display font-bold text-2xl text-white mb-6 text-left">
              Advanced expertise across modern frameworks and neural architectures.
            </h3>

            {/* Skills Chips staggered container */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={chipVariants}
                  whileHover={{
                    scale: 1.05,
                    borderColor: "#10b981",
                    color: "#10b981",
                    boxShadow: "0 0 15px rgba(16, 185, 129, 0.15)"
                  }}
                  className="bg-white/5 border border-white/10 px-4 py-2.5 rounded-full text-xs font-mono text-zinc-300 transition-all duration-300 cursor-default select-none hover:bg-[#10b981]/5"
                  id={`skill-chip-${index}`}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
