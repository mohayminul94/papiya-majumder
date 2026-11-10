'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Heart, Globe, ExternalLink } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer({ onOpenCv }) {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100 dark:border-slate-900">
          
          {/* Col 1: Personal Branding */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-purple-600 text-white font-bold text-sm flex items-center justify-center">
                P
              </div>
              <span className="text-base font-bold text-slate-900 dark:text-white">
                {t(portfolioData.personal.name)}
              </span>
            </div>

            <p className="text-purple-600 dark:text-purple-400 font-semibold text-xs">
              {portfolioData.personal.brandTitle} • Digital Marketing Manager
            </p>

            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              {t(portfolioData.footer.tagline)}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              {language === 'bn' ? 'দ্রুত লিঙ্ক' : 'Quick Navigation'}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#home" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                {t(portfolioData.nav.home)}
              </a>
              <a href="#about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                {t(portfolioData.nav.about)}
              </a>
              <a href="#expertise" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                {t(portfolioData.nav.expertise)}
              </a>
              <a href="#experience" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                {t(portfolioData.nav.experience)}
              </a>
              <a href="#certifications" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                {t(portfolioData.nav.certifications)}
              </a>
              <a href="#achievements" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                {t(portfolioData.nav.achievements)}
              </a>
              <a href="#industries" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                {t(portfolioData.nav.industries)}
              </a>
              <a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                {t(portfolioData.nav.contact)}
              </a>
            </div>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
              {language === 'bn' ? 'অফিসিয়াল চ্যানেল' : 'Official Channels'}
            </h4>
            
            <div className="space-y-1.5 text-xs">
              <div>
                <span className="text-slate-400">Email: </span>
                <a href={`mailto:${portfolioData.personal.email}`} className="font-medium text-slate-800 dark:text-slate-200 hover:text-purple-600">
                  {portfolioData.personal.email}
                </a>
              </div>
              <div>
                <span className="text-slate-400">Phone: </span>
                <a href={`tel:${portfolioData.personal.phone}`} className="font-medium text-slate-800 dark:text-slate-200 hover:text-purple-600">
                  {portfolioData.personal.phone}
                </a>
              </div>
              <div>
                <span className="text-slate-400">Web: </span>
                <a href={portfolioData.personal.website} target="_blank" rel="noopener noreferrer" className="font-medium text-purple-600 hover:underline">
                  theppcqueen.com
                </a>
              </div>
            </div>

            <button
              onClick={onOpenCv}
              className="mt-2 inline-flex items-center space-x-1.5 text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline"
            >
              <span>{t(portfolioData.nav.downloadCv)}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <div>
            © {new Date().getFullYear()} {t(portfolioData.personal.name)}. {t(portfolioData.footer.rights)}
          </div>

          <div className="flex items-center space-x-6">
            <span>{t(portfolioData.footer.designedWith)}</span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-950/60 hover:text-purple-600 dark:hover:text-purple-400 transition-colors border border-slate-200 dark:border-slate-800"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{t(portfolioData.footer.backToTop)}</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
