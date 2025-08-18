
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Solutions from "./pages/Solutions";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";
import MainLayout from "./layout/MainLayout";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <main className="min-h-screen font-sans bg-white text-gray-900">
      <Toaster position="top-center" reverseOrder={false} />
<ScrollToTop /> {/* ✅ Global scroll behavior */}
      <Routes>
        {/* Home uses its own layout because it has all sections together */}
        <Route path="/" element={<Home />} />

        {/* All other pages share MainLayout */}
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <MainLayout>
              <Blog />
            </MainLayout>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <MainLayout>
              <BlogDetails />
            </MainLayout>
          }
        />
        <Route
          path="/solutions"
          element={
            <MainLayout>
              <Solutions />
            </MainLayout>
          }
        />
        <Route
          path="*"
          element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
