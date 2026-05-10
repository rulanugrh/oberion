import { Spotlight } from "./ui/Spotlight"
import { LayoutGridSosmed } from "./ui/Sosmed"

export default function ContactPage() {
    return (
        <section
            id="contact"
            className="overflow-x-hidden px-5 pt-28 pb-20"
        >

            {/* ── Spotlight effects ── */}
            <div className="overflow-x-hidden">
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />

                <Spotlight
                    className="top-80 left-12 h-[100vh] w-[100vw]"
                    fill="purple"
                />

                <Spotlight
                    className="top-28 h-[80vh] w-[50vw]"
                    fill="blue"
                />
            </div>


            {/* ── Content ── */}
            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-14">
                    <p className="uppercase tracking-[0.3em] text-xs text-[#888580] mb-4">
                        Connect With Me
                    </p>

                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#f0ede8]">
                        Let&apos;s Build Something Great
                    </h2>

                    <p className="mt-5 text-[#888580] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Find me across platforms — sharing backend engineering,
                        DevSecOps experiments, cloud infrastructure, and random
                        tech thoughts.
                    </p>
                </div>

                <LayoutGridSosmed />
            </div>
        </section>
    )
}