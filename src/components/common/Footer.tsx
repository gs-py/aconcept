import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="bg-primary text-text-main pt-24 pb-12 border-t border-white/10">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-hero text-4xl mb-6">AConcept Studio</h2>
            <p className="text-muted max-w-sm mb-8">
              Crafting luxury spaces that define lifestyle through architecture, interior excellence, and human-centered thinking.
            </p>
            <div className="flex gap-4">
              <a href="#" className="nav-link">Instagram</a>
              <a href="#" className="nav-link">LinkedIn</a>
              <a href="#" className="nav-link">Pinterest</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-widest text-accent mb-6">Menu</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/projects" className="nav-link">Projects</Link></li>
              <li><Link to="/about" className="nav-link">About</Link></li>
              <li><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-accent mb-6">Contact</h4>
            <ul className="flex flex-col gap-4 text-muted">
              <li>Kerala, India</li>
              <li>hello@aconcept.studio</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} AConcept Studio. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
