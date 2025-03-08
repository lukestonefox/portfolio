import { Link } from 'react-router'
import Chip from './Chip'
import ArchiveData from './archiveData'
import { ArrowUpRight } from 'lucide-react'

function Projects () {
  const firstFewProjects = ArchiveData.slice(0, 4)
  return (
    <section
      id='projects'
      className='flex flex-col items-center justify-center w-full gap-y-4 pb-36'
    >
      {firstFewProjects.map((data, index) => (
        <div
          key={index}
          className='flex flex-col w-full p-2 duration-200 rounded-md gap-y-4 hover:bg-black/5'
        >
          <h1 className='font-semibold text-md'>{data.name}</h1>
          <p className='text-sm'>{data.desc}</p>
          <div className='flex flex-wrap gap-2'>
            {data.technologies.map((tech, index) => (
              <Chip key={index} label={tech}></Chip>
            ))}
          </div>
        </div>
      ))}
      <div className='flex flex-row w-full pl-2 mt-4 font-semibold hover:underline'>
        <Link to='/archive'>View All Projects</Link>
        <ArrowUpRight absoluteStrokeWidth strokeWidth={1.25} size={12} />
      </div>
    </section>
  )
}

export default Projects
