import {Linkedin, Github} from 'lucide-react';

function Header() {
    return (
        <header className="flex flex-col w-full gap-y-4">
            <div className='text-2xl font-semibold text-nowrap md:text-4xl xl:text-7xl'>Lucas Fox</div>
            <p className='text-xl font-semibold text-nowrap'>Software Engineer</p>
            <nav>
                <ul className="flex flex-row gap-x-4">
                    <li><a href="#intro">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                </ul>
            </nav>
            <div className='flex flex-row gap-x-2'>
                <a href="https://www.linkedin.com/in/ls-fox" target="_blank" rel="noreferrer noopener" title="LinkedIn">
                    <Linkedin size={24} />
                </a>
                <a href="https://www.github.com/lukestonefox" target="_blank" rel="noreferrer noopener" title="GitHub">
                    <Github size={24} />
                </a>
            </div>
        </header>
    )
}

export default Header;