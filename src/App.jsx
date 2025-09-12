import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Interior from "./pages/Interior"
import Tour3D from "./pages/Tour3D"
import Blog from "./pages/Blog"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/interior" element={<Interior />} />
          <Route path="/3d-tour" element={<Tour3D />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
          <Footer />
      </div>
    </Router>
  )
}

export default App