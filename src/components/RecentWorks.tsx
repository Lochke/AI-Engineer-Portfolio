import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Code, ExternalLink, X, Cpu, Layers, Activity, CheckCircle2 } from "lucide-react";
import { Project } from "../types";

// Import our generated images
import imgLicensePlate from "../assets/images/license_plate_project_1783697466913.jpg";
import imgRagChatbot from "../assets/images/rag_chatbot_project_1783697481677.jpg";

export default function RecentWorks() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: "project-1",
      category: "Computer Vision",
      title: "Vietnamese License Plate Detection",
      description: "A two-stage detection + OCR pipeline (YOLOv5m + OpenCV) achieving 99.4% mAP@0.5 and 94.06% character accuracy, deployed via Flask with real-time frame buffering and asynchronous queue-based image processing.",
      tags: ["YOLOv5", "OpenCV", "Flask", "Python"],
      image: imgLicensePlate,
      github: "https://github.com/Lochke/Plate-detection"
    },
    {
      id: "project-2",
      category: "LLM / RAG",
      title: "RAG PDF Chatbot",
      description: "A full RAG pipeline (LangChain, ChromaDB, Google Gemini API) with a FastAPI backend and Streamlit frontend, achieving 91.7% QA accuracy, deployed on Render + Streamlit Community Cloud. Features custom document splitters and semantic routing.",
      tags: ["LangChain", "ChromaDB", "FastAPI", "Streamlit", "Gemini API"],
      image: imgRagChatbot,
      github: "https://github.com/Lochke/rag-pdf-chatbot"
    }
  ];

  const N = projects.length;

  const handleCardClick = (clickedIndex: number) => {
    const diff = (clickedIndex - activeIdx + N) % N;
    if (diff === 0) {
      // Clicked the top card -> send it to the back (increment active index)
      setActiveIdx((prev) => (prev + 1) % N);
    } else {
      // Clicked a card in the back -> pull it to the front
      setActiveIdx(clickedIndex);
    }
  };

  const handleDotClick = (index: number) => {
    setActiveIdx(index);
  };

  const activeProject = projects[activeIdx];

  return (
    <section
      id="work"
      className="relative py-32 w-full bg-zinc-950/40 border-t border-white/5 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header Grid */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-4">
          <div className="text-left">
            <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-3 block">
              PORTFOLIO / SHOWCASE
            </span>
            <h2 className="tracking-tight text-left">
              <span className="font-display italic font-normal text-4xl sm:text-5xl lg:text-6xl text-white block">
                Recent
              </span>
              <span className="font-sans-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#10b981] block uppercase mt-1">
                WORKS.
              </span>
            </h2>
          </div>

          <div className="flex items-center space-x-2 border border-white/10 rounded-full px-4 py-2 hover:border-[#10b981]/30 transition-colors bg-white/[0.02]">
            <span className="font-mono text-[10px] text-zinc-400 tracking-wider">PROJECT DECK</span>
            <span className="text-[#10b981] text-xs font-bold">•</span>
            <span className="font-mono text-[10px] text-[#10b981] font-semibold uppercase">ACTIVE INTERACTIVE</span>
          </div>
        </div>

        {/* Deck Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Side: 3D Stacked Card Interactive Deck (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center" id="recent-works-stack-col">
            <div
              className="relative w-full max-w-[550px] h-[340px] sm:h-[430px] md:h-[450px]"
              style={{ perspective: "1200px" }}
              id="stacked-card-deck"
            >
              {projects.map((project, index) => {
                const diff = (index - activeIdx + N) % N;
                const isActive = diff === 0;

                // Stack positions calculations
                const yOffset = diff * 32;
                const scale = 1 - diff * 0.05;
                const rotateX = diff * -5;
                const zIndex = N - diff;

                return (
                  <motion.div
                    key={project.id}
                    style={{
                      transformOrigin: "bottom center",
                      zIndex
                    }}
                    animate={{
                      y: yOffset,
                      scale: scale,
                      rotateX: rotateX,
                      opacity: isActive ? 1 : 0.65 - diff * 0.2
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.32, 0.72, 0, 1]
                    }}
                    onClick={() => handleCardClick(index)}
                    className="absolute inset-0 w-full h-full rounded-3xl border border-white/10 bg-zinc-900 overflow-hidden cursor-pointer shadow-[0_15px_40px_rgba(0,0,0,0.4)] select-none group"
                  >
                    {/* Gloss Reflection Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.05] pointer-events-none rounded-3xl z-20" />

                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-[1.02] transition-transform duration-700"
                    />

                    {/* Dark gradient vignette over cards */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent pointer-events-none z-10" />

                    {/* Quick Badge overlay for inactive cards */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-zinc-950/40 flex items-center justify-center backdrop-blur-[1px] hover:bg-zinc-950/20 transition-all duration-300">
                        <span className="bg-white/10 border border-white/20 px-4 py-2 rounded-full font-mono text-[10px] tracking-widest text-white uppercase">
                          CLICK TO VIEW PROJECT
                        </span>
                      </div>
                    )}

                    {/* In-Card Category and Index indicator */}
                    <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
                      <span className="bg-zinc-950/70 border border-white/10 px-3 py-1 rounded-full text-[9px] font-mono tracking-widest text-[#10b981] uppercase backdrop-blur-sm">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-mono font-medium text-zinc-400 bg-zinc-950/70 px-2.5 py-1 rounded-full border border-white/5 backdrop-blur-sm">
                        0{index + 1} / 0{N}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Dot Navigation Indicators */}
            <div className="flex justify-center items-center space-x-3 mt-12" id="deck-indicators">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIdx === index ? "w-8 bg-[#10b981]" : "w-2.5 bg-zinc-600 hover:bg-zinc-400"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                  id={`deck-dot-${index}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Description Panel (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-start items-start text-left" id="recent-works-details-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full flex flex-col items-start"
                id="active-project-details"
              >
                {/* Category tag */}
                <span className="font-mono text-xs font-semibold tracking-widest text-[#10b981] uppercase mb-4">
                  {activeProject.category}
                </span>

                {/* Project Title */}
                <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-none mb-6">
                  {activeProject.title}
                </h3>

                {/* Project Description */}
                <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed mb-8">
                  {activeProject.description}
                </p>

                {/* Project tags list */}
                <div className="flex flex-wrap gap-2.5 mb-10">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-[11px] font-mono text-zinc-300 select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Explore button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group flex items-center space-x-3 bg-[#10b981]/10 hover:bg-[#10b981]/20 border border-[#10b981]/30 hover:border-[#10b981]/50 px-6 py-3.5 rounded-full text-xs font-mono font-bold tracking-widest text-[#10b981] transition-all cursor-pointer focus:outline-none"
                  id={`explore-btn-${activeProject.id}`}
                >
                  <span>EXPLORE PROJECT</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Interactive Project Showcase Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/90 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl bg-zinc-900 border border-white/10 rounded-[32px] p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
              id="project-detail-modal"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full border border-white/5 bg-white/5 text-zinc-400 hover:text-white hover:border-white/15 transition-all cursor-pointer focus:outline-none"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Modal Scrollable Container */}
              <div className="overflow-y-auto pr-2 custom-scrollbar flex-1 space-y-8 text-left">
                {/* Header info */}
                <div className="border-b border-white/5 pb-6">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#10b981] uppercase font-bold bg-[#10b981]/5 px-3 py-1 rounded-full border border-[#10b981]/10 inline-block mb-3">
                    {activeProject.category}
                  </span>
                  <h2 className="font-sans-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight mb-2">
                    {activeProject.title}
                  </h2>
                  <p className="font-display italic text-zinc-400 text-sm sm:text-base">
                    {activeProject.id === "project-1" 
                      ? "End-to-End Deep Learning Inference Pipeline" 
                      : "Enterprise PDF Intelligence & Semantic Agent"}
                  </p>
                </div>

                {/* Grid Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Left Column: Project Overview & Architecture (7 Cols) */}
                  <div className="lg:col-span-7 space-y-8">
                    {/* Long Description */}
                    <div className="space-y-4">
                      <h4 className="font-mono text-xs font-bold tracking-widest text-zinc-500 uppercase flex items-center space-x-2">
                        <Activity size={12} className="text-[#10b981]" />
                        <span>PROJECT OVERVIEW</span>
                      </h4>
                      <p className="text-zinc-400 font-sans text-xs sm:text-sm leading-relaxed">
                        {activeProject.id === "project-1"
                          ? "An advanced, dual-stage computer vision framework engineered to capture, pre-process, and recognize vehicle license plates in high-resolution Vietnamese traffic scenes. Utilizing YOLOv5 for fast, state-of-the-art plate detection, followed by OpenCV image processing to segment individual characters, and a custom Convolutional Neural Network (CNN) to perform alphanumeric classification. Deployed via a highly optimized Flask backend with real-time frame buffering and asynchronous worker queues."
                          : "A highly robust Retrieval-Augmented Generation (RAG) agent allowing enterprise users to upload large-scale multi-format documentation and receive conversational, context-grounded answers. Features recursive text chunking with token-count awareness, high-dimensional document embedding generation via Google GenAI, and ChromaDB vector store indexing. The system executes cosine-similarity search, semantic reranking, and passes synthesized context directly to Google Gemini 1.5 Flash for complete, citation-supported responses."}
                      </p>
                    </div>

                    {/* Pipeline / Architecture Steps */}
                    <div className="space-y-4">
                      <h4 className="font-mono text-xs font-bold tracking-widest text-zinc-500 uppercase flex items-center space-x-2">
                        <Layers size={12} className="text-[#10b981]" />
                        <span>PIPELINE ARCHITECTURE</span>
                      </h4>
                      <div className="space-y-3 pl-1">
                        {(activeProject.id === "project-1"
                          ? [
                              { step: "01", name: "Inference Capture", desc: "Accepts high-resolution video streams or static image uploads." },
                              { step: "02", name: "Preprocessing Filter", desc: "OpenCV resizing and contrast normalization (CLAHE)." },
                              { step: "03", name: "Plate Location (YOLOv5m)", desc: "Detects vehicles and extracts plates with near-perfect confidence." },
                              { step: "04", name: "Perspective Rectification", desc: "Warp perspective transformations to align skewed rectangular plates." },
                              { step: "05", name: "Character Segmentation", desc: "Contours clustering and thresholding to segment distinct characters." },
                              { step: "06", name: "Custom OCR (CNN Classification)", desc: "Classifies each character using a custom convolutional model." }
                            ]
                          : [
                              { step: "01", name: "Document Ingestion", desc: "Uploads enterprise-grade PDFs, DOCX, or text data source files." },
                              { step: "02", name: "Token-Aware Chunking", desc: "Splits documentation using a recursive character token overlap splitter." },
                              { step: "03", name: "Embedding Generation", desc: "Generates high-dimensional vector representations with Google GenAI." },
                              { step: "04", name: "VectorDB Indexing (ChromaDB)", desc: "Stores documents in an offline-first high-speed semantic index database." },
                              { step: "05", name: "Similarity Context Fetch", desc: "Runs cosine similarity with normal rank filters on queries." },
                              { step: "06", name: "Gemini Synthesis (1.5 Flash)", desc: "Constructs direct citation-linked conversational smart replies." }
                            ]
                        ).map((s, idx) => (
                          <div key={idx} className="flex space-x-4 items-start">
                            <span className="font-mono text-[10px] text-[#10b981] bg-[#10b981]/5 border border-[#10b981]/10 h-5 w-5 rounded-full flex items-center justify-center font-bold mt-0.5 shrink-0">
                              {s.step}
                            </span>
                            <div>
                              <span className="font-sans-display font-bold text-xs sm:text-sm text-white block">{s.name}</span>
                              <span className="text-[11px] text-zinc-400 block font-sans leading-tight mt-0.5">{s.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Real-world Evaluated Metrics & Accomplishments (5 Cols) */}
                  <div className="lg:col-span-5 space-y-8">
                    {/* Real Metrics Section (No generated charts) */}
                    <div className="space-y-4 bg-white/[0.01] border border-white/5 p-6 rounded-2xl">
                      <h4 className="font-mono text-xs font-bold tracking-widest text-zinc-500 uppercase flex items-center space-x-2 mb-4">
                        <Cpu size={12} className="text-[#10b981]" />
                        <span>VERIFIED PERFORMANCE METRICS</span>
                      </h4>

                      <div className="space-y-6">
                        {(activeProject.id === "project-1"
                          ? [
                              { label: "Plate Localization (mAP@0.5)", val: "99.4%", desc: "Trained on 1,652 validation images" },
                              { label: "Plate Precision", val: "99.3%", desc: "YOLOv5m detector outcome" },
                              { label: "Plate Recall", val: "99.6%", desc: "YOLOv5m detector outcome" },
                              { label: "OCR Character Accuracy", val: "94.06%", desc: "Evaluated on 767 cropped plates (6,720 characters)" },
                              { label: "Full-Plate Sequence Accuracy", val: "82.27%", desc: "Exact sequence match rate" },
                              { label: "Academic Evaluation", val: "8 / 10", desc: "Rigorous university panel review" }
                            ]
                          : [
                              { label: "Q&A Retrieval Accuracy", val: "91.7%", desc: "Evaluated across 24 manual QA pairs" },
                              { label: "Hallucination Rate", val: "0.0%", desc: "Validated on out-of-scope enterprise queries" },
                              { label: "Context Retrieval Recall", val: "High", desc: "ChromaDB vector embedding alignment" },
                              { label: "User Interaction", val: "Multi-Turn", desc: "LangChain session memory & source citation tracking" }
                            ]
                        ).map((metric, idx) => (
                          <div key={idx} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                            <span className="font-mono text-[9px] text-zinc-500 uppercase block tracking-wider">{metric.label}</span>
                            <div className="flex justify-between items-baseline mt-1">
                              <span className="font-sans-display font-black text-xl text-[#10b981]">{metric.val}</span>
                              <span className="text-[10px] text-zinc-400 font-sans">{metric.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Core Innovations checklist */}
                    <div className="space-y-4">
                      <h4 className="font-mono text-xs font-bold tracking-widest text-zinc-500 uppercase">
                        KEY REALIZED OUTCOMES
                      </h4>
                      <ul className="space-y-3 font-sans text-xs text-zinc-400">
                        {(activeProject.id === "project-1"
                          ? [
                              "Supports both rectangular and square plate layouts.",
                              "CLAHE image preprocessing handles low-contrast nocturnal footage.",
                              "Deep-layer character classification with fine-tuned hyperparameters.",
                              "Delivered a fully functional end-to-end pipeline from raw images to text."
                            ]
                          : [
                              "Recursive split thresholds preserve formatting structures.",
                              "Vector similarity matching indexes tables and complex sections.",
                              "Gemini model structured prompt synthesis prevents hallucinated facts.",
                              "Comprehensive citations map back to exact document locations."
                            ]
                        ).map((feat, idx) => (
                          <li key={idx} className="flex items-start space-x-2.5">
                            <CheckCircle2 size={13} className="text-[#10b981] mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/5">
                      <a
                        href={activeProject.github || "https://github.com/locnguyenminh"}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex justify-center items-center space-x-2 border border-white/10 hover:border-[#10b981]/30 bg-white/5 hover:bg-[#10b981]/5 px-4 py-3 rounded-xl text-xs font-mono font-semibold tracking-wider text-white hover:text-[#10b981] transition-all text-center cursor-pointer"
                      >
                        <Code size={13} />
                        <span>VIEW SOURCE CODE</span>
                      </a>
                      {activeProject.id === "project-2" && (
                        <a
                          href="https://streamlit.io/"
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 flex justify-center items-center space-x-2 border border-white/10 hover:border-[#10b981]/30 bg-white/5 hover:bg-[#10b981]/5 px-4 py-3 rounded-xl text-xs font-mono font-semibold tracking-wider text-white hover:text-[#10b981] transition-all text-center cursor-pointer"
                        >
                          <ExternalLink size={13} />
                          <span>LAUNCH LIVE DEMO</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer Controls */}
              <div className="border-t border-white/5 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-[#10b981] hover:bg-[#10b981]/90 text-zinc-950 px-6 py-3.5 rounded-full text-xs font-mono font-bold tracking-widest cursor-pointer transition-all"
                >
                  <span>LET'S COLLABORATE ON THIS</span>
                  <ArrowRight size={13} />
                </button>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:w-auto border border-white/10 bg-white/5 hover:bg-white/10 text-white px-6 py-3.5 rounded-full text-xs font-mono font-bold tracking-widest cursor-pointer transition-all focus:outline-none"
                >
                  CLOSE DETAILS
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
