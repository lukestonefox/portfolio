interface ProjectProps {
    name: string;
    year: number;
    where?: string;
    technologies: string[];
    github?: string;
}

const ArchiveData: ProjectProps[] = [
    {
        name: "Tarkov Roulette",
        year: 2025,
        where: "",
        technologies: ["Svelte", "TailwindCSS"],
        github: ""
    },
    {
        name: "Nomad",
        year: 2024,
        where: "University of Cincinnati",
        technologies: ["React", "TailwindCSS", "Google Maps API"],
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
        name: "Nutripy",
        year: 2023,
        where: "MakeUC Hackathon",
        technologies: ["Python", "Taipy"]
    },
    {
        name: "Portfolio",
        year: 2024,
        where: "",
        technologies: ["React", "TailwindCSS"],
        github: "https://github.com/lukestonefox/portfolio"
    },
    {
        name: "Auto Login",
        year: 2022,
        technologies: ["C#"]
    }
];

export default ArchiveData;