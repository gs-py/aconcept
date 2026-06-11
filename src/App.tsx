import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollManager from "./components/layout/ScrollManager";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <HelmetProvider>
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
          <BrowserRouter>
            <ScrollManager />
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </MotionConfig>
      </LazyMotion>
    </HelmetProvider>
  );
}
