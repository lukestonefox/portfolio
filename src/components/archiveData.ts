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
        technologies: ["React", "TailwindCSS"],
        github: "https://github.com/lukestonefox/nomad-web"
    },
    {
        name: "Storefront",
        year: 2024,
        where: "University of Cincinnati",
        technologies: ["React", "TailwindCSS", "Express", "PostgreSQL"],
        github: "https://github.com/lukestonefox/Database-Design-Store"
    },
    {
        name: "Portfolio",
        year: 2024,
        where: "",
        technologies: ["React", "TailwindCSS"],
        github: "https://github.com/lukestonefox/portfolio"
    },
    {
        name: "Tarkov Roulette",
        year: 2025,
        where: "",
        technologies: ["Svelte", "TailwindCSS"],
        github: ""
    }
];

export default ArchiveData;