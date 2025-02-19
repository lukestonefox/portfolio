import ArchiveData from "./archiveData"

function Archive() {
    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center bg-black/10">
                <div className="w-1/2 bg-red-400">
                    <h1 className="text-4xl">Archive</h1>
                    {ArchiveData.map((project, index) => (
                        <div key={index} className="flex flex-row w-full justify-between hover:bg-black/5 duration-200">
                            <h2>{project.name}</h2>
                            <p>{project.year}</p>
                            <p>{project.where}</p>
                            <div className="flex flex-row">
                                {project.technologies.map((technology, index) => (
                                    <p key={index}>{technology}</p>
                                ))}
                            </div>
                            {project.github && <a target="_blank" href={project.github}>GitHub</a>}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Archive