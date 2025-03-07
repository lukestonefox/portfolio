import './App.css'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Intro from '../components/Intro'

function App() {
  return (
    <>
      <div className='max-w-screen-xl px-6 py-12 mx-auto lg:min-h-screen md:px-12 md:py-16 lg:py-0 '>
        <div className='flex flex-col w-full h-full px-6 xl:items-start lg:justify-between md:px-12 lg:flex-row gap-y-16'>
          <div className='lg:h-screen lg:sticky lg:top-0 lg:pt-36 lg:pb-36'>
            <Header />
          </div>
          <main className='w-full lg:w-[52%] overflow-y-auto gap-y-16 lg:px-8 sm:px-2 lg:h-full flex flex-col'>
            <Intro />
            <Experience />
            <Projects />
          </main>
        </div>
      </div>
    </>
  )
}

export default App
