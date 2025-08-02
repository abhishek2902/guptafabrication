'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  Flame, X, Phone, Mail, MapPin, Clock, Edit, Send, ArrowRight, CheckCircle
} from 'lucide-react';
import { send, init } from '@emailjs/browser';
import CopyButton from './CopyButton';

init('caTCTDLOqbGRaNxy7');

export default function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) onClose();
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Escape key to close
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) onClose();
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    let fieldErrors: { name?: string; phone?: string } = {};

    if (!formData.name.trim()) fieldErrors.name = "Name is required";
    if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, "")))
      fieldErrors.phone = "Enter a valid 10-digit phone number";

    if (Object.keys(fieldErrors).length) {
      setErrors(fieldErrors);
      return;
    }

    setStatus('sending');
    try {
      await send('service_plnlpmj', 'template_mv5msbp', {
        name: formData.name,
        phone: formData.phone,
        to_email: 'abhishekkumargupta20082000@gmail.com',
      });
      setStatus('sent');
      setFormData({ name: '', phone: '' });
      setTimeout(() => {
        setStatus('idle');
        // onClose();
      }, 2000);
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 2000);
    }
  };

  const getButtonLabel = () => {
    switch (status) {
      case "sending": return "Sending...";
      case "sent": return "We will contact you soon.";
      case "error": return "Error ❌";
      default: return "Send My Request";
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto">
      <div
        ref={modalRef}
        className="relative max-w-md w-full bg-white bg-opacity-95 rounded-2xl shadow-2xl border border-amber-400 p-6 mx-auto my-8"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3 text-amber-500">
            <div className="p-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg text-white">
              <Flame size={28} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Premium Welding</h2>
              <p className="text-sm text-amber-700">Professional Services</p>
            </div>
          </div>
          <button
            className="p-2 rounded-full hover:bg-amber-500/20 transition"
            onClick={onClose}
          >
            <X size={24} className="text-amber-600" />
          </button>
        </div>

        <div className="overflow-hidden my-4 rounded-xl border border-amber-200 bg-amber-50 flex justify-center items-center">
          <img
            src="/gfcard.jpg"
            alt="Gupta Fabrication Shop Card"
            className="w-full max-w-xs object-cover"
          />
        </div>

        {/* Contact Info */}
				<div className="space-y-4 mb-6 hidden md:block">
					{/* Phone */}
					<div className="flex items-center gap-3 p-3 rounded-xl border bg-gradient-to-r from-amber-50 to-yellow-50">
						<div className="p-2 rounded-lg bg-gradient-to-r from-amber-400 to-yellow-500 text-white">
							<Phone size={16} />
						</div>
						<div className="flex-1 flex items-center justify-between">
							<a
								href="tel:+919340059307"
								className="font-semibold text-slate-900 hover:underline"
							>
								+91 9340059307
							</a>
							<CopyButton text="+91 9340059307" />
						</div>
					</div>

					{/* Email */}
					<div className="flex items-center gap-3 p-3 rounded-xl border bg-gradient-to-r from-blue-50 to-blue-100">
						<div className="p-2 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white">
							<Mail size={16} />
						</div>
						<div className="flex-1 flex items-center justify-between">
							<a
								href="mailto:guptafabrication@gmail.com"
								className="font-semibold text-slate-900 hover:underline"
							>
								guptafabrication@gmail.com
							</a>
							<CopyButton text="arumsteels@gmail.com" />
						</div>
					</div>

					{/* Location & Hours */}
					<div className="grid grid-cols-2 gap-3">
						<ContactMiniItem
							icon={<MapPin className="text-amber-600" size={16} />}
							text="123 Industrial Area"
						/>
						<ContactMiniItem
							icon={<Clock className="text-amber-600" size={16} />}
							text="Mon-Fri: 7AM-6PM"
						/>
					</div>
				</div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <FormField
            id="name"
            label="Full Name *"
            icon={<Edit className="text-amber-500" size={16} />}
            value={formData.name}
            error={errors.name}
            onChange={handleChange}
          />
          <FormField
            id="phone"
            label="Phone Number *"
            icon={<Phone className="text-amber-500" size={16} />}
            value={formData.phone}
            error={errors.phone}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className={`w-full flex justify-center items-center gap-3 rounded-xl px-6 py-3 font-bold text-slate-900 transition-transform transform hover:scale-105 shadow-lg ${
              status === 'sending'
                ? 'bg-amber-300 cursor-not-allowed'
                : 'bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600'
            }`}
          >
            {status === "sending" ? <Send className="animate-spin" size={20} /> : <Send size={20} />}
            <span>{getButtonLabel()}</span>
            {status === 'idle' && <ArrowRight size={20} />}
          </button>
        </form>

        {status === 'sent' && (
          <div className="absolute bottom-2 left-10 mt-4 flex gap-3 items-center p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 shadow">
            <CheckCircle size={24} />
            <div>
              <p className="font-semibold">Message sent successfully!</p>
              <p className="text-sm">We'll contact you within 24 hours.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ContactItem({ icon, title, subtitle, bgGradient, containerGradient }: any) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-xl border bg-gradient-to-r ${containerGradient}`}>
      <div className={`p-2 rounded-lg bg-gradient-to-r ${bgGradient} text-white`}>{icon}</div>
      <div>
        <p className="font-semibold text-slate-900">{title}</p>
        {subtitle && <p className="text-sm text-slate-700">{subtitle}</p>}
      </div>
    </div>
  );
}

function ContactMiniItem({ icon, text }: any) {
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-lg text-slate-900 text-sm">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function FormField({ id, label, icon, value, error, onChange }: any) {
  return (
    <div>
      <label htmlFor={id} className="block mb-1 font-semibold text-slate-800 flex items-center gap-2">
        {icon} {label}
      </label>
      <input
        id={id}
        name={id}
        type="text"
        required
        value={value}
        onChange={onChange}
        placeholder={`Enter your ${id}`}
        className="w-full rounded-xl border-2 border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition bg-gray-50"
      />
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
}
