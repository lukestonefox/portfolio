interface ProjectProps {
    name: string;
    year: number;
    where?: string;
    technologies: string[];
    github?: string;
    link?: string;
    img?: string;
    desc?: string;
}

const ArchiveData: ProjectProps[] = [
    {
        name: "Nomad",
        year: 2024,
        where: "University of Cincinnati",
        technologies: ["React", "TailwindCSS", "Google Maps API"],
        github: "https://github.com/lukestonefox/nomad-web",
        desc: "A all-in-one travel planner that helps users plan their trips, find attractions, and book hotels."
    },
    {
        name: "Storefront",
        year: 2024,
        where: "University of Cincinnati",
        technologies: ["React", "TailwindCSS", "Express", "PostgreSQL"],
        github: "https://github.com/lukestonefox/Database-Design-Store",
        desc: "A full-stack e-commerce website that allows users to browse and purchase products."
    },
    {
        name: "Portfolio v2",
        year: 2024,
        where: "",
        technologies: ["React", "TailwindCSS"],
        github: "https://github.com/lukestonefox/portfolio",
        desc: "The second version of my personal portfolio website that showcases my projects and experiences.",
    },
    {
        name: "Nutripy",
        year: 2023,
        where: "MakeUC Hackathon",
        technologies: ["Python", "Taipy"],
        desc: "A web app that helps users understand the ingredients in their food."
    },
  
    {
        name: "Auto Login",
        year: 2022,
        technologies: ["C#"]
    },
    {
        name: "Portfolio v1",
        year: 2022,
        technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
    },
    {
        name: "Lego Mindstorm Robot",
        year: 2022,
        technologies: ["Python", "LabVIEW"],
        where: "University of Cincinnati",
    }
];

export default ArchiveData;