"use client"

import Typing from "@/utils/typed";
import React from "react";
import Tabs from './ui/Tabs';
import { Spotlight } from "./ui/Spotlight";

export default function About() {
    return (
        <section id="about" className="pb-36 pt-36">

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
            <div className="container">
                
                <div className="max-w-7xl mx-auto">
                    <div className="px-4 lg:mb-10 mb-5">
                        <h1 className="font-bold text-[#A3D8FF] text-sm lg:text-5xl">&gt; I&apos;m <Typing /></h1>
                    </div>    
                    <Tabs />
                </div>
            </div>
        </section>
    )
}