'use client';

import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

export default function Experience() {
  const { language, t } = useLanguage();

  return (
    <section id="experience" className="py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs font-semibold text-purple-700 dark:text-purple-300 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t(portfolioData.experience.badge)}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t(portfolioData.experience.title)}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
            {t(portfolioData.experience.subtitle)}
          </p>
        </div>

        {/* Vertical Career Timeline */}
        <div className="relative border-l-2 border-purple-200 dark:border-purple-900/60 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {portfolioData.experience.roles.map((role, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-4 border-purple-600 shadow-md group-hover:scale-125 transition-transform" />

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all">
                
                {/* Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-5 mb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                        {t(role.badge)}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {t(role.title)}
                    </h3>

                    <div className="flex items-center space-x-2 text-sm font-semibold text-slate-600 dark:text-slate-300 mt-1">
                      <Building2 className="w-4 h-4 text-purple-600" />
                      <span>{role.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700 self-start lg:self-center">
                    <Calendar className="w-3.5 h-3.5 text-purple-600" />
                    <span>{t(role.period)}</span>
                  </div>
                </div>

                {/* Additional Leadership Role Badge if present */}
                {role.additionalRole && (
                  <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/40 dark:to-indigo-950/30 border border-purple-200 dark:border-purple-800/80 flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        {t(role.additionalRole.title)}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                        {t(role.additionalRole.note)}
                      </div>
                    </div>
                  </div>
                )}

                {/* Responsibilities list */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    {language === 'bn' ? 'প্রধান দায়িত্ব ও অর্জন' : 'Key Responsibilities & Deliverables'}
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {role.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800/60"
                      >
                        <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-snug">
                          {t(resp)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
