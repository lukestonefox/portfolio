import ArchiveData from './archiveData'
import { Github, CornerLeftUp } from 'lucide-react'
import { Link } from 'react-router'
import Chip from './Chip'

function Archive () {
  return (
    <>
      <div className='flex items-center justify-center w-screen h-screen'>
        <div className='flex flex-col w-full px-32'>
          <div className='flex flex-row items-center mb-8 gap-x-2'>
            <Link to='/'>
              <CornerLeftUp className='duration-200 hover:text-gray-300' />
            </Link>
            <h1 className='text-4xl font-semibold'>Archive</h1>
          </div>
          <div className='grid w-full grid-cols-12 px-4 py-2 font-semibold'>
            <p className='hidden col-span-1'>Year</p>
            <p className='col-span-3'>Name</p>
            <p className='hidden xl:col-span-2'>Where</p>
            <p className='hidden lg:block lg:col-span-6 xl:col-span-4'>
              Technologies
            </p>
            <p className='hidden xl:col-span-2'>Links</p>
          </div>
          {ArchiveData.map((project, index) => (
            <>
              <div key={index} className='grid w-full grid-cols-12 px-4 py-4'>
                <p className='hidden col-span-1'>{project.year}</p>
                <p className='col-span-3'>{project.name}</p>
                <p className='hidden col-span-2'>{project.where}</p>
                <div className='flex-row flex-wrap hidden gap-2 text-xs lg:col-span-6 xl:col-span-4 lg:flex'>
                  {project.technologies.map((technology, index) => (
                    <Chip key={index} label={technology} />
                  ))}
                </div>
                {project.github && (
                  <a
                    target='_blank'
                    className='hidden col-span-2 duration-200 hover:text-gray-600'
                    href={project.github}
                    title='GitHub'
                  >
                    <Github />
                  </a>
                )}
              </div>
              {index !== ArchiveData.length - 1 && <hr />}
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Archive
