import { TypeAnimation } from "react-type-animation";

export default function Typing() {
    return (
        <TypeAnimation
            sequence={[
                "DevSecOps Enthusiast",
                2000,
                "Backend Developer",
                2000,
                "Pixel Art Enthusiast",
                2000
            ]}
            speed={50}
            repeat={Infinity}
            className="text-[#A3D8FF]"
        />
    )
}