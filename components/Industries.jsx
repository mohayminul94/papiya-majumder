'use client';

import React from 'react';
import { Store, Globe2 } from 'lucide-react';
import DynamicIcon from './IconHelper';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

export default function Industries() {
  const { language, t } = useLanguage();

  return (
    <section id="industries" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs font-semibold text-purple-700 dark:text-purple-300 mb-3">
            <Store className="w-3.5 h-3.5" />
            <span>{t(portfolioData.industries.badge)}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t(portfolioData.industries.title)}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            {t(portfolioData.industries.subtitle)}
          </p>
        </div>

        {/* 12-Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {portfolioData.industries.list.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-lg hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/80 border border-purple-200/60 dark:border-purple-800/60 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-3.5 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <DynamicIcon name={item.icon} className="w-5 h-5" />
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {t(item.name)}
                </h3>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-purple-600 dark:text-purple-400">
                  {t(item.tag)}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
