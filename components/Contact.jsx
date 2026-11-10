'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  PhoneCall, 
  MapPin, 
  Globe, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import DynamicIcon from './IconHelper';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage(
        language === 'bn' 
          ? 'অনুগ্রহ করে নাম, ইমেইল এবং বার্তা পূরণ করুন।' 
          : 'Please provide your name, valid email, and project details.'
      );
      return;
    }

    setStatus('submitting');

    // Simulate reliable transmission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs font-semibold text-purple-700 dark:text-purple-300 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>{t(portfolioData.contact.badge)}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t(portfolioData.contact.title)}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            {t(portfolioData.contact.subtitle)}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info Cards & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {portfolioData.contact.infoCards.map((card, idx) => (
                <a
                  key={idx}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-purple-400 dark:hover:border-purple-600 transition-all flex items-start space-x-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-purple-50 dark:bg-purple-950/80 border border-purple-200/60 dark:border-purple-800/60 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
                    <DynamicIcon name={card.icon} className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs font-semibold text-slate-400">
                      {t(card.label)}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate mt-0.5 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {t(card.value)}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Connectivity Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                {language === 'bn' ? 'সোশ্যাল মিডিয়ায় সংযুক্ত থাকুন' : 'Connect on Professional Channels'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                {language === 'bn' 
                  ? 'গুগল অ্যাডস ইনসাইট এবং মার্কেটিং আপডেটের জন্য সংযুক্ত থাকুন।' 
                  : 'Follow along for campaign insights, PPC best practices, and direct messaging.'}
              </p>

              <div className="flex items-center space-x-3">
                <a
                  href={portfolioData.personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#0077b5]/10 hover:bg-[#0077b5] text-[#0077b5] hover:text-white font-semibold text-xs border border-[#0077b5]/30 transition-all flex items-center space-x-2"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={portfolioData.personal.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#1877f2]/10 hover:bg-[#1877f2] text-[#1877f2] hover:text-white font-semibold text-xs border border-[#1877f2]/30 transition-all flex items-center space-x-2"
                >
                  <span>Facebook</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={portfolioData.personal.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#e4405f]/10 hover:bg-[#e4405f] text-[#e4405f] hover:text-white font-semibold text-xs border border-[#e4405f]/30 transition-all flex items-center space-x-2"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl">
            
            {status === 'success' ? (
              <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {t(portfolioData.contact.form.successTitle)}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                  {t(portfolioData.contact.form.successDesc)}
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2.5 text-xs font-semibold rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                >
                  {language === 'bn' ? 'আরেকটি বার্তা পাঠান' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      {t(portfolioData.contact.form.nameLabel)} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t(portfolioData.contact.form.namePlaceholder)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm text-slate-900 dark:text-white placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      {t(portfolioData.contact.form.emailLabel)} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t(portfolioData.contact.form.emailPlaceholder)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm text-slate-900 dark:text-white placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      {t(portfolioData.contact.form.phoneLabel)}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t(portfolioData.contact.form.phonePlaceholder)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm text-slate-900 dark:text-white placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      {t(portfolioData.contact.form.subjectLabel)}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t(portfolioData.contact.form.subjectPlaceholder)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm text-slate-900 dark:text-white placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    {t(portfolioData.contact.form.messageLabel)} *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t(portfolioData.contact.form.messagePlaceholder)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 resize-y"
                  />
                </div>

                {status === 'error' && (
                  <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 text-xs flex items-center space-x-2 border border-red-200 dark:border-red-800">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-purple-600/25 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {status === 'submitting'
                      ? t(portfolioData.contact.form.submitting)
                      : t(portfolioData.contact.form.submitButton)}
                  </span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
