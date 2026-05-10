"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Project" },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    useEffect(() => { setIsOpen(false) }, [pathname])

    return (
        <>
            {/* ── Floating Navbar ── */}
            <header
                className={`
          fixed top-8 left-1/2 -translate-x-1/2 z-50
          w-[calc(100%-2.5rem)] max-w-3xl
          rounded-xl px-5
          transition-all duration-300 ease-out
          ${scrolled
                        ? "bg-[#111111]/95 backdrop-blur-md border border-[#2a2a2a] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
                        : "bg-[#1c1c1c]/80 backdrop-blur-sm border border-[#2a2a2a]"
                    }
        `}
            >
                <div className="flex items-center justify-between h-14">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="group relative font-semibold text-[0.95rem] tracking-tight text-[#f0ede8] border-none pb-0"
                    >
                        <span className="relative z-10">Pradana.</span>
                        {/* underline accent on hover */}
                        <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-[#c8c4be] transition-all duration-300 group-hover:w-full" />
                    </Link>

                    {/* Desktop Links */}
                    <nav className="hidden md:flex items-center gap-0.5">
                        {navLinks.map(({ href, label }) => {
                            const active = pathname === href
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`
                    relative px-3.5 py-1.5 text-sm font-medium rounded-lg
                    transition-all duration-200 border-none
                    ${active
                                            ? "text-[#f0ede8] bg-[#2a2a2a]"
                                            : "text-[#888580] hover:text-[#f0ede8] hover:bg-[#2a2a2a]/60"
                                        }
                  `}
                                >
                                    {label}
                                    {/* active dot */}
                                    {/* {active && (
                                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-[#c8c4be]" />
                                    )} */}
                                </Link>
                            )
                        })}
                    </nav>

                    {/* CTA button */}
                    <Link
                        href={"/contact"}
                        className="
              hidden md:inline-flex items-center gap-1.5
              px-4 py-1.5 rounded-lg text-sm font-medium
              bg-[#f0ede8] text-[#111111]
              hover:bg-[#c8c4be] transition-colors duration-200
              border-none
            "
                    >
                        Hire me
                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>

                    {/* Hamburger — mobile */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
                    >
                        <span className={`block h-[1.5px] bg-[#f0ede8] transition-all duration-300 origin-center
              ${isOpen ? "w-5 rotate-45 translate-y-[6.5px]" : "w-5"}`}
                        />
                        <span className={`block h-[1.5px] bg-[#f0ede8] transition-all duration-300
              ${isOpen ? "w-0 opacity-0" : "w-3.5"}`}
                        />
                        <span className={`block h-[1.5px] bg-[#f0ede8] transition-all duration-300 origin-center
              ${isOpen ? "w-5 -rotate-45 -translate-y-[6.5px]" : "w-5"}`}
                        />
                    </button>
                </div>
            </header>

            {/* ── Mobile Drawer ── */}
            <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isOpen ? "visible" : "invisible"}`}>

                {/* Backdrop */}
                <div
                    onClick={() => setIsOpen(false)}
                    className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300
            ${isOpen ? "opacity-100" : "opacity-0"}`}
                />

                {/* Panel — muncul tepat di bawah navbar */}
                <div
                    className={`
            absolute top-[5.5rem] left-[1.25rem] right-[1.25rem]
            rounded-xl bg-[#1c1c1c] border border-[#2a2a2a]
            shadow-[0_8px_32px_rgba(0,0,0,0.5)]
            p-5 transition-all duration-300 ease-out
            ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}
          `}
                >
                    <nav className="flex flex-col gap-1 mb-4">
                        {navLinks.map(({ href, label }, i) => {
                            const active = pathname === href
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    style={{ transitionDelay: isOpen ? `${i * 35}ms` : "0ms" }}
                                    className={`
                    flex items-center justify-between
                    px-4 py-2.5 rounded-lg text-sm font-medium
                    transition-all duration-200 border-none
                    ${active
                                            ? "bg-[#2a2a2a] text-[#f0ede8]"
                                            : "text-[#888580] hover:bg-[#2a2a2a]/60 hover:text-[#f0ede8]"
                                        }
                  `}
                                >
                                    {label}
                                    {active && (
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#c8c4be]" />
                                    )}
                                </Link>
                            )
                        })}
                    </nav>

                    <div className="border-t border-[#2a2a2a] pt-4">
                        <Link
                            href={"/contact"}
                            className="
                flex items-center justify-center gap-2 w-full
                py-2.5 rounded-lg text-sm font-medium
                bg-[#f0ede8] text-[#111111] border-none
                hover:bg-[#c8c4be] transition-colors duration-200
              "
                        >
                            Hire me
                            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Spacer */}
            <div className="h-24" />
        </>
    )
}