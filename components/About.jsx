'use client';

import React from 'react';
import { 
  CheckCircle2, 
  Target, 
  BarChart2, 
  Users, 
  Layers, 
  ArrowUpRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs font-semibold text-purple-700 dark:text-purple-300 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{t(portfolioData.about.badge)}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t(portfolioData.about.title)}
          </h2>
        </div>

        {/* Executive Summary Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  {language === 'bn' ? 'এক্সিকিউটিভ স্টেটমেন্ট' : 'Executive Statement'}
                </span>
                <span className="text-xs text-slate-400">
                  CV Source of Truth
                </span>
              </div>

              <blockquote className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                "{t(portfolioData.about.executiveSummary)}"
              </blockquote>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {t(portfolioData.personal.name)}
                </div>
                <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                  {portfolioData.personal.brandTitle} • {language === 'bn' ? 'ঢাকা, বাংলাদেশ' : 'Dhaka, Bangladesh'}
                </div>
              </div>

              <div className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                ✓ {language === 'bn' ? 'যাচাইকৃত পেশাদার ট্র্যাক রেকর্ড' : 'Verified Professional Track Record'}
              </div>
            </div>
          </div>

          {/* Key Highlights Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
            {portfolioData.about.keyHighlights.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-purple-400 dark:hover:border-purple-600 transition-all group"
              >
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {t(item.title)}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {t(item.desc)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
