import ArchiveData from './archiveData'
import { Github, CornerLeftUp } from 'lucide-react'
import { Link } from 'react-router'
import Chip from './Chip'
import { Fragment } from 'react/jsx-runtime'

function Archive () {
  return (
    <Fragment>
      <div className='flex items-center justify-center w-screen h-screen'>
        <div className='flex flex-col w-full px-32'>
          <div className='flex flex-row items-center mb-8 gap-x-2'>
            <Link to='/'>
              <CornerLeftUp className='duration-200 hover:text-gray-500' />
            </Link>
            <h1 className='text-4xl font-semibold'>Archive</h1>
          </div>
          <div className='grid w-full grid-cols-12 px-4 py-2 font-semibold'>
            <p className='hidden col-span-1 lg:block'>Year</p>
            <p className='col-span-3'>Name</p>
            <p className='hidden lg:block lg:col-span-2'>Where</p>
            <p className='hidden lg:block lg:col-span-4'>Technologies</p>
            <p className='hidden lg:block lg:col-span-1'>Links</p>
          </div>
          {ArchiveData.map((project, index) => (
            <Fragment key={index}>
              <div
                key={index}
                className='grid w-full grid-cols-12 px-4 py-4 auto'
              >
                <p className='hidden col-span-1 lg:block'>{project.year}</p>
                <a
                  href={project.github}
                  className='col-span-3 lg:pointer events-none'
                >
                  {project.name}
                </a>
                <p className='hidden col-span-2 lg:block'>{project.where}</p>
                <div className='flex-row flex-wrap hidden gap-2 text-xs lg:col-span-4 xl:col-span-4 lg:flex'>
                  {project.technologies.map((technology, index) => (
                    <Chip key={index} label={technology} />
                  ))}
                </div>
                {project.github && (
                  <a
                    target='_blank'
                    className='hidden col-span-1 duration-200 lg:block hover:text-gray-600'
                    href={project.github}
                    title='GitHub'
                  >
                    <Github />
                  </a>
                )}
              </div>
              {index !== ArchiveData.length - 1 && <hr />}
            </Fragment>
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default Archive
