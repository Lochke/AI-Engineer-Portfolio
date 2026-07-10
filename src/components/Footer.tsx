import { motion } from "motion/react";
import { ArrowUpRight, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export default function Footer() {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <footer
      id="contact"
      className="relative pt-32 pb-10 w-full bg-[#09090b] border-t border-white/10 overflow-hidden"
    >
      {/* Massive Background Contact Typography Watermark */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none z-0 overflow-hidden leading-none select-none">
        <h1 className="font-display font-black text-[25vw] tracking-tighter leading-[0.7] text-white opacity-[0.02]">
          CONTACT
        </h1>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 z-10">
        {/* Main Footer Layout (Top Row Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-white/5">
          {/* Left Column (Call To Action) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left" id="footer-cta-col">
            <span className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-4 block">
              GET IN TOUCH
            </span>

            <h3 className="tracking-tight text-left mb-6">
              <span className="font-display italic font-normal text-4xl sm:text-5xl text-white block">
                How can I
              </span>
              <span className="font-sans-display font-black text-4xl sm:text-5xl text-[#10b981] block uppercase mt-1">
                HELP?
              </span>
            </h3>

            <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed max-w-md mb-8">
              Whether you are looking to build a high-accuracy vision pipeline, integrate semantic search RAG chatbots, or looking for a passionate AI engineer to join your team — let's connect!
            </p>

            {/* Email CTA Button (solid white, black text, pill shape) */}
            <motion.a
              href="mailto:loc71321@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-3 bg-white hover:bg-zinc-100 text-zinc-950 font-display font-bold text-sm tracking-wider px-8 py-4 rounded-full transition-transform shadow-[0_10px_30px_rgba(255,255,255,0.05)] cursor-pointer"
              id="footer-email-btn"
            >
              <Mail size={16} className="stroke-[2.5px]" />
              <span>EMAIL ME</span>
            </motion.a>
          </div>

          {/* Right Column (Double Link Grid) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-12 sm:gap-24 text-left" id="footer-links-col">
            {/* Menu Links */}
            <div>
              <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-6 font-semibold">
                MENU
              </p>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => handleScrollToSection("about")}
                    className="text-sm font-sans font-medium text-zinc-400 hover:text-[#10b981] transition-colors cursor-pointer"
                  >
                    ABOUT
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollToSection("work")}
                    className="text-sm font-sans font-medium text-zinc-400 hover:text-[#10b981] transition-colors cursor-pointer"
                  >
                    WORK
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollToSection("services")}
                    className="text-sm font-sans font-medium text-zinc-400 hover:text-[#10b981] transition-colors cursor-pointer"
                  >
                    STAGES
                  </button>
                </li>
              </ul>
            </div>

            {/* Socials / Direct Contacts */}
            <div>
              <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-6 font-semibold">
                SOCIALS
              </p>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://linkedin.com/in/locnguyenminh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-2 text-sm font-sans font-medium text-zinc-400 hover:text-[#10b981] transition-colors cursor-pointer"
                  >
                    <Linkedin size={14} className="opacity-60 group-hover:opacity-100" />
                    <span>LinkedIn</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:loc71321@gmail.com"
                    className="group flex items-center space-x-2 text-sm font-sans font-medium text-zinc-400 hover:text-[#10b981] transition-colors cursor-pointer"
                  >
                    <Mail size={14} className="opacity-60 group-hover:opacity-100" />
                    <span>Email</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a
                    href="tel:0913638298"
                    className="group flex items-center space-x-2 text-sm font-sans font-medium text-zinc-400 hover:text-[#10b981] transition-colors cursor-pointer"
                  >
                    <Phone size={14} className="opacity-60 group-hover:opacity-100" />
                    <span>0913 638 298</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs font-mono text-zinc-500 gap-4">
          <p id="copyright-text">
            © 2026 Loc's Portfolio. All rights reserved.
          </p>
          <div className="flex items-center space-x-2" id="location-text">
            <MapPin size={12} className="text-[#10b981]" />
            <span>Bien Hoa, Dong Nai, Vietnam</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
