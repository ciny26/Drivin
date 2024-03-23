import './App.css'
import NavBar from './components/mainComponents/NavBar'
import { Route , Routes } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Courses from './views/Courses'
import Pages from './views/Pages'
import Contact from './views/Contact'



function App() {
  

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/courses" element={<Courses/>}></Route>
        <Route path="/pages" element={<Pages/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </>
  )
}

export default App
