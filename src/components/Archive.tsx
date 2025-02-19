import ArchiveData from "./archiveData"
import { Github, CornerLeftUp } from "lucide-react"
import { Link } from "react-router"

function Archive() {
    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-black/10">
                <div className="w-1/2 flex flex-col gap-y-2">
                <div className="flex flex-row items-center gap-x-2">
                    <Link to="/">
                        <CornerLeftUp />
                    </Link>
                    <h1 className="text-4xl">Archive</h1>
                </div>
                <div className="flex flex-row w-full px-4 py-2 items-center">
                    <p className="w-[10%]">Year</p>
                    <p className="w-[30%]">Name</p>
                    <p className="w-[20%]">Where</p>
                    <p className="w-[20%]">Technologies</p>
                    <p className="w-[20%]">Links</p>
                </div>
                    {ArchiveData.map((project, index) => (
                        <>
                            <div key={index} className="flex flex-row w-full px-4 py-2 items-center">
                            <p className="w-[10%]">{project.year}</p>
                            <p className="w-[30%]">{project.name}</p>
                            <p className="w-[20%]">{project.where}</p>
                            <div className="flex flex-row gap-2 w-[20%] flex-wrap text-xs">
                                {project.technologies.map((technology, index) => (
                                    <div className="bg-blue-500/20 text-blue-500 rounded-2xl px-2 py-1" key={index}>{technology}</div>
                                ))}
                            </div>
                            {project.github && <a target="_blank" href={project.github} title="GitHub"><Github /></a>}
                        </div>
                        {index !== ArchiveData.length-1 && <hr />}
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Archive