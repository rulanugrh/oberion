"use client"

import Typing from "@/utils/typed";
import React from "react";
import Tabs from './ui/Tabs';

export default function About() {
    return (
        <section id="about" className="pb-36 pt-36">
            <div className="container">
                
                <div className="max-w-7xl mx-auto">
                    <div className="px-4 lg:mb-10 mb-5">
                        <h1 className="font-bold text-[#A3D8FF] text-lg lg:text-5xl">&gt; I&apos;m <Typing /></h1>
                    </div>    
                    <Tabs />
                </div>
            </div>
        </section>
    )
}