import './App.css'
import { useEffect } from 'react'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Experience from '../components/Experience'

function App() {
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start"});
  }, []);

  return (
    <>
      <div className='flex w-screen h-screen bg-gray-200'>
        <div className='flex flex-col items-center justify-between w-full h-full px-48 lg:flex-row gap-y-4'>
          <div className='w-full max-w-[10%]'>
            <Header />
          </div>
          <div className='w-2/3 max-h-screen overflow-y-auto'>
            <Projects />
            <Experience />
            {/* {Array.from({ length: 100 }, (_, i) => (
              <div key={i} className='bg-red-300 w-14'>scroll</div>
            ))} */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
