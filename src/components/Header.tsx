import {Linkedin, Github} from 'lucide-react';

function Header() {
    return (
        <header className="w-full flex flex-col">
            <div className='font-semibold text-nowrap text-7xl'>Lucas Fox</div>
            <div className="flex flex-row gap-x-4">
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
            </div>
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