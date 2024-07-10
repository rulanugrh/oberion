"use client"

import React, { useState } from "react"

import {SiGo, SiTypescript, SiPython} from "react-icons/si"
import { Certificates, Experience, TechStack } from './SyntaxHihglighter';

export default function Tabs() {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index: number) => {
        setToggleState(index)
    }
    return(
        <div>
            <ul className="flex flex-wrap font-medium text-sm text-white">
                <li className="me-2">
                    <button className={ toggleState === 1 ? "inline-block px-7 py-2 hover:bg-[#A3D8FF] bg-[#A3D8FF] text-black-100 rounded-lg": "inline-block px-7 py-2 rounded-lg"} onClick={() => toggleTab(1)} >
                        <div className="flex flex-wrap">
                            <SiGo fill="#00ADD8" className="w-5 h-5 mr-3" />  tech.go
                        </div>
                    </button>
                    <button className={ toggleState === 2 ? "inline-block px-7 py-2 hover:bg-[#A3D8FF] bg-[#A3D8FF] text-black-100 rounded-lg": "inline-block px-7 py-2 rounded-lg"} onClick={() => toggleTab(2)} >
                        <div className="flex flex-wrap">
                            <SiTypescript fill="#3178C6" className="w-5 h-5 mr-3" /> experience.ts

                        </div>
                    </button>
                    <button className={ toggleState === 3 ? "inline-block px-7 py-2 hover:bg-[#A3D8FF] bg-[#A3D8FF] text-black-100 rounded-lg": "inline-block px-7 py-2 rounded-lg"} onClick={() => toggleTab(3)} >
                        <div className="flex flex-wrap">
                            <SiPython fill="#3776AB" className="w-5 h-5 mr-3" /> certif.py
                        </div>
                    </button>
                </li>
            </ul>
            <div id="default-tab-content">
                <div className={toggleState === 1 ? "" :"hidden"} >
                    <TechStack />
                </div>
                <div className={toggleState === 2 ? "" :"hidden"} >
                    <Experience />
                </div>
                <div className={toggleState === 3 ? "" :"hidden"} id="certif" role="tabpanel" aria-labelledby="certificate-tab">
                    <Certificates />
                </div>
            </div>
        </div>
    )
}