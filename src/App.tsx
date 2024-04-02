import './App.css'
import NavBar from './components/mainComponents/NavBar'
import { Route , Routes } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Courses from './views/Courses'
import Contact from './views/Contact'
import Footer from './components/mainComponents/Footer'



function App() {
  

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/courses" element={<Courses/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
