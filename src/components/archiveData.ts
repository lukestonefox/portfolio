interface ProjectProps {
    name: string;
    year: number;
    where: string;
    technologies: string[];
    github?: string;
}

const ArchiveData: ProjectProps[] = [
    {
        name: "Nomad",
        year: 2024,
        where: "University of Cincinnati",
        technologies: ["React", "TypeScript", "TailwindCSS"],
        github: "https://github.com"
    },
    {
        name: "Storefront",
        year: 2024,
        where: "University of Cincinnati",
        technologies: ["React", "TypeScript", "TailwindCSS"],
        github: "https://github.com"
    }
];

export default ArchiveData;