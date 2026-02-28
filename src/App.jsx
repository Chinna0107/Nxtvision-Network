import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import ScrollingBanner from './components/ScrollingBanner'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Services from './pages/Services'
import ServicesOverview from './pages/ServicesOverview'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import WhyStartech from './pages/WhyStartech'
import Terms from './pages/Terms'
import Disclaimer from './pages/Disclaimer'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollingBanner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company-profile" element={<About />} />
        <Route path="/mission-values" element={<About />} />
        <Route path="/customers" element={<About />} />
        <Route path="/accomplishments" element={<About />} />
        <Route path="/leadership" element={<About />} />
        <Route path="/locations" element={<About />} />
        <Route path="/certification" element={<About />} />
        <Route path="/hr-philosophy" element={<Careers />} />
        <Route path="/life-at-nxtvision" element={<Careers />} />
        <Route path="/talent-development" element={<Careers />} />
        <Route path="/current-openings" element={<Careers />} />
        <Route path="/services" element={<ServicesOverview />} />
        <Route path="/network-planning" element={<Services />} />
        <Route path="/network-integration" element={<Services />} />
        <Route path="/osp-fiber" element={<Services />} />
        <Route path="/data-center" element={<Services />} />
        <Route path="/staffing" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/why-startech" element={<WhyStartech />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
