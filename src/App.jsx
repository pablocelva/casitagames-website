import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Games from './pages/Games'
import OjitoGame from './pages/OjitoGame'
import YutoriGame from './pages/YutoriGame'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ojito" element={<OjitoGame />} />
        <Route path="/yutori" element={<YutoriGame />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
