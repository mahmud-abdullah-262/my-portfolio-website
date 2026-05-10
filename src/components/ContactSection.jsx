// components/ContactSection.jsx
// Stack: Next.js + Tailwind CSS + HeroUI + EmailJS
// Theme: Terminal / Dark — matches previous sections

"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const EMAILJS_SERVICE_ID = "service_8u93txt";
const EMAILJS_TEMPLATE_ID = "template_6bam81u";
const EMAILJS_PUBLIC_KEY = "8u-v09K3qT4LQvVWX";

const contactInfo = [
  {
    label: "Email",
    value: "citclassmahmud@gmail.com",
    href: "mailto:citclassmahmud@gmail.com",
    icon: "✉",
    note: "Reply within 24hrs",
    color: "#00E676",
  },
  {
    label: "WhatsApp",
    value: "+880 1683 367535",
    href: "https://wa.me/8801683367535",
    icon: "💬",
    note: "Reply within 1–3hrs",
    color: "#25D366",
  },
  {
    label: "LinkedIn",
    value: "mahmud-abdullah-webdev",
    href: "https://www.linkedin.com/in/mahmud-abdullah-webdev/",
    icon: "◈",
    note: "Let's connect",
    color: "#0A66C2",
  },
  {
    label: "Facebook",
    value: "abdullahalmahmud1997",
    href: "https://www.facebook.com/abdullahalmahmud1997",
    icon: "◉",
    note: "Say hello",
    color: "#1877F2",
  },
];

const availability = [
  { label: "Full-time", active: true },
  { label: "Freelance", active: true },
  { label: "Intern", active: true },
];

export default function ContactSection() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ from_name: "", from_email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-[#0f0f0d] py-24 px-6 md:px-16 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[#00E676] text-sm">›_</span>
          <span className="font-mono text-xs text-[#00E676]/50 tracking-widest uppercase">
            contact.me
          </span>
          <div className="flex-1 h-px bg-[#00E676]/10" />
        </div>

        {/* Heading */}
        <div className="w-11/12 mx-auto mb-14">
          <h2 className="font-mono text-3xl md:text-4xl font-black text-white">
            Let&apos;s Work{" "}
            <span className="text-[#00E676]">Together</span>
          </h2>
          <p className="font-mono text-sm text-[#8a9a8e] mt-2">
            // I&apos;m just one message away
          </p>
        </div>

        <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ── LEFT: Info ── */}
          <div className="flex flex-col gap-6">

            {/* Availability */}
            <div
              className="p-4 rounded-sm border border-[#00E676]/15 bg-[#00E676]/[0.03]"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
                <span className="font-mono text-xs text-[#00E676]/70 tracking-widest uppercase">
                  currently available for
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {availability.map((item) => (
                  <span
                    key={item.label}
                    className="font-mono text-xs px-3 py-1 rounded-sm border border-[#00E676]/25 text-[#00E676] bg-[#00E676]/08"
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 px-1">
              <span className="text-[#00E676]/60 text-sm">◎</span>
              <span className="font-mono text-sm text-[#8a9a8e]">
                Dhaka, Bangladesh
              </span>
            </div>

            {/* Contact cards */}
            <div className="flex flex-col gap-3">
              {contactInfo.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-sm border transition-all duration-300 hover:translate-x-1"
                  style={{
                    borderColor: `${item.color}15`,
                    background: `${item.color}05`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${item.color}40`;
                    e.currentTarget.style.background = `${item.color}10`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${item.color}15`;
                    e.currentTarget.style.background = `${item.color}05`;
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 text-base"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}25`,
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-[10px] text-[#8a9a8e]/50 uppercase tracking-widest">
                      {item.label}
                    </p>
                    <p
                      className="font-mono text-sm font-semibold truncate"
                      style={{ color: item.color }}
                    >
                      {item.value}
                    </p>
                  </div>

                  {/* Note */}
                  <span className="font-mono text-[10px] text-[#8a9a8e]/40 flex-shrink-0 hidden sm:block">
                    {item.note}
                  </span>

                  {/* Arrow */}
                  <span
                    className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                    style={{ color: item.color }}
                  >
                    ↗
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-[#00E676]/50 tracking-widest uppercase">
                  // your name
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  placeholder="Abdullah Al Mahmud"
                  className="w-full bg-[#1a1a18] border border-[#00E676]/15 rounded-sm px-4 py-3 font-mono text-sm text-white placeholder:text-[#8a9a8e]/30 focus:outline-none focus:border-[#00E676]/50 transition-colors duration-200"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-[#00E676]/50 tracking-widest uppercase">
                  // your email
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full bg-[#1a1a18] border border-[#00E676]/15 rounded-sm px-4 py-3 font-mono text-sm text-white placeholder:text-[#8a9a8e]/30 focus:outline-none focus:border-[#00E676]/50 transition-colors duration-200"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-[#00E676]/50 tracking-widest uppercase">
                  // message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Hi Abdullah, I'd like to work with you on..."
                  className="w-full bg-[#1a1a18] border border-[#00E676]/15 rounded-sm px-4 py-3 font-mono text-sm text-white placeholder:text-[#8a9a8e]/30 focus:outline-none focus:border-[#00E676]/50 transition-colors duration-200 resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 rounded-sm font-mono font-bold text-sm tracking-wide transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: status === "sending" ? "#00E67640" : "#00E676",
                  color: "#0a1f10",
                }}
              >
                {status === "sending" ? "// sending..." : "Send Message ↗"}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 p-3 rounded-sm border border-[#00E676]/30 bg-[#00E676]/08">
                  <span className="text-[#00E676]">✔</span>
                  <span className="font-mono text-xs text-[#00E676]">
                    Message sent! I&apos;ll get back to you soon.
                  </span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 p-3 rounded-sm border border-red-500/30 bg-red-500/08">
                  <span className="text-red-400">✖</span>
                  <span className="font-mono text-xs text-red-400">
                    Something went wrong. Try emailing directly.
                  </span>
                </div>
              )}

              {/* Terminal prompt */}
              <p className="font-mono text-[10px] text-[#8a9a8e]/30 mt-1">
                <span className="text-[#00E676]/40">~/contact</span> — all fields required
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
