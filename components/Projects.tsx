"use client"

import React from "react"
import { projects } from "@/data"
import { PinContainer } from './ui/PinCard';
import { FaLocationArrow } from "react-icons/fa";
import Button from "./ui/Button";
import { SiGithub } from "react-icons/si";
export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="heading">
                A small selection of {' '}
                <span className="text-[#A3D8FF]">recent project</span>
            </div>
            <div className="container">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {projects.map(({id, title, des, img, iconLists, link}) => (
                        <div key={id} className="sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center w-[80vw]">
                            <PinContainer title={link} href={link}>
                                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] lg:h-[30vh] mb-10">
                                    <img src={img}   alt={title} className="z-10 absolute bottom-0 rounded-lg" />
                                </div>
                                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                    {title}
                                </h1>
                                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                                    {des}
                                </p>
                                <div className="flex items-center justify-between mt-7 mb-3">
                                    <div className="flex items-center">
                                        {iconLists.map((icon, index) => (
                                            <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style={{
                                                    transform: `translateX(-${5 * index * 2})`
                                                }}>
                                                <img src={icon} alt={icon} className="p-3" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <a href={link}>
                                            <button className="px-5 py-2 rounded-lg bg-black-100 border border-gray-400">Project</button>
                                        </a>
                                    </div>
                                </div>
                            </PinContainer>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            
            <div className="flex justify-center relative my-10 z-10">
                <div className="max-w-[80vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center" >
                    <a href="https://github.com/rulanugrh">
                        <Button title="More Project" icon={<SiGithub />} position="left"/>
                    </a>
                </div>
            </div>
        </section>
    )
}