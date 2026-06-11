import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, m } from "framer-motion";
import { CheckCircle2, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import { EASE_OUT_EXPO, slideInLeft, slideInRight, viewportOnce } from "../../lib/motion";

const PROJECT_TYPES = [
  "Residential",
  "Commercial",
  "Interior Design",
  "Hospitality",
  "Renovation",
  "Consultation",
];

const BUDGET_RANGES = [
  "Under $100k",
  "$100k – $500k",
  "$500k – $1M",
  "$1M – $5M",
  "$5M+",
];

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number"),
  projectType: z.string().min(1, "Select a project type"),
  budget: z.string().min(1, "Select a budget range"),
  message: z
    .string()
    .min(20, "Tell us a little more about your project — at least 20 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    label: "Studio",
    value: "12 Atelier Row, Design District, Mumbai 400001",
  },
  { icon: Phone, label: "Phone", value: "+91 98200 00000" },
  { icon: Mail, label: "Email", value: "studio@aconcept.design" },
  { icon: Clock, label: "Hours", value: "Mon – Fri · 9:30 — 18:30 IST" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { projectType: "", budget: "" },
  });

  const onSubmit = async (_data: ContactForm) => {
    // Simulated submission — replace with API call when backend is wired.
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-pad">
      <div className="container-site">
        <SectionHeading
          eyebrow="Contact"
          title="Start the Conversation"
          description="Tell us about your project. A principal will respond within one business day."
        />

        <div className="grid gap-14 lg:grid-cols-5 lg:gap-20">
          {/* Studio details */}
          <m.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-2"
          >
            <ul className="space-y-8">
              {CONTACT_DETAILS.map((detail) => (
                <li key={detail.label} className="flex gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-accent/40">
                    <detail.icon
                      size={18}
                      strokeWidth={1.25}
                      className="text-accent"
                      aria-hidden
                    />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                      {detail.label}
                    </p>
                    <p className="mt-1 text-sm text-ink">{detail.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Illustrated location mark */}
            <div className="relative mt-12 flex aspect-[4/3] items-center justify-center overflow-hidden border border-primary/10 bg-surface">
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
                aria-hidden
              />
              <div className="relative flex flex-col items-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                  <MapPin size={22} className="text-accent" aria-hidden />
                </span>
                <p className="mt-4 font-display text-lg text-primary">
                  Design District, Mumbai
                </p>
                <p className="text-xs font-light tracking-[0.15em] text-muted">
                  18.9582° N · 72.8321° E
                </p>
              </div>
            </div>
          </m.div>

          {/* Form */}
          <m.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <m.div
                  key="success"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
                  className="flex h-full min-h-80 flex-col items-center justify-center border border-accent/30 bg-surface p-12 text-center"
                  role="status"
                >
                  <CheckCircle2 size={44} strokeWidth={1.25} className="text-accent" />
                  <h3 className="mt-6 font-display text-2xl text-primary">
                    Thank you — message received.
                  </h3>
                  <p className="mt-3 max-w-sm text-sm font-light text-muted">
                    A principal from our studio will be in touch within one
                    business day to schedule your consultation.
                  </p>
                </m.div>
              ) : (
                <m.form
                  key="form"
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="grid gap-6 sm:grid-cols-2"
                >
                  <div>
                    <label htmlFor="contact-name" className="field-label">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      className="field"
                      aria-invalid={!!errors.name}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="field-error" role="alert">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="field-label">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="field"
                      aria-invalid={!!errors.email}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="field-error" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="field-label">
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 ..."
                      className="field"
                      aria-invalid={!!errors.phone}
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="field-error" role="alert">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-project-type" className="field-label">
                      Project Type
                    </label>
                    <select
                      id="contact-project-type"
                      className="field"
                      aria-invalid={!!errors.projectType}
                      {...register("projectType")}
                    >
                      <option value="" disabled>
                        Select project type
                      </option>
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p className="field-error" role="alert">
                        {errors.projectType.message}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="contact-budget" className="field-label">
                      Budget Range
                    </label>
                    <select
                      id="contact-budget"
                      className="field"
                      aria-invalid={!!errors.budget}
                      {...register("budget")}
                    >
                      <option value="" disabled>
                        Select budget range
                      </option>
                      {BUDGET_RANGES.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="field-error" role="alert">
                        {errors.budget.message}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="contact-message" className="field-label">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Tell us about your site, your ambitions, and your timeline."
                      className="field resize-y"
                      aria-invalid={!!errors.message}
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="field-error" role="alert">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-ink disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending…
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </m.form>
              )}
            </AnimatePresence>
          </m.div>
        </div>
      </div>
    </section>
  );
}
