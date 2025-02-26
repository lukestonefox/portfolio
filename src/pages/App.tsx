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
      <div className='w-screen h-screen flex bg-gray-200'>
        <div className='px-48 flex w-full flex-col lg:flex-row items-center gap-y-4 justify-between h-full'>
          <div className='w-full max-w-[10%]'>
            <Header />
          </div>
          <div className='overflow-y-auto max-h-screen w-[70%]'>
            <Projects />
            <Experience />
            {/* {Array.from({ length: 100 }, (_, i) => (
              <div key={i} className='w-14 bg-red-300'>scroll</div>
            ))} */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
