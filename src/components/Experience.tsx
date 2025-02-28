import Chip from "./Chip";
import { ArrowUpRight } from "lucide-react";

function Experience() {
  return (
    <section id="experience" className="flex flex-col items-center justify-center w-full h-screen py-8 gap-y-16">
        <div className="flex flex-row w-full gap-x-4">
            <p className="text-nowrap w-[15%] font-semibold text-md">AUG - DEC 2024</p>
            <div className="w-[60%] flex flex-col gap-y-2">
                <h1 className="text-lg font-semibold text-nowrap flex flex-row gap-x-4">
                    <p>Software Engineer Co-op</p><a href="https://www.cincinnatichildrens.org/" target="_blank" rel="noopener noreferrer" className="flex flex-row">Cincinnati Children's Hospital<ArrowUpRight size={12} /></a>
                </h1>
                <div>
                    <div className="flex flex-col">
                        Developed an internal dynamic Angular web application servicing healthcare providers. Wrote unit tests for API routes and data functionality layer.
                    </div>
                </div>
                <div className="flex flex-row w-min gap-x-2">
                    <Chip label="Angular" />
                    <Chip label="TypeScript" />
                    <Chip label="Figma" />
                    <Chip label="Swagger" />
                    <Chip label="C#" />
                </div>
            </div>
        </div>
        <div className="flex flex-row w-full duration-200 rounded-md gap-x-4 hover:bg-white/50 p">
            <p className="text-nowrap w-[15%] font-semibold">JAN - APR 2024</p>
            <div className="w-[60%] flex flex-col gap-y-4">
                <h1 className="text-lg font-semibold flex flex-row gap-x-2 text-nowrap">
                    <p>Web Applications Developer Co-op</p><a href="https://www.cincinnatichildrens.org/" target="_blank" rel="noopener noreferrer" className="flex flex-row">Cincinnati Children's Hospital<ArrowUpRight size={12} /></a>
                </h1>
                <div className="flex flex-col">
                    Designed and developed components to create a design system for the hospital's public facing website.
                </div>
                <div className="flex flex-row w-min gap-x-2">
                    <Chip label="React" />
                    <Chip label="TypeScript" />
                    <Chip label="Figma" />
                    <Chip label="Storybook" />
                </div>
            </div>
        </div>
        <div className="flex flex-row w-full text-start">
            <a href="LucasFoxSpring2025.pdf" target="_blank" className="font-semibold flex flex-row">View Full Resume<ArrowUpRight size={12}/></a>
        </div>
    </section>
  );
}

export default Experience;