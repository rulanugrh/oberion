import Button from "./ui/Button";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { SiGithub } from "react-icons/si";

export default function Hero() {
  return (
    <div className="pb-36 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[80vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest text-xs md:text-base lg:text-lg text-center text-blue-100 max-w-80">
            私のウェブサイトへようこそ
          </h1>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Hi, I'm Pradana DevSecOps Enthusiast and Backend Developer"
          />
          <p className="text-center mb-4 text-sm md:text-base lg:text-xl font-extralight">
            Currently I have 1+ years experience use Golang and Typescript for
            Developing API
          </p>

          <a href="https://github.com/rulanugrh">
            <Button title="Github" icon={<SiGithub />} position="left"/>
          </a>
        </div>
      </div>
    </div>
  );
}
