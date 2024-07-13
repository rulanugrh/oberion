"use client";
import React from "react";
import { Card, CardSkeletonContainer, CardDescription, CardTitle, SkeletonCressida, SkeletonMars, SkeletonGanymede } from './ui/PinCard';
import { projects } from "@/data";
import Button from "./ui/Button";
import { SiGithub } from "react-icons/si";
import { Spotlight } from "./ui/Spotlight";

export function Projects() {
  return (
    <section id="projects" className="pt-36 pb-36">
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
        <div className="lg:heading text-center text-lg mb-10 px-4 lg:mb-20">
                A small selection of {' '}
                <span className="text-[#A3D8FF]">recent project</span>
        </div>
        <div className="container">
            <div className="max-w-7xl mx-auto">
                <div className="items-center justify-center grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5">
                    {projects.map(({id, title, des, link}) => (
                        <div key={id}>
                            <Card>
                                <CardSkeletonContainer>
                                    {title == "Cressida" && <SkeletonCressida />}
                                    {title == "Ganymede" && <SkeletonGanymede />}
                                    {title == "Mars" && <SkeletonMars />}
                                </CardSkeletonContainer>
                                <CardTitle className="mt-4">{title}</CardTitle>
                                <CardDescription className="mb-5">{des}</CardDescription>
                                <div className="w-full items-center text-center justify-center">
                                    <a href={link}>
                                        <Button title="Link Project" icon={<SiGithub />} position="left" />
                                    </a>    
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}


