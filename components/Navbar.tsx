"use client"
import React, { useState } from "react"

export default function Navbar() {
    const [isClick, setIsClick ] = useState(false)
    const toggleNav = () => {
        setIsClick(!isClick)
    }
    return (
        <div className="pt-5">
            <nav className="container">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="#" className="text-[#A3D8FF] font-bold text-base">Pradana.</a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-8">
                                <a href="#home" className="text-white font-medium text-base">Home</a>
                                <a href="#about" className="text-white font-medium text-base">About</a>
                                <a href="#projects" className="text-white font-medium text-base">Project</a>
                                <a href="#contact" className="text-white font-medium text-base">Contact</a>
                            </div>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button className="inline-flex items-center jusitfy-center p-2 rounded-md text-white md:text-white" onClick={toggleNav}>
                                {isClick ? (
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                ): (
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"/>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {isClick && (
                    <div className="md:hidden">
                        <div className="px-4 pt-2 pb-3 space-y-3 sm:px-4">
                            <a href="#home" className="text-white block font-medium text-base">Home</a>
                            <a href="#About" className="text-white block font-medium text-base">About</a>
                            <a href="#project" className="text-white block font-medium text-base">Project</a>
                            <a href="#contact" className="text-white block font-medium text-base">Contact</a>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}
