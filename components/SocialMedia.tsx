import React from "react"
import Link from "next/link"
import { socialMedia } from '../data/index';

export default function SocialMedia() {
    return (
        <div>
            <hr className="my-3 border-gray-300 dark:border-gray-700 sm:mx-auto dark:border-putih lg:my-3"></hr>
            <section id="contact" className="pt-4 pb-4">
                <div className="container">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex items-center justify-between">
                            <Link href="#">
                                <h1 className="font-bold text-white text-lg">Pradana.</h1>
                            </Link>

                            <div className="flex -mx-2">
                                {socialMedia.map((social) => (
                                    <Link href={social.link} className="mx-2 transition-colors duration-300 w-5 h-5" key={social.id}>
                                        <img src={social.img} alt="social-media"/>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}