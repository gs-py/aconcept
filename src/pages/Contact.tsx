import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24 text-center max-w-4xl mx-auto"
        >
          <span className="eyebrow mb-6">Contact Us</span>
          <h1 className="text-5xl md:text-7xl font-hero text-white mb-8">Let's Create Something Exceptional</h1>
          <p className="text-muted text-lg">
            Ready to start your next project? Reach out to us to discuss how we can bring your vision to life with uncompromising quality and design excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="field-label">Name</label>
                  <input type="text" className="field" placeholder="John Doe" />
                </div>
                <div>
                  <label className="field-label">Email</label>
                  <input type="email" className="field" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="field-label">Phone</label>
                  <input type="tel" className="field" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="field-label">Project Type</label>
                  <select className="field appearance-none">
                    <option>Residential Architecture</option>
                    <option>Commercial Interior</option>
                    <option>Hospitality</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="field-label">Message</label>
                <textarea className="field min-h-[150px] resize-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="button" className="btn btn-gold w-full justify-center mt-4">
                Send Inquiry
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-12"
          >
            <div>
              <h3 className="text-2xl font-hero text-white mb-6">Studio Address</h3>
              <p className="text-muted leading-relaxed">
                AConcept Studio<br />
                MG Road, Ernakulam<br />
                Kerala, India 682016
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-hero text-white mb-6">Contact Info</h3>
              <p className="text-muted leading-relaxed flex flex-col gap-2">
                <a href="mailto:hello@aconcept.studio" className="hover:text-accent transition-colors">hello@aconcept.studio</a>
                <a href="tel:+919876543210" className="hover:text-accent transition-colors">+91 98765 43210</a>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-hero text-white mb-6">Connect</h3>
              <div className="flex gap-4">
                <a href="#" className="nav-link">Instagram</a>
                <a href="#" className="nav-link">LinkedIn</a>
                <a href="#" className="nav-link">Pinterest</a>
              </div>
            </div>

            <div className="mt-auto pt-8">
               <button className="btn btn-outline-light w-full justify-center flex items-center gap-3">
                 Chat on WhatsApp
               </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
