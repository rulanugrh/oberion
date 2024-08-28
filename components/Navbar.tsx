"use client"
import React, { useState } from "react"
import Link from "next/link"

export default function Navbar() {
    const [isClick, setIsClick ] = useState(false)
    const toggleNav = () => {
        setIsClick(!isClick)
    }
    return (
        <>
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
                                    <Link href={"/"} className="text-white font-medium hover:bg-[#A3D8FF] hover:text-black-100 hover:px-3 hover:py-2 hover:rounded-lg transition-all duration-300 text-base">Home</Link>
                                    <Link href={"/about"} className="text-white hover:bg-[#A3D8FF] hover:text-black-100 hover:px-3 hover:py-2 hover:rounded-lg transition-all duration-300 font-medium text-base">About</Link>
                                    <Link href={"/projects"} className="text-white hover:bg-[#A3D8FF] hover:text-black-100 hover:px-3 hover:py-2 hover:rounded-lg transition-all duration-300 font-medium text-base">Project</Link>
                                    <Link href={"/blog"} className="text-white hover:bg-[#A3D8FF] hover:text-black-100 hover:px-3 hover:py-2 hover:rounded-lg transition-all duration-300 font-medium text-base">Blog</Link>
                                    <Link href={"https://aracas.vercel.app"} className="text-white hover:bg-[#A3D8FF] hover:text-black-100 hover:px-3 hover:py-2 hover:rounded-lg transition-all duration-300 font-medium text-base">Product</Link>
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
                                <Link href={"/"} className="text-white block hover:bg-[#A3D8FF] hover:text-black-100 hover:px-3 hover:py-2 hover:rounded-lg transition-all duration-300 font-medium text-base">Home</Link>
                                <Link href={"/about"} className="text-white hover:bg-[#A3D8FF] hover:text-black-100 hover:px-3 hover:py-2 hover:rounded-lg transition-all duration-300 block font-medium text-base">About</Link>
                                <Link href={"/projects"} className="text-white hover:bg-[#A3D8FF] hover:text-black-100 hover:px-3 hover:py-2 hover:rounded-lg transition-all duration-300 block font-medium text-base">Project</Link>
                                <Link href={"/blog"} className="text-white hover:bg-[#A3D8FF] hover:text-black-100 hover:px-3 hover:py-2 hover:rounded-lg transition-all duration-300 block font-medium text-base">Blog</Link>
                                <Link href={"/contact"} className="text-white hover:bg-[#A3D8FF] hover:text-black-100 hover:px-3 hover:py-2 hover:rounded-lg transition-all duration-300 block font-medium text-base">Contact</Link>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </>
        
    )
}
