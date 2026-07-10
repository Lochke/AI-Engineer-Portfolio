/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import RecentWorks from "./components/RecentWorks";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-white selection:bg-[#10b981]/20 selection:text-[#10b981]">
      {/* Dynamic Background Noise Overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none z-40" />

      {/* Floating subtle ambient glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#10b981]/[0.02] rounded-full filter blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#059669]/[0.015] rounded-full filter blur-[150px] pointer-events-none z-0" />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="relative z-10 w-full">
        {/* Interactive Hero Intro */}
        <Hero />

        {/* Career Bio & Skills Matrix */}
        <About />

        {/* 3D Stack Interactive Projects deck */}
        <RecentWorks />

        {/* Accordion workflow */}
        <Services />

        {/* Massive watermark Contact & Footer */}
        <Footer />
      </main>
    </div>
  );
}
