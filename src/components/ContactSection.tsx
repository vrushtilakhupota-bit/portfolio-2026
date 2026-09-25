import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { Mail, Copy, Check, ArrowUpRight, Send, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleOrProject: '',
    message: '',
  });
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${formData.name || 'Hiring Manager'}: ${formData.roleOrProject || 'UI/UX Role'}`
    );
    const body = encodeURIComponent(
      `Hi Vrushti,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})\nRole/Opportunity: ${formData.roleOrProject}`
    );
    window.location.href = `mailto:${DESIGNER_INFO.email}?subject=${subject}&body=${body}`;
    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 4000);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-[#141413] text-[#FAF7F3] scroll-mt-20"
      aria-label="Contact Section"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Invitation */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#E8A598] mb-3">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Let's Build Something Great</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF7F3] leading-tight">
                Making digital experiences feel{' '}
                <span className="font-serif italic font-normal text-[#E8DCC4]">
                  effortless.
                </span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#B5B0A6] leading-relaxed max-w-xl">
              I am actively seeking my first full-time UI/UX Designer role.
              Whether you have an open position, an exciting product challenge, or just want to chat about design craft — my inbox is always open.
            </p>

            {/* Quick Email Copy Box */}
            <div className="p-5 rounded-2xl bg-[#20201E] border border-[#33312E] space-y-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#8C8880] block">
                Direct Email Address
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <a
                  href={`mailto:${DESIGNER_INFO.email}`}
                  className="text-base sm:text-lg font-mono text-[#FAF7F3] hover:text-[#E8A598] transition-colors truncate"
                >
                  {DESIGNER_INFO.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#2E2D2A] hover:bg-[#3D3B37] text-xs font-medium text-[#FAF7F3] transition-colors self-start sm:self-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A598]"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#B5B0A6]" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social / Profile Links */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-sm">
              <a
                href={DESIGNER_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#B5B0A6] hover:text-[#FAF7F3] transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <span aria-hidden="true" className="text-[#3D3B37]">·</span>

              <a
                href={DESIGNER_INFO.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#B5B0A6] hover:text-[#FAF7F3] transition-colors"
              >
                <span>Behance</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <span aria-hidden="true" className="text-[#3D3B37]">·</span>

              <span className="text-xs text-[#8C8880]">Ahmedabad, India · UTC+5:30</span>
            </div>
          </div>

          {/* Right Column: Quick Contact Note Form */}
          <div className="lg:col-span-6 bg-[#1C1C1A] border border-[#2F2E2B] rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-[#FAF7F3] mb-1">
              Send a Quick Message
            </h3>
            <p className="text-xs text-[#8C8880] mb-6">
              Sends directly to vrushtilakhupota@gmail.com
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-wider font-semibold text-[#8C8880] mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="e.g. Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#262523] border border-[#3A3834] text-sm text-[#FAF7F3] placeholder-[#66635C] focus:outline-none focus:border-[#E8A598]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-[#8C8880] mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#262523] border border-[#3A3834] text-sm text-[#FAF7F3] placeholder-[#66635C] focus:outline-none focus:border-[#E8A598]"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-xs uppercase tracking-wider font-semibold text-[#8C8880] mb-1.5">
                  Opportunity or Role
                </label>
                <input
                  type="text"
                  id="role"
                  placeholder="e.g. Junior UI/UX Designer role / Design discussion"
                  value={formData.roleOrProject}
                  onChange={(e) => setFormData({ ...formData, roleOrProject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#262523] border border-[#3A3834] text-sm text-[#FAF7F3] placeholder-[#66635C] focus:outline-none focus:border-[#E8A598]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider font-semibold text-[#8C8880] mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={3}
                  placeholder="Tell me a bit about what you're working on..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#262523] border border-[#3A3834] text-sm text-[#FAF7F3] placeholder-[#66635C] focus:outline-none focus:border-[#E8A598] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#FAF7F3] hover:bg-[#EAE4DC] text-[#141413] text-sm font-semibold transition-all duration-200 active:scale-[0.99] shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Send className="w-4 h-4" />
                <span>Open Mail Client</span>
              </button>

              {sentNotice && (
                <p className="text-xs text-emerald-400 text-center font-medium mt-2">
                  Mail composer opened! Looking forward to connecting.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
