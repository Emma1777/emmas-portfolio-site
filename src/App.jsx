// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Solutions from './pages/Solutions'
import NotFound from './pages/NotFound' // optional fallback page

function App() {
  return (
    <main className="min-h-screen font-sans bg-white text-gray-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="*" element={<NotFound />} /> {/* Optional 404 page */}
      </Routes>
    </main>
  )
}

export default App
