import Chip from "./Chip";
import { ArrowUpRight } from "lucide-react";

const ExperienceData = [
    {
        date: "AUG - DEC 2024",
        title: "Software Engineer Co-op",
        company: "Cincinnati Children's Hospital",
        companyLink: "https://www.cincinnatichildrens.org/",
        description: "Developed an internal dynamic Angular web application servicing healthcare providers. Wrote unit tests for API routes and data functionality layer.",
        technologies: ["Angular", "TypeScript", "Figma", "Swagger", "C#"]
    },
    {
        date: "JAN - APR 2024",
        title: "Web Applications Developer Co-op",
        company: "Cincinnati Children's Hospital",
        companyLink: "https://www.cincinnatichildrens.org/",
        description: "Designed and developed components to create a design system for the hospital's public facing website.",
        technologies: ["React", "TypeScript", "Figma", "Storybook"]
    }
]

function Experience() {
  return (
    <section id="experience" className="flex flex-col items-center justify-center w-full py-4 gap-y-8">
        {ExperienceData.map((data, index) => (
            <div key={index} className="relative w-full p-2 xl:grid xl:grid-cols-8 group gap-x-4">
                {/* <a className="absolute duration-200 hover:bg-black/5 -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-4 md:-inset-y-2 xl:block" href={data.companyLink} title={data.company}></a> */}
                <p className="col-span-2 mt-1 text-sm font-semibold tracking-wide uppercase text-nowrap">{data.date}</p>
                <div className="flex flex-col col-span-6 gap-y-2">
                    <h1 className="font-semibold text-md">{data.title}</h1>
                    <h2 className="text-sm italic tracking-wider">{data.company}</h2>
                    <div>{data.description}</div>
                    <div className="flex flex-wrap gap-2">
                        {data.technologies.map((tech, index) => (
                            <Chip key={index} label={tech} />
                        ))}
                    </div>
                </div>
            </div>
        ))}
        <div className="flex flex-row w-full p-2 text-start">
            <a href="src\assets\LucasFoxSpring2025.pdf" target="_blank" className="flex flex-row font-semibold hover:underline">View Full Resume<ArrowUpRight absoluteStrokeWidth strokeWidth={1.25} size={12}/></a>
        </div>
    </section>
  );
}

export default Experience;