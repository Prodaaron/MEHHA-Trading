import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Exports from "./pages/Exports";
import Imports from "./pages/Imports";
import FB from './pages/F&B';
import Education from './pages/Education'
import Industries from "./pages/Industries";
import Projects from "./pages/Projects";
import Contact from "./pages/Contacts";
import "./App.css";
import ScrollToTop from "./components/scrollToTop";

function App() {
  

  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/exports" element={<Exports />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/f&b" element={<FB />} />
        <Route path="/imports" element={<Imports />} />
        <Route path="/education&services" element={<Education />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
