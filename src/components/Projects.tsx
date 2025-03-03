import { Link } from "react-router";
import Chip from "./Chip";

interface ProjectDataType {
    title: string;
    date: string;
    description: string;
    technologies: string[];
}

const ProjectData: ProjectDataType[] = [
    {
        title: "Nutripy",
        date: "OCT 2023",
        description: "A nutrition tracking app that helps users track their daily intake of food and water.",
        technologies: ["React", "TypeScript", "Figma"]
    },
    {
        title: "Application Auto Login",
        date: "JUNE 2023",
        description: "A Chrome extension that automatically logs users into applications.",
        technologies: ["JavaScript", "HTML", "CSS"]
    }
]

function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center justify-center w-full py-8">
            {ProjectData.map((data, index) => (
                <div key={index} className="flex flex-col w-full p-2 duration-200 rounded-md gap-y-4 hover:bg-black/5 hover:text-gray-800">
                    <h1 className="text-2xl font-semibold">{data.title}</h1>
                    <p>{data.date}</p>
                    <p>{data.description}</p>
                    <div className="flex flex-row w-min gap-x-2">
                        {data.technologies.map((tech, index) => (
                            <Chip key={index} label={tech}></Chip>
                        ))}
                    </div>
                </div>
            ))}
            <Link to="/archive">View the full project archive</Link>
        </section>
    );
}

export default Projects;