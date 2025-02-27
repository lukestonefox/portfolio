import ArchiveData from "./archiveData"
import { Github, CornerLeftUp } from "lucide-react"
import { Link } from "react-router"

function Archive() {
    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center text-white bg-gray-800">
                <div className="w-3/4 flex flex-col gap-y-2">
                <div className="flex flex-row items-center gap-x-2 mb-8">
                    <Link to="/">
                        <CornerLeftUp className="hover:text-gray-300 duration-200" />
                    </Link>
                    <h1 className="text-4xl font-semibold">Archive</h1>
                </div>
                <div className="flex flex-row w-full px-4 py-2 items-center">
                    <p className="font-semibold w-[5%]">Year</p>
                    <p className="font-semibold w-[35%]">Name</p>
                    <p className="font-semibold w-[20%]">Where</p>
                    <p className="font-semibold w-[35%]">Technologies</p>
                    <p className="font-semibold w-[5%]">Links</p>
                </div>
                    {ArchiveData.map((project, index) => (
                        <>
                            <div key={index} className="flex flex-row w-full px-4 py-2 items-center">
                            <p className="w-[5%]">{project.year}</p>
                            <p className="w-[35%]">{project.name}</p>
                            <p className="w-[20%]">{project.where}</p>
                            <div className="flex flex-row gap-2 w-[35%] flex-wrap text-xs">
                                {project.technologies.map((technology, index) => (
                                    <div className="bg-blue-500/30 text-blue-500 rounded-2xl px-2 py-1" key={index}>{technology}</div>
                                ))}
                            </div>
                            {project.github && <a target="_blank" className="hover:text-gray-300 duration-200" href={project.github} title="GitHub"><Github /></a>}
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