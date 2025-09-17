import React from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import Footer from "./components/Footer"
import "./App.css"
import GauravEuphoriaDetail from "./pages/projects/GauravEuphoriaDetail"
import ProjectsPage from "./pages/ProjectsPage"
import VideoPlayer from "./pages/VideoPlayer"

function AppContent() {
  const location = useLocation()

  // ✅ Footer hide kare agar path /video-player se start ho
  const hideFooter = location.pathname.startsWith("/video-player")

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<GauravEuphoriaDetail />} />
        <Route path="/video-player/:type" element={<VideoPlayer />} />
      </Routes>

      {/* ✅ Conditional Footer */}
      {!hideFooter && <Footer />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
