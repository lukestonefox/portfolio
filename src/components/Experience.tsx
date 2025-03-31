import Chip from './Chip'
import { ArrowUpRight } from 'lucide-react'

const ExperienceData = [
  {
    date: 'AUG - DEC 2024',
    title: 'Software Engineer Co-op',
    company: "Cincinnati Children's Hospital",
    companyLink: 'https://www.cincinnatichildrens.org/',
    description:
      'Developed an internal dynamic Angular web application servicing healthcare providers. Wrote unit tests for API routes and data functionality layer.',
    technologies: ['Angular', 'TypeScript', 'Figma', 'Swagger', 'C#']
  },
  {
    date: 'JAN - APR 2024',
    title: 'Web Applications Developer Co-op',
    company: "Cincinnati Children's Hospital",
    companyLink: 'https://www.cincinnatichildrens.org/',
    description:
      "Designed and developed components to create a design system for the hospital's public facing website.",
    technologies: ['React', 'TypeScript', 'Figma', 'Storybook']
  }
]

function Experience () {
  return (
    <section
      id='experience'
      className='flex flex-col items-center justify-center w-full py-4 gap-y-4'
    >
      {ExperienceData.map((data, index) => (
        <div
          key={index}
          className='relative grid w-full grid-cols-8 p-2 duration-200 rounded-md group gap-x-4 hover:bg-black/5'
        >
          <p className='col-span-2 mt-1 font-semibold tracking-wide text-nowrap text-md'>
            {data.date}
          </p>
          <div className='flex flex-col col-span-6 gap-y-2'>
            <h1 className='flex flex-row text-lg font-semibold text-nowrap gap-x-4'>
              <p>{data.title}</p>
              <a
                href={data.companyLink}
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-row'
              >
                Cincinnati Children's Hospital
                <ArrowUpRight
                  absoluteStrokeWidth
                  strokeWidth={1.25}
                  size={12}
                />
              </a>
            </h1>
            <div>
              <div className='flex flex-col'>{data.description}</div>
            </div>
            <div className='flex flex-row w-min gap-x-2'>
              {data.technologies.map((tech, index) => (
                <Chip key={index} label={tech} />
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className='flex flex-row w-full p-2 text-start'>
        <a
          href='src\assets\LucasFoxSpring2025.pdf'
          target='_blank'
          className='flex flex-row font-semibold hover:underline'
        >
          View Full Resume
          <ArrowUpRight absoluteStrokeWidth strokeWidth={1.25} size={12} />
        </a>
      </div>
    </section>
  )
}

export default Experience
