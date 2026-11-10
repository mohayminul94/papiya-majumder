'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ArrowRight, 
  Download, 
  TrendingUp, 
  CheckCircle2, 
  Award, 
  Target, 
  ShieldCheck, 
  Sparkles,
  MousePointerClick
} from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero({ onOpenCv }) {
  const { language, t } = useLanguage();

  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-grid-subtle"
    >
      {/* Background ambient decorative blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-purple-500/15 via-indigo-500/10 to-transparent blur-3xl pointer-events-none rounded-full -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400/10 dark:bg-purple-600/10 blur-3xl pointer-events-none rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Executive Top Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200/80 dark:border-purple-800/80 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-purple-700 dark:text-purple-300 tracking-wide">
                {language === 'bn' ? '৫+ বছরের অভিজ্ঞতাসম্পন্ন পিপিসি ও পারফরম্যান্স লিডার' : '5+ Years Proven PPC & Performance Leadership'}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              {language === 'bn' ? (
                <>
                  উপাত্ত-ভিত্তিক ডিজিটাল মার্কেটিংয়ে <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent">ব্যবসায়ের টেকসই প্রবৃদ্ধি</span> নিশ্চিতকরণ।
                </>
              ) : (
                <>
                  Driving Business Growth Through <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent">Data-Driven</span> Digital Marketing.
                </>
              )}
            </h1>

            {/* Subtitle */}
            <div className="text-base sm:text-lg font-semibold text-purple-700 dark:text-purple-300 flex flex-wrap items-center gap-2">
              <span>Digital Marketing Manager</span>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
              <span>Google Ads Specialist</span>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
              <span>Performance Marketing Expert</span>
            </div>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {t(portfolioData.personal.shortBio)}
            </p>

            {/* Micro Highlights Pill Group */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80">
                <TrendingUp className="w-3.5 h-3.5 text-purple-600" />
                <span>{language === 'bn' ? 'উচ্চআরওআই ক্যাম্পেইন' : 'High-ROI Scaling'}</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80">
                <Target className="w-3.5 h-3.5 text-indigo-600" />
                <span>{language === 'bn' ? 'জিএ৪ ও জিটিএম ট্র্যাকিং' : 'GA4 & GTM Precision'}</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{language === 'bn' ? '৬০% রিপিট ক্লায়েন্ট রেট' : '60% Repeat Client Trust'}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold rounded-xl bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>{t(portfolioData.nav.workTogether)}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCv}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-sm sm:text-base font-semibold rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Download className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>{t(portfolioData.nav.downloadCv)}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Portrait Photo & Floating Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Portrait Frame Container */}
            <div className="relative w-72 sm:w-84 md:w-96 aspect-square max-w-full">
              {/* Back glowing aura */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-purple-400 opacity-20 blur-2xl transform scale-105" />
              
              {/* Outer decorative border */}
              <div className="relative w-full h-full rounded-3xl p-2 bg-gradient-to-b from-purple-200/50 via-slate-200/40 to-purple-300/30 dark:from-purple-900/40 dark:via-slate-800/40 dark:to-indigo-900/30 shadow-2xl">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src="/images/papiya-profile.jpg"
                    alt="Papiya Rani Majumder - Digital Marketing Manager"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle bottom gradient overlay for legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-sm font-bold tracking-tight">
                      {t(portfolioData.personal.name)}
                    </p>
                    <p className="text-[11px] text-purple-200 font-medium">
                      {portfolioData.personal.brandTitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge 1: 5+ Years Experience (Top Left) */}
              <div className="absolute -top-4 -left-6 sm:-left-10 bg-white/95 dark:bg-slate-850/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xl border border-slate-200/80 dark:border-slate-700 flex items-center space-x-3 transform hover:scale-105 transition-transform">
                <div className="w-9 h-9 rounded-lg bg-purple-100 dark:bg-purple-950/80 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900 dark:text-white leading-none">
                    5+ Years
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    {language === 'bn' ? 'অভিজ্ঞতা' : 'Experience'}
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge 2: 60% Repeat Client (Bottom Right) */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white/95 dark:bg-slate-850/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-xl border border-slate-200/80 dark:border-slate-700 flex items-center space-x-3 transform hover:scale-105 transition-transform">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900 dark:text-white leading-none">
                    ~60%
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    {language === 'bn' ? 'রিপিট ক্লায়েন্ট রেট' : 'Repeat Client Rate'}
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge 3: Top Revenue Performer (Top Right) */}
              <div className="hidden sm:flex absolute top-12 -right-8 bg-white/95 dark:bg-slate-850/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-slate-200/80 dark:border-slate-700 items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-purple-600" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  {language === 'bn' ? '#১ শীর্ষ রেভিনিউ' : '#1 Top Performer'}
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Global Metric Summary Cards */}
        <div className="mt-16 pt-10 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          {portfolioData.personal.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="p-4 sm:p-5 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:border-purple-300 dark:hover:border-purple-800 transition-all"
            >
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
                {t(stat.label)}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {t(stat.sub)}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
