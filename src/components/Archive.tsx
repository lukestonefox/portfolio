import ArchiveData from "./archiveData"
import { Github, CornerLeftUp } from "lucide-react"
import { Link } from "react-router"
import Chip from "./Chip"

function Archive() {
    return (
        <>
            <div className="flex items-center justify-center w-screen h-screen bg-gray-200">
                <div className="flex flex-col w-3/4 gap-y-2">
                    <div className="flex flex-row items-center mb-8 gap-x-2">
                        <Link to="/">
                            <CornerLeftUp className="duration-200 hover:text-gray-300" />
                        </Link>
                        <h1 className="text-4xl font-semibold">Archive</h1>
                    </div>
                    <div className="flex flex-row items-center w-full px-4 py-2">
                        <p className="font-semibold w-[5%]">Year</p>
                        <p className="font-semibold w-[35%]">Name</p>
                        <p className="font-semibold w-[20%]">Where</p>
                        <p className="font-semibold w-[35%]">Technologies</p>
                        <p className="font-semibold w-[5%]">Links</p>
                    </div>
                        {ArchiveData.map((project, index) => (
                            <>
                                <div key={index} className="flex flex-row items-center w-full px-4 py-2">
                                <p className="w-[5%]">{project.year}</p>
                                <p className="w-[35%]">{project.name}</p>
                                <p className="w-[20%]">{project.where}</p>
                                <div className="flex flex-row gap-2 w-[35%] flex-wrap text-xs">
                                    {project.technologies.map((technology, index) => (
                                        <Chip key={index} label={technology} />
                                    ))}
                                </div>
                                {project.github && <a target="_blank" className="duration-200 hover:text-gray-600" href={project.github} title="GitHub"><Github /></a>}
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