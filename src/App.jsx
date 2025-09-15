import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import Footer from "./components/Footer"
import "./App.css"
import GauravEuphoriaDetail from "./pages/projects/GauravEuphoriaDetail"
import ProjectsPage from "./pages/ProjectsPage"


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<GauravEuphoriaDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App