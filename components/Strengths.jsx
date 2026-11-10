'use client';

import React from 'react';
import { Sparkles, Brain, CheckCircle2 } from 'lucide-react';
import DynamicIcon from './IconHelper';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

export default function Strengths() {
  const { language, t } = useLanguage();

  return (
    <section id="strengths" className="py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs font-semibold text-purple-700 dark:text-purple-300 mb-3">
            <Brain className="w-3.5 h-3.5" />
            <span>{t(portfolioData.strengths.badge)}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t(portfolioData.strengths.title)}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            {t(portfolioData.strengths.subtitle)}
          </p>
        </div>

        {/* Strengths 3-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.strengths.items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-2xl bg-purple-50 dark:bg-purple-950/80 border border-purple-200/60 dark:border-purple-800/60 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <DynamicIcon name={item.icon} className="w-5 h-5" />
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {t(item.title)}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t(item.desc)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
