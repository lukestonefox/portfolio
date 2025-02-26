function Header() {
    return (
        <header className="w-full flex flex-col">
            <div className='font-semibold'>Lucas<span className="font-bold">Fox</span></div>
            <div className="flex flex-row gap-x-4">
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
            </div>
        </header>
    )
}

export default Header;