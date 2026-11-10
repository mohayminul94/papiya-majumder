'use client';

import React from 'react';
import { Trophy, Award, Sparkles, TrendingUp, Users, Crown, HeartHandshake, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import DynamicIcon from './IconHelper';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

export default function Achievements() {
  const { language, t } = useLanguage();

  const handleCelebrate = (e) => {
    try {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { x, y },
        colors: ['#7c3aed', '#6366f1', '#ec4899', '#10b981'],
      });
    } catch (err) {
      // fallback
    }
  };

  return (
    <section id="achievements" className="py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-xs font-semibold text-purple-700 dark:text-purple-300 mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>{t(portfolioData.achievements.badge)}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t(portfolioData.achievements.title)}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
              {t(portfolioData.achievements.subtitle)}
            </p>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center space-x-1.5 self-start md:self-auto">
            <Sparkles className="w-3.5 h-3.5 text-purple-600 animate-spin" />
            <span>{language === 'bn' ? 'যেকোনো কার্ডে ক্লিক করে সেলিব্রেট করুন' : 'Click any card to celebrate'}</span>
          </div>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.achievements.items.map((ach) => (
            <div
              key={ach.id}
              onClick={handleCelebrate}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-2xl hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300 cursor-pointer flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle accent hover indicator line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950/80 border border-purple-200 dark:border-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 group-hover:rotate-6 transition-all">
                    <DynamicIcon name={ach.icon} className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                    {ach.metric}
                  </span>
                </div>

                <div className="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-1">
                  {t(ach.position)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {t(ach.title)}
                </h3>

                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5 mb-3">
                  {ach.organization}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t(ach.desc)}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
                <span className="text-slate-400 font-medium">
                  {t(ach.highlight)}
                </span>
                <span className="text-purple-600 dark:text-purple-400 font-bold group-hover:translate-x-1 transition-transform">
                  ★ {language === 'bn' ? 'স্বীকৃত' : 'Recognized'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
