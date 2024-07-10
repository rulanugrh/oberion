import Button from "./ui/Button";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { SiGithub } from "react-icons/si";

export default function Hero() {
  return (
    <div className="pb-36 pt-36">
      <div className="overflow-hidden">
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

      <div className="container my-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest text-xs md:text-base lg:text-lg text-center text-blue-100 max-w-80">
            私のウェブサイトへようこそ
          </h1>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl w-8/12"
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
