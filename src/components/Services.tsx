import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { ServiceStage } from "../types";

export default function Services() {
  const [openId, setOpenId] = useState<string | null>("stage-1");

  const stages: ServiceStage[] = [
    {
      id: "stage-1",
      number: "01",
      title: "PROBLEM FRAMING",
      description: "Understanding core requirements, mapping real-world objectives to precise machine learning paradigms, identifying constraint dimensions, and defining operational performance and model success metrics."
    },
    {
      id: "stage-2",
      number: "02",
      title: "DATA COLLECTION",
      description: "Sourcing, cleaning, and annotation. Designing premium parsing and preprocessing frameworks using custom web scraping, data augmentation, and OpenCV-based filtering to secure reliable, highly-balanced dataset foundations."
    },
    {
      id: "stage-3",
      number: "03",
      title: "MODEL TRAINING",
      description: "Training state-of-the-art neural networks (such as YOLOv5 object detection or Transformer-based language architectures). Customizing loss functions, fine-tuning hyperparameters, and running parallel GPU computations."
    },
    {
      id: "stage-4",
      number: "04",
      title: "EVALUATION",
      description: "Validating model performance across challenging validation cohorts. Computing precision-recall curves, mean Average Precision (mAP), and classification/generation statistics to prevent overfitting."
    },
    {
      id: "stage-5",
      number: "05",
      title: "DEPLOYMENT",
      description: "Wrapping machine learning solutions into lightweight REST APIs (via FastAPI, Flask, and Docker). Deploying containerized microservices to cloud runtimes, establishing memory-safe caches, and optimizing token/frame inference latency."
    },
    {
      id: "stage-6",
      number: "06",
      title: "MONITORING",
      description: "Observing prediction outputs, logging latency statistics, tracking potential vector/data drift, and configuring feedback collection hooks to safely drive continuous automated model retraining."
    }
  ];

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="services"
      className="relative py-32 w-full bg-[#09090b] border-t border-white/5 overflow-hidden"
    >
      {/* Dynamic graphic background accents */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-[#10b981]/[0.015] rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-[#059669]/[0.01] rounded-full filter blur-[120px] pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto px-6 sm:px-12 flex flex-col items-center">
        {/* Header section */}
        <div className="text-center mb-20 max-w-2xl">
          <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-4 block">
            WORKFLOW / PIPELINE
          </span>
          <h2 className="tracking-tight text-center">
            <span className="font-display italic font-normal text-3xl sm:text-5xl lg:text-6xl text-white block">
              Stages of an
            </span>
            <span className="font-sans-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#10b981] block uppercase mt-1">
              AI PROJECT.
            </span>
          </h2>
        </div>

        {/* Accordion container */}
        <div className="w-full flex flex-col border-t border-white/10" id="accordion-container">
          {stages.map((stage, index) => {
            const isOpen = openId === stage.id;

            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
                className="border-b border-white/10 w-full"
                id={`accordion-item-${stage.id}`}
              >
                {/* Header Row */}
                <button
                  onClick={() => handleToggle(stage.id)}
                  className="w-full py-8 flex justify-between items-center text-left focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-6 sm:space-x-8">
                    {/* Index Number */}
                    <span className={`font-mono text-xs sm:text-sm font-semibold transition-colors ${
                      isOpen ? "text-[#10b981]" : "text-zinc-500 group-hover:text-[#10b981]"
                    }`}>
                      {stage.number}
                    </span>
                    {/* Title */}
                    <h3 className={`font-display font-bold text-base sm:text-xl lg:text-2xl tracking-tight transition-colors ${
                      isOpen ? "text-[#10b981]" : "text-white group-hover:text-[#10b981]"
                    }`}>
                      {stage.title}
                    </h3>
                  </div>

                  {/* Toggle Indicator */}
                  <div
                    className={`h-10 w-10 sm:h-12 sm:w-12 rounded-full border flex items-center justify-center transition-all ${
                      isOpen
                        ? "bg-[#10b981]/10 border-[#10b981] text-[#10b981]"
                        : "border-white/10 text-zinc-400 group-hover:border-white/30 group-hover:text-white"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={16} className="stroke-[2.5px]" />
                    ) : (
                      <Plus size={16} className="stroke-[2.5px]" />
                    )}
                  </div>
                </button>

                {/* Content Area with smooth height expansion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.4, ease: [0.32, 0.72, 0, 1] },
                          opacity: { duration: 0.3, delay: 0.1 }
                        }
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.3, ease: [0.32, 0.72, 0, 1] },
                          opacity: { duration: 0.2 }
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pl-12 sm:pl-16 pb-8 pr-4 sm:pr-8">
                        <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed text-left">
                          {stage.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
