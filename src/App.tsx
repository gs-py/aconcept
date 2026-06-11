import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollManager from "./components/layout/ScrollManager";
import AnimatedRoutes from "./components/layout/PageTransition";

export default function App() {
  return (
    <HelmetProvider>
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
          <BrowserRouter>
            <ScrollManager />
            <Navbar />
            <main>
              <AnimatedRoutes />
            </main>
            <Footer />
          </BrowserRouter>
        </MotionConfig>
      </LazyMotion>
    </HelmetProvider>
  );
}
