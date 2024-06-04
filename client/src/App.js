import './App.css';
import Header from './components/Header';
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Playlist from "./components/Playlist"
import { Routes, Route } from "react-router-dom"

function App() {
  return (

    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/projects' element={<Playlist />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
      </Routes>
      <Footer />
    </>

  )
}

export default App;
