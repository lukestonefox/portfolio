import { Linkedin, Github } from 'lucide-react'

function Header () {
  return (
    <header className='justify-between w-full lg:h-full'>
      <div className='flex flex-col justify-between h-full gap-y-4'>
        <div className='flex flex-col gap-y-4'>
          <a
            href='#intro'
            className='text-2xl font-semibold text-nowrap md:text-4xl xl:text-7xl'
          >
            Lucas Fox
          </a>
          <p className='text-xl font-semibold text-nowrap'>
            Fullstack Software Engineer
          </p>
          <nav>
            <ul className='flex flex-row gap-x-4'>
              <li>
                <a className='hover:underline' href='#intro'>
                  About
                </a>
              </li>
              <li>
                <a className='hover:underline' href='#experience'>
                  Experience
                </a>
              </li>
              <li>
                <a className='hover:underline' href='#projects'>
                  Projects
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='flex flex-row justify-self-end gap-x-4 '>
          <a
            href='https://www.linkedin.com/in/ls-fox'
            target='_blank'
            rel='noreferrer noopener'
            title='LinkedIn'
          >
            <Linkedin size={24} className='hover:text-gray-600' />
          </a>
          <a
            href='https://www.github.com/lukestonefox'
            target='_blank'
            rel='noreferrer noopener'
            title='GitHub'
          >
            <Github size={24} className='hover:text-gray-600' />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
