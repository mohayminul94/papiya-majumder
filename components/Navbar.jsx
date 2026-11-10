'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  Download, 
  Globe2, 
  Sparkles,
  ArrowUpRight 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { portfolioData } from '@/data/portfolioData';

export default function Navbar({ onOpenCv }) {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme, mounted } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: portfolioData.nav.home, href: '#home' },
    { name: portfolioData.nav.about, href: '#about' },
    { name: portfolioData.nav.expertise, href: '#expertise' },
    { name: portfolioData.nav.experience, href: '#experience' },
    { name: portfolioData.nav.certifications, href: '#certifications' },
    { name: portfolioData.nav.achievements, href: '#achievements' },
    { name: portfolioData.nav.industries, href: '#industries' },
    { name: portfolioData.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-nav shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link 
            href="#home" 
            className="group flex items-center space-x-2.5 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 via-purple-600 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white leading-tight">
                {t(portfolioData.personal.name)}
              </span>
              <span className="text-[11px] font-medium tracking-wide text-purple-600 dark:text-purple-400 flex items-center gap-1">
                <span>The PPC Queen</span>
                <span className="w-1 h-1 rounded-full bg-purple-500"></span>
                <span>Google Ads</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50/50 dark:hover:bg-purple-950/30 rounded-lg transition-colors"
              >
                {t(link.name)}
              </a>
            ))}
          </nav>

          {/* Action Utilities (Language, Theme, CV Button) */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200/80 dark:border-slate-700"
              title="Switch Language / ভাষা পরিবর্তন করুন"
              aria-label="Switch Language"
            >
              <Globe2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>{language === 'en' ? 'বাংলা' : 'EN'}</span>
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200/80 dark:border-slate-700"
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              {mounted && theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-purple-600" />
              )}
            </button>

            {/* Download CV CTA */}
            <button
              onClick={onOpenCv}
              className="inline-flex items-center space-x-2 px-4 py-2 text-xs lg:text-sm font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-md shadow-purple-600/20 hover:shadow-purple-600/35 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              <span>{t(portfolioData.nav.downloadCv)}</span>
            </button>
          </div>

          {/* Mobile Menu & Utility Buttons */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
            >
              {language === 'en' ? 'বাংলা' : 'EN'}
            </button>

            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
              aria-label="Toggle Theme"
            >
              {mounted && theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-purple-600" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {t(link.name)}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-purple-600 text-white font-semibold text-sm shadow-md shadow-purple-600/20"
            >
              <Download className="w-4 h-4" />
              <span>{t(portfolioData.nav.downloadCv)}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
