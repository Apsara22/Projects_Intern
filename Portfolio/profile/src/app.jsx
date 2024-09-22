import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import Services from "./components/Services"

export function App() {

  return (
    <>
    <Navbar/>
    <Profile/>
    <About/>
    <Services/>
    <Projects/>
    <Contact/>
    </>
  )
}
