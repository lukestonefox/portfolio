interface ProjectProps {
    name: string;
    year: number;
    where: string;
    technologies: string[];
    github?: string;
}

const ArchiveData: ProjectProps[] = [
    {
        name: "Project 1",
        year: 2021,
        where: "Online",
        technologies: ["React", "TypeScript", "TailwindCSS"],
        github: "https://github.com"
    },
    {
        name: "Project 2",
        year: 2022,
        where: "Online",
        technologies: ["React", "TypeScript", "TailwindCSS"],
        github: "https://github.com"
    }
];

export default ArchiveData;