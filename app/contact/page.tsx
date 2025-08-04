'use client';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Phone, Mail, MapPin, Clock, Check, Loader2, ArrowRight, Wrench, Handshake, User,
  X
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Helper: InfoCard for reusability
type InfoCardProps = {
  icon: React.ReactNode;
  color: string;
  title: string;
  value: string;
  desc?: string;
};

function InfoCard({ icon, color, title, value, desc }: InfoCardProps) {
  return (
    <div className="bg-white/90 p-6 rounded-2xl shadow-lg border border-amber-300 hover:shadow-2xl transition card-hover flex items-start gap-4">
      <span className={`p-4 rounded-xl text-white ${color} shadow`}>{icon}</span>
      <div className="flex-1">
        <h4 className="text-lg font-bold text-slate-900">{title}</h4>
        <div className="text-slate-700 font-medium">{value}</div>
        {desc && <div className="text-xs text-slate-500">{desc}</div>}
      </div>
    </div>
  );
}

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm('service_plnlpmj', 'template_mv5msbp', form.current!, 'caTCTDLOqbGRaNxy7');
      setStatus('sent');
      form.current?.reset();
      setTimeout(() => setStatus('idle'), 2000);
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 2000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      {/* Header */}
      <Navbar/>

      {/* Hero Section */}
      <section className='pt-40 relative'>
        <div className="max-w-7xl mx-auto px-3 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter drop-shadow">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Get in Touch
            </span> with the
            <span className="ml-2 font-black text-amber-400">Gupta Fabrication</span> team
          </h2>
          <p className="text-lg text-slate-200 max-w-xl mx-auto mb-8 leading-tight">
            Let&apos;s build something strong, beautiful, and reliable together. For expert metalwork, quotes, or questions, contact us now.
          </p>
          <div className="flex text-white flex-wrap justify-center gap-6 text-base font-semibold">
            <div className="flex items-center gap-2"><Phone className="text-amber-400 w-5" />Quick Response</div>
            <div className="flex items-center gap-2"><Wrench className="text-amber-400 w-5" />Expert Craftsmanship</div>
            <div className="flex items-center gap-2"><Handshake className="text-amber-400 w-5" />Trusted Service</div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14">
          {/* Info Col */}
          <div className="space-y-7">
            {/* Contact Cards */}
            <InfoCard icon={<Phone />} color="bg-blue-700" title="Phone Number" value="+91 9340059307" desc="Call Mon-Sat, 8AM-7PM" />
            <InfoCard icon={<Mail />} color="bg-teal-600" title="Email" value="arumsteels@gmail.com" desc="We&apos;ll respond within 24 hours" />
            <InfoCard icon={<MapPin />} color="bg-violet-600" title="Workshop" value="1HV54+4X8, Maihar Bypass Rd, Delaura,Utaily, Tikuria Tola, Satna, Madhya Pradesh" />
            <InfoCard icon={<Clock />} color="bg-gradient-to-r from-amber-500 to-yellow-600" title="Working Hours" value="Mon-Sat: 8AM-7PM | Sun: 10AM-4PM" />
            {/* Specialties */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-2xl border border-amber-100">
              <h4 className="text-lg font-bold text-slate-900 mb-3">Our Specialties</h4>
              <div className="grid grid-cols-2 gap-2">
                {["Custom Fabrication", "Welding Services", "Metal Cutting", "Gates & Railings", "Industrial Parts", "Structural Work"].map(txt =>
                  <div key={txt} className="flex items-center gap-2">
                    <Check className="text-amber-500 w-4" /> <span className="text-sm text-gray-800">{txt}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white/95 border border-amber-200 p-8 rounded-2xl shadow-xl card-hover">
            <div className="mb-6">
              <h3 className="text-2xl font-extrabold text-slate-800 mb-2">Send Us a Message</h3>
              <p className="text-slate-600">Fill out the form and we&apos;ll get back to you ASAP.</p>
            </div>
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block mb-1 font-bold text-slate-700">First Name *</label>
                  <input type="text" name="name" id="name" required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-amber-400 focus:border-amber-400 bg-gray-50 transition" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-1 font-bold text-slate-700">Last Name *</label>
                  <input type="text" name="lastName" id="lastName"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-amber-400 focus:border-amber-400 bg-gray-50 transition" />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1 font-bold text-slate-700">Phone Number *</label>
                <input type="tel" name="phone" id="phone" required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-amber-400 focus:border-amber-400 bg-gray-50 transition" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-bold text-slate-700">Email Address</label>
                <input type="email" name="email" id="email"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-amber-400 focus:border-amber-400 bg-gray-50 transition" />
              </div>
              <div>
                <label htmlFor="service" className="block mb-1 font-bold text-slate-700">Service Required</label>
                <select name="service" id="service"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-amber-400 focus:border-amber-400 bg-gray-50 transition">
                  <option>Select a service</option>
                  <option>Custom Fabrication</option>
                  <option>Welding</option>
                  <option>Cutting</option>
                  <option>Gates & Railings</option>
                  <option>Parts / Repair</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-bold text-slate-700">Project Details</label>
                <textarea name="message" id="message" rows={5}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-amber-400 focus:border-amber-400 bg-gray-50 transition resize-none" />
              </div>
              <button type="submit"
                disabled={status === 'sending'}
                className="w-full flex justify-center items-center gap-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-6 py-3 font-bold text-slate-900 hover:from-amber-600 hover:to-yellow-600 transition-transform transform hover:scale-105 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending'
                  ? <Loader2 className="animate-spin w-5" />
                  : <User className="w-5" />}
                <span>
                  {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Send Message'}
                </span>
                <ArrowRight className="w-5" />
              </button>
            </form>
            {/* Success/Error Alerts */}
            {status === 'sent' && (
              <div className="mt-5 flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 shadow-sm">
                <Check className="w-5" />
                <div>
                  <p className="font-semibold">Message Sent Successfully!</p>
                  <p className="text-sm">We&apos;ll get back to you within 24 hours.</p>
                </div>
              </div>
            )}
            {status === 'error' && (
              <div className="mt-5 flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 shadow-sm">
                <X className="w-5" />
                <div>
                  <p className="font-semibold">There was an error</p>
                  <p className="text-sm">Please try again or contact us directly.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Map / Location */}
      
			<section className="py-16 bg-slate-100">
				<div className="max-w-7xl mx-auto px-4 text-center">
					<h3 className="text-3xl font-bold text-slate-900 mb-4">Find Our Workshop</h3>
					<p className="text-slate-600 text-lg mb-4">Visit us at our equipped fabrication facility</p>
					<div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-6">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.9095997010504!2d80.85488267536115!3d24.55778587812809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39847f005c7d03a9%3A0x9a8f110e3da2d8e9!2sGupta%20Welding%20and%20fabrication%20satna!5e0!3m2!1sen!2sin!4v1754155477212!5m2!1sen!2sin"
							width="100%"
							height="410"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Gupta Fabrication Location Map"
						></iframe>
					</div>
					<div className="pt-4 text-center">
						<MapPin className="w-14 h-14 text-slate-400 mb-4 mx-auto" />
						<h4 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</h4>
						<p className="text-gray-500">1HV54+4X8, Maihar Bypass Rd, Delaura,Utaily, Tikuria Tola, Satna, Madhya Pradesh</p>
						<a className="mt-4 inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition"
								target="_blank" rel="noopener noreferrer"
								href="https://maps.app.goo.gl/U3YBpjDsh6dJPpy77">Get Directions</a>
					</div>
				</div>
			</section>
			<Footer/>
    </div>
  );
}
