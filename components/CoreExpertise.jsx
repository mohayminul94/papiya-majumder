'use client';

import React, { useState } from 'react';
import { Layers, ArrowRight } from 'lucide-react';
import DynamicIcon from './IconHelper';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

export default function CoreExpertise() {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: { en: 'All Skills (15)', bn: 'সকল দক্ষতা (১৫)' } },
    { id: 'paid', label: { en: 'PPC & Search Ads', bn: 'পিপিসি ও সার্চ অ্যাডস' } },
    { id: 'analytics', label: { en: 'GA4, GTM & Tracking', bn: 'জিএ৪, জিটিএম ও ট্র্যাকিং' } },
    { id: 'strategy', label: { en: 'Strategy & Growth', bn: 'স্ট্র্যাটেজি ও গ্রোথ' } },
    { id: 'optimization', label: { en: 'CRO & Campaign Mgmt', bn: 'সিআরও ও ক্যাম্পেইন ম্যানেজমেন্ট' } },
    { id: 'organic', label: { en: 'SEO & Organic', bn: 'এসইও ও অর্গানিক' } },
  ];

  const filteredSkills = portfolioData.expertise.skills.filter((skill) => {
    if (activeFilter === 'all') return true;
    return skill.category === activeFilter;
  });

  return (
    <section id="expertise" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs font-semibold text-purple-700 dark:text-purple-300 mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>{t(portfolioData.expertise.badge)}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t(portfolioData.expertise.title)}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
              {t(portfolioData.expertise.subtitle)}
            </p>
          </div>

          <div className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 self-start md:self-auto border border-slate-200/60 dark:border-slate-700">
            {portfolioData.expertise.skills.length} {language === 'bn' ? 'প্রধান দক্ষতা ক্ষেত্র' : 'Core Disciplines'}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all ${
                activeFilter === cat.id
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/25'
                  : 'bg-white dark:bg-slate-850 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800'
              }`}
            >
              {t(cat.label)}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-card-hover hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-purple-50 dark:bg-purple-950/70 border border-purple-200/60 dark:border-purple-900/60 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    <DynamicIcon name={skill.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    {skill.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {t(skill.name)}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  {t(skill.desc)}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>{language === 'bn' ? 'প্রমাণিত দক্ষতা' : 'Active Discipline'}</span>
                <span className="text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                  5+ Yrs
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
