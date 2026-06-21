import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, MessageCircle } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const PROJECT_TYPES = [
  "Residential Architecture",
  "Commercial Interior",
  "Hospitality",
  "Other",
];

export const Contact = () => {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="container-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="max-w-3xl mb-16 md:mb-24"
        >
          <span className="eyebrow mb-6">Contact Us</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-hero text-white leading-[1.05] mb-6">
            Let's Create Something Exceptional
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Ready to start your next project? Reach out to discuss how we can bring your vision to
            life with uncompromising quality and design excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="lg:col-span-7 border border-white/10 bg-surface/40 p-8 md:p-12"
          >
            <h2 className="text-2xl font-hero text-white mb-8">Send an Inquiry</h2>
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
                  <select className="field appearance-none cursor-pointer">
                    {PROJECT_TYPES.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="field-label">Message</label>
                <textarea
                  className="field min-h-[160px] resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button type="button" className="btn btn-gold w-full mt-2">
                Send Inquiry
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="flex flex-col divide-y divide-white/10 border border-white/10">
              <InfoRow icon={<MapPin size={20} strokeWidth={1.5} />} title="Studio Address">
                AConcept Studio
                <br />
                MG Road, Ernakulam
                <br />
                Kerala, India 682016
              </InfoRow>

              <InfoRow icon={<Mail size={20} strokeWidth={1.5} />} title="Email">
                <a
                  href="mailto:hello@aconcept.studio"
                  className="hover:text-accent transition-colors"
                >
                  hello@aconcept.studio
                </a>
              </InfoRow>

              <InfoRow icon={<Phone size={20} strokeWidth={1.5} />} title="Phone">
                <a href="tel:+919876543210" className="hover:text-accent transition-colors">
                  +91 98765 43210
                </a>
              </InfoRow>

              <InfoRow icon={<Clock size={20} strokeWidth={1.5} />} title="Working Hours">
                Mon – Sat: 9:30 AM – 6:30 PM
                <br />
                Sunday: Closed
              </InfoRow>
            </div>

            {/* Connect */}
            <div className="mt-10">
              <h3 className="field-label">Connect</h3>
              <div className="flex gap-6">
                <a href="#" className="nav-link">Instagram</a>
                <a href="#" className="nav-link">LinkedIn</a>
                <a href="#" className="nav-link">Pinterest</a>
              </div>
            </div>

            <button className="btn btn-outline-light w-full mt-8">
              <MessageCircle size={18} strokeWidth={1.5} />
              Chat on WhatsApp
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex gap-5 p-6 md:p-8">
    <div className="text-accent shrink-0 mt-1">{icon}</div>
    <div>
      <h3 className="text-xs uppercase tracking-[0.15em] text-muted mb-2">{title}</h3>
      <p className="text-white leading-relaxed">{children}</p>
    </div>
  </div>
);
