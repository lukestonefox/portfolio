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
      <div className='flex w-screen h-screen bg-gray-200'>
        <div className='flex flex-col justify-between w-full h-full mx-auto pt-36 xl:px-48 xl:flex-row gap-y-4'>
          <div>
            <Header />
            {/* <button onClick={toggleDarkMode}>Toggle Darkmode</button> */}
          </div>
          <main className='w-[54%] max-h-screen flex flex-col gap-y-16 overflow-y-auto'>
            <Intro />
            <Projects />
            <Experience />
          </main>
        </div>
      </div>
    </>
  )
}

export default App
