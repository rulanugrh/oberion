"use client"

import React, { useState } from "react"
import Typing from "@/utils/typed"
import { Spotlight } from "./ui/Spotlight"
import { TechStack, Experience, Certificates } from "./ui/SyntaxHihglighter"

const tabs = [
    { id: "tech", label: "tech.go", lang: "Go", color: "#00ADD8" },
    { id: "exp", label: "experience.ts", lang: "TS", color: "#3178C6" },
    { id: "certs", label: "certificates.py", lang: "PY", color: "#3572A5" },
]

export default function About() {
    const [active, setActive] = useState("tech")
    const activeTab = tabs.find((t) => t.id === active)!

    return (
        <section
            id="about"
            className="min-h-screen pb-36 pt-36 overflow-x-hidden"
        >
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
                <Spotlight className="top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-5">

                {/* ── Header ── */}
                <div className="mb-12">
                    <p className="text-[#888580] text-xs tracking-[0.15em] uppercase mb-3 font-medium">
                        Who I am
                    </p>
                    <h1 className="font-semibold text-[#f0ede8] text-4xl md:text-5xl tracking-tight leading-none">
                        &gt; I&apos;m{" "}
                        <span className="text-[#c8c4be]">
                            <Typing />
                        </span>
                    </h1>
                    <div className="mt-6 h-px bg-gradient-to-r from-[#2a2a2a] via-[#3a3a3a] to-transparent" />
                </div>

                {/* ── Glassmorphism terminal ── */}
                <div
                    className="rounded-2xl overflow-hidden"
                    style={{
                        background: "rgba(255,255,255,0.03)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        boxShadow: "0 8px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
                    }}
                >
                    {/* ── Window chrome ── */}
                    <div
                        className="flex items-center justify-between px-5 py-4"
                        style={{
                            background: "rgba(255,255,255,0.03)",
                            borderBottom: "1px solid rgba(255,255,255,0.05)",
                        }}
                    >
                        {/* Traffic lights */}
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#ff5f57] opacity-80" />
                            <span className="w-3 h-3 rounded-full bg-[#febc2e] opacity-80" />
                            <span className="w-3 h-3 rounded-full bg-[#28c840] opacity-80" />
                        </div>

                        {/* Center path */}
                        <span className="text-[#3a3a3a] text-xs font-mono tracking-wide hidden sm:block">
                            pradana@portfolio: ~/about
                        </span>

                        {/* Active lang badge */}
                        <span
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                            style={{
                                backgroundColor: `${activeTab.color}18`,
                                color: activeTab.color,
                                border: `1px solid ${activeTab.color}30`,
                            }}
                        >
                            {activeTab.lang}
                        </span>
                    </div>

                    {/* ── Pill tabs ── */}
                    <div
                        className="flex items-center gap-1 px-5 py-3"
                        style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                    >
                        {tabs.map((tab) => {
                            const isActive = active === tab.id
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActive(tab.id)}
                                    className="relative flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300"
                                    style={
                                        isActive
                                            ? {
                                                background: `${tab.color}15`,
                                                color: tab.color,
                                                border: `1px solid ${tab.color}30`,
                                                boxShadow: `0 0 12px ${tab.color}20`,
                                            }
                                            : {
                                                background: "transparent",
                                                color: "#888580",
                                                border: "1px solid transparent",
                                            }
                                    }
                                >
                                    {/* Dot indicator */}
                                    <span
                                        className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                                        style={{ backgroundColor: isActive ? tab.color : "#3a3a3a" }}
                                    />
                                    {tab.label}
                                </button>
                            )
                        })}
                    </div>

                    {/* ── Code area ── */}
                    <div className="flex">

                        {/* Syntax content */}
                        <div className="flex-1 overflow-x-auto py-5 px-3">
                            <div
                                className="transition-opacity duration-300"
                                key={active}
                                style={{ animation: "fadeIn 0.25s ease" }}
                            >
                                {active === "tech" && <TechStack />}
                                {active === "exp" && <Experience />}
                                {active === "certs" && <Certificates />}
                            </div>
                        </div>
                    </div>

                    {/* ── Status bar ── */}
                    <div
                        className="flex items-center justify-between px-5 py-2"
                        style={{
                            borderTop: "1px solid rgba(255,255,255,0.04)",
                            background: "rgba(255,255,255,0.02)",
                        }}
                    >
                        <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1.5 text-[11px]" style={{ color: "rgba(255,255,255,0.25)" }}>
                                <span className="w-1.5 h-1.5 rounded-full bg-[#28c840] opacity-80" />
                                UTF-8
                            </span>
                            <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.15)" }}>LF</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span
                                className="text-[11px]"
                                style={{ color: activeTab.color, opacity: 0.7 }}
                            >
                                {active === "tech" ? "Go" : active === "exp" ? "TypeScript" : "Python"}
                            </span>
                            <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.15)" }}>
                                night owl
                            </span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Fade-in keyframe */}
            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    )
}