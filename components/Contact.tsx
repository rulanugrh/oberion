"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { socialMedia } from "@/data"
import { FaEnvelope, FaUser } from "react-icons/fa"
import { Spotlight } from "./ui/Spotlight"

export default function Cont() {
    return (
        <section id="contact" className="pt-36 pb-36 bg-black-100">
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
            <div className="container my-8 overflow-hidden">
                <div className="max-w-5xl mx-auto items-center justify-center">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-6" style={{ display: 'flex', justifyContent: "center"}}>
                            <Image src={'/proton.gif'} width={400} height={400} className=" shadow-md shadow-blue-300 rounded-lg mb-6" alt="Profile Image"/>
                            
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/2 px-4">
                            <form className="max-w-sm mx-auto">
                                <div className="mb-5">
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Username</label>
                                    <div className="flex">
                                        <span className="inline-flex items-center px-3 text-sm text-[#A3D8FF] bg-black-100 border border-e-0 border-blue-300 rounded-s-md ">
                                            <FaUser />
                                        </span>
                                        <input type="text" id="website-admin" className="rounded-none rounded-e-lg bg-black-100 border border-blue-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 " placeholder="Bonnie Green"></input>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Email</label>
                                    <div className="flex">
                                        <span className="inline-flex items-center px-3 text-sm text-[#A3D8FF] bg-black-100 border border-e-0 border-blue-300 rounded-s-md ">
                                            <FaEnvelope />
                                        </span>
                                        <input type="email" id="website-admin" className="rounded-none rounded-e-lg bg-black-100 border border-blue-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 " placeholder="bonnie@gmail.com"></input>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Message</label>
                                    <div className="flex">
                                        <textarea rows={4} id="website-admin" className="rounded-lg bg-black-100 border border-blue-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 " placeholder="Bonnie Green"></textarea>
                                    </div>
                                </div>
                                <button className="bg-blue-300 text-black-100 w-full py-2 rounded-lg shadow font-semibold">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}