import { Link } from "react-router";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 mix-blend-difference text-white"
    >
      <div className="text-xl font-hero tracking-wider">
        <Link to="/">ACONCEPT</Link>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
      
      <button className="md:hidden text-sm uppercase tracking-widest">
        Menu
      </button>
    </motion.header>
  );
};
