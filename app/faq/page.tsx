'use client';
import React,{ useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronDown, HelpCircle, CheckCircle2, Wrench, Clock, Mail, Shield, Hammer, CreditCard, Palette, AlertTriangle } from 'lucide-react';

type FAQ = { id: number; icon: React.ReactNode; question: string; answer: string };

const faqData: FAQ[] = [
  {
    id: 1,
    icon: <Wrench className="w-5 h-5" />,
    question: 'What types of metal fabrication services do you offer?',
    answer:
      'We offer gates, railings welding, structural fabrication, sheet metal work, pipe fitting, industrial equipment manufacturing, and repairs.',
  },
  {
    id: 2,
    icon: <Clock className="w-5 h-5" />,
    question: 'How long does a typical fabrication project take?',
    answer:
      'Timelines vary: Simple gates/railings take 3–7 days, while complex industrial projects can take 2–6 weeks. We’ll give you a detailed schedule upfront.',
  },
  {
    id: 3,
    icon: <Mail className="w-5 h-5" />,
    question: 'Do you provide free estimates?',
    answer:
      'Yes, we provide free, detailed quotes that include materials, labor, and timelines. No hidden costs.',
  },
  {
    id: 4,
    icon: <Shield className="w-5 h-5" />,
    question: 'What quality standards do you follow?',
    answer:
      'We follow strict industry protocols. Certified welders, high-grade materials, full inspections, and warranties on all workmanship.',
  },
  {
    id: 5,
    icon: <Hammer className="w-5 h-5" />,
    question: 'Do you offer installation services?',
    answer:
      'Yes, our team provides complete site preparation, installation, and post-installation support.',
  },
  {
    id: 6,
    icon: <CreditCard className="w-5 h-5" />,
    question: 'What payment methods do you accept?',
    answer:
      'We accept cash, bank transfers, checks, and digital payments.',
  },
  {
    id: 7,
    icon: <Palette className="w-5 h-5" />,
    question: 'Can you work with custom designs?',
    answer:
      'Absolutely! We specialize in custom fabrication based on drawings, sketches, or ideas, ensuring structural integrity and aesthetics.',
  },
  {
    id: 8,
    icon: <AlertTriangle className="w-5 h-5" />,
    question: 'Do you provide emergency repair services?',
    answer:
      'Yes, we handle urgent repairs for gates, railings, and industrial equipment with same-day or next-day service.',
  },
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 relative">
        <div className="max-w-7xl mx-auto px-3 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-lg text-slate-200 max-w-xl mx-auto mb-6 leading-tight">
            Find answers about our services, timelines, and policies. Contact us if you need more help.
          </p>
          <div className="flex items-center justify-center gap-2 text-white text-base font-semibold">
            <HelpCircle className="text-amber-400 w-5" /> Reliable Support, Clear Answers
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="bg-white/95 border border-amber-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="flex justify-between w-full items-center text-left"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <span className="bg-amber-100 text-amber-600 p-2 rounded-lg shadow">{faq.icon}</span>
                  <h3 className="md:text-lg font-semibold text-slate-800">{faq.question}</h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 transition-transform ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openId === faq.id && (
                <p className="mt-4 text-slate-600 leading-relaxed md:pl-14">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mx-4 max-w-3xl md:mx-auto mt-16 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 p-10 rounded-3xl shadow-lg text-center">
          <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-slate-800" />
          <h3 className="text-3xl font-bold mb-3">Still Have Questions?</h3>
          <p className="text-lg mb-6">Reach out to our team—we’ll assist you with personalized solutions.</p>
          <a
            href="/contact"
            className="inline-block bg-slate-900 text-white px-6 py-3 rounded-xl shadow hover:bg-slate-800 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
