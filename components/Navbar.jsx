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
  Sparkles
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { portfolioData } from '@/data/portfolioData';

export default function Navbar({ onOpenCv }) {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme, mounted } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', name: portfolioData.nav.home, href: '#home' },
    { id: 'about', name: portfolioData.nav.about, href: '#about' },
    { id: 'expertise', name: portfolioData.nav.expertise, href: '#expertise' },
    { id: 'experience', name: portfolioData.nav.experience, href: '#experience' },
    { id: 'certifications', name: portfolioData.nav.certifications, href: '#certifications' },
    { id: 'achievements', name: portfolioData.nav.achievements, href: '#achievements' },
    { id: 'industries', name: portfolioData.nav.industries, href: '#industries' },
    { id: 'contact', name: portfolioData.nav.contact, href: '#contact' },
  ];

  // Scroll detection for sticky style and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = navLinks.map(link => link.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-nav shadow-sm py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo: Stylized "Nilima." with elegant accent dot */}
          <Link 
            href="#home" 
            onClick={() => setActiveSection('home')}
            className="group flex items-center focus:outline-none shrink-0"
          >
            <div className="relative flex items-center">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white transition-all duration-300 group-hover:tracking-normal">
                Nilima
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-indigo-500 ml-1 shadow-sm shadow-purple-500/50 group-hover:scale-125 transition-transform" />
            </div>
          </Link>

          {/* Centered Compact Navigation Bar */}
          <nav className="hidden lg:flex items-center justify-center mx-4">
            <div className="flex items-center space-x-1 p-1 rounded-full bg-slate-100/80 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/70 dark:border-slate-700/70 shadow-xs">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setActiveSection(link.id)}
                    className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-purple-600 via-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30 scale-[1.02]'
                        : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white/80 dark:hover:bg-slate-700/60'
                    }`}
                  >
                    {t(link.name)}
                  </a>
                );
              })}
            </div>
          </nav>

          {/* Action Utilities (Language, Theme, CV Button) */}
          <div className="hidden sm:flex items-center space-x-2.5 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-2.5 py-1 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200/80 dark:border-slate-700"
              title="Switch Language / ভাষা পরিবর্তন করুন"
              aria-label="Switch Language"
            >
              <Globe2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>{language === 'en' ? 'বাংলা' : 'EN'}</span>
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200/80 dark:border-slate-700"
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              {mounted && theme === 'dark' ? (
                <Sun className="w-3.5 h-3.5 text-amber-400" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-purple-600" />
              )}
            </button>

            {/* Download CV CTA */}
            <button
              onClick={onOpenCv}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-sm shadow-purple-600/20 hover:shadow-purple-600/35 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t(portfolioData.nav.downloadCv)}</span>
            </button>
          </div>

          {/* Mobile Menu & Utility Buttons */}
          <div className="flex lg:hidden items-center space-x-1.5">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
            >
              {language === 'en' ? 'বাংলা' : 'EN'}
            </button>

            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
              aria-label="Toggle Theme"
            >
              {mounted && theme === 'dark' ? (
                <Sun className="w-3.5 h-3.5 text-amber-400" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-purple-600" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-purple-600" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/25'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-600 dark:hover:text-purple-400'
                  }`}
                >
                  {t(link.name)}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-full bg-purple-600 text-white font-semibold text-xs shadow-md shadow-purple-600/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t(portfolioData.nav.downloadCv)}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
