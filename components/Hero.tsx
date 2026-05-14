"use client"

import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"


export default function Hero() {
  return (
    <div className="overflow-x-hidden flex items-center justify-center pt-24 pb-12 min-h-[85vh]">

      {/* ── Spotlights ── */}
      <div className="overflow-x-hidden">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />

        <Spotlight
          className="top-80 left-12 h-[100vh] w-[100vw]"
          fill="purple"
        />

        <Spotlight
          className="top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      <div className="absolute inset-0 pointer-events-none" />

      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none" />

      <div className="relative flex flex-col items-center justify-center text-center px-5 py-6 w-full max-w-4xl mx-auto">

        <div
          className="flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-medium"
          style={{
            background: "rgba(40,200,64,0.08)",
            border: "1px solid rgba(40,200,64,0.2)",
            color: "#888580",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#28c840] animate-pulse" />
          Currently Work on Neosoft
        </div>

        <p className="uppercase tracking-[0.25em] text-xs text-[#888580] mb-5 font-medium">
          Backend Engineer · DevSecOps Enthusiast · Asst. Project Manager
        </p>

        <div className="mb-4 w-full">
          <TextGenerateEffect
            className="text-[#f0ede8] text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08]"
            words="Hi, I'm Pradana"
          />
        </div>

        <p className="text-[#888580] text-sm md:text-base lg:text-lg font-light max-w-xl leading-relaxed mb-4">
          Crafting backend systems with{" "}
          <span className="text-[#00ADD8] font-medium">
            Go
          </span>{" "}
          &{" "}
          <span className="text-[#3178C6] font-medium">
            TypeScript
          </span>
          . Building APIs that scale, systems that hold.
        </p>

      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(260%);
          }
        }
      `}</style>
    </div>
  )
}