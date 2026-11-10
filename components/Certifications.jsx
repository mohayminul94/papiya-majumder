'use client';

import React from 'react';
import { Award, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';
import DynamicIcon from './IconHelper';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

export default function Certifications() {
  const { language, t } = useLanguage();

  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs font-semibold text-purple-700 dark:text-purple-300 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t(portfolioData.certifications.badge)}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t(portfolioData.certifications.title)}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            {t(portfolioData.certifications.subtitle)}
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.certifications.items.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/80 border border-purple-200/60 dark:border-purple-800/60 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
                    <DynamicIcon name={cert.icon} className="w-6 h-6" />
                  </div>

                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/70 dark:border-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{language === 'bn' ? 'যাচাইকৃত সনদ' : 'Verified Credential'}</span>
                  </span>
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-1">
                  {cert.issuer}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {t(cert.title)}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                  {t(cert.type)}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="text-[11px] font-semibold text-slate-400 mb-1.5">
                  {language === 'bn' ? 'অর্জিত মূল দক্ষতা:' : 'Key Competencies Mastered:'}
                </div>
                <div className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                  {t(cert.skillsLearned)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
