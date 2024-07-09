import Hero from '../components/Hero';
import { Navbar } from '../components/ui/Navbar';
import About from '../components/About';
import Projects from '../components/Projects';
import SocialMedia from "../components/SocialMedia"

import { navItems } from '@/data';
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar navItems={navItems} />
        <Hero />
        <About />
        <Projects />
        <SocialMedia />
      </div>
    </main>
  );
}
