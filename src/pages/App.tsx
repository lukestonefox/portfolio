import './App.css'
import { useEffect } from 'react'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Intro from '../components/Intro'

function App() {
  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start"});
  }, []);

  function toggleDarkMode() {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      //add class=dark in html element
      document.documentElement.classList.add("dark");
    } else {
      //remove class=dark in html element
      document.documentElement.classList.remove("dark");
    }

    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  }

  return (
    <>
      <div className='flex w-screen h-screen'>
        <div className='flex flex-col items-center justify-between w-full h-full p-24 xl:px-48 xl:flex-row gap-y-4'>
          <div className='w-full max-w-[10%]'>
            <Header />
            <div onClick={toggleDarkMode}>Toggle Darkmode</div>
          </div>
          <div className='w-2/3 max-h-screen overflow-y-auto'>
            <Intro />
            <Projects />
            <Experience />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
