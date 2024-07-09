"use client"

import Typing from "@/utils/typed";
import React from "react";
import Terminal from './ui/SyntaxHihglighter';
import { BackgroundGradient } from './ui/BackgroundGradient';

export default function About() {
    return (
        <section id="about" className="pb-36 pt-36 bg-black-100">
            <div className="max-w-7xl">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="px-4 w-full lg:w-1/2">
                            <BackgroundGradient className="rounded-lg bg-black-100">
                                <div className="object-contain rounded-lg">
                                    <Terminal />
                                </div>
                            </BackgroundGradient>
                        </div>
                        <div className="px-6 w-full lg:w-1/2">
                            <h1 className="font-bold text-[#A3D8FF] text-lg lg:text-3xl mb-5">&gt; I'm <Typing /></h1>
                            <p className="text-gray-300 text-base lg:text-lg font-thin mb-4 lg:w-11/12">Hello everyone my name is Pradana, i have several hobbies such as coding, reading books, playing games, and designing.</p>
                            <p className="text-gray-300 text-base lg:text-lg font-thin mb-4 lg:w-11/12">I am proficient in several languages ​​such as Golang, Python, and Typescript. My passion is in the DevSecOps field. I already understand several infrastructure tools such as Docker, Jenkins, and servers. Currently I have 1+ years of experience as a Backend Developer. I am an introvert but have good communication in teamwork.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}