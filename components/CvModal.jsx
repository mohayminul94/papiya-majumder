'use client';

import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, Linkedin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/context/LanguageContext';

export default function CvModal({ isOpen, onClose }) {
  const { language, t } = useLanguage();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 sticky top-0 z-10">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50 px-2.5 py-1 rounded-md border border-purple-200 dark:border-purple-800">
              Curriculum Vitae
            </span>
            <span className="text-sm text-slate-500 dark:text-slate-400 hidden sm:inline">
              Official Document
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-sm transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{language === 'bn' ? 'প্রিন্ট / সেভ PDF' : 'Print / Save PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Scrollable Content */}
        <div className="p-6 sm:p-10 overflow-y-auto print:p-0 print:overflow-visible text-slate-800 dark:text-slate-200 font-sans print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white print:text-black tracking-tight">
                  {t(portfolioData.personal.name)}
                </h1>
                <p className="text-sm sm:text-base font-medium text-purple-600 dark:text-purple-400 mt-1">
                  {t(portfolioData.personal.role)}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Brand: {portfolioData.personal.brandTitle}
                </p>
              </div>

              <div className="text-xs space-y-1.5 text-slate-600 dark:text-slate-300 print:text-black">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-purple-600" />
                  <span>{portfolioData.personal.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-purple-600" />
                  <span>{portfolioData.personal.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-purple-600" />
                  <span>{t(portfolioData.personal.location)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-3.5 h-3.5 text-purple-600" />
                  <span>{portfolioData.personal.website}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 border-b border-purple-200 dark:border-purple-900/60 pb-1 mb-2">
              {language === 'bn' ? 'এক্সিকিউটিভ সামারি' : 'Executive Summary'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed print:text-black">
              {t(portfolioData.about.executiveSummary)}
            </p>
          </div>

          {/* Core Competencies */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 border-b border-purple-200 dark:border-purple-900/60 pb-1 mb-3">
              {language === 'bn' ? 'প্রধান দক্ষতাসমূহ' : 'Core Competencies'}
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {portfolioData.expertise.skills.map((skill) => (
                <span
                  key={skill.id}
                  className="px-2.5 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 print:border-slate-300 print:bg-slate-50"
                >
                  {t(skill.name)}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 border-b border-purple-200 dark:border-purple-900/60 pb-1 mb-4">
              {language === 'bn' ? 'পেশাগত অভিজ্ঞতা' : 'Professional Experience'}
            </h2>
            <div className="space-y-5">
              {portfolioData.experience.roles.map((role, idx) => (
                <div key={idx} className="relative pl-4 border-l-2 border-purple-500 dark:border-purple-400">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white print:text-black">
                      {t(role.title)}
                    </h3>
                    <span className="text-xs font-medium text-purple-600 dark:text-purple-400">
                      {t(role.period)}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {role.company}
                  </div>
                  {role.additionalRole && (
                    <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-2">
                      ⭐ {t(role.additionalRole.title)}
                    </div>
                  )}
                  <ul className="mt-2 space-y-1">
                    {role.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start space-x-1.5">
                        <span className="text-purple-500 font-bold">•</span>
                        <span>{t(resp)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 border-b border-purple-200 dark:border-purple-900/60 pb-1 mb-3">
              {language === 'bn' ? 'অর্জিত সম্মাননা ও সাফল্য' : 'Honors & Achievements'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {portfolioData.achievements.items.map((ach) => (
                <div key={ach.id} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    {t(ach.title)}
                  </div>
                  <div className="text-[11px] text-purple-600 dark:text-purple-400 font-medium">
                    {t(ach.position)} — {ach.organization}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Education */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 border-b border-purple-200 dark:border-purple-900/60 pb-1 mb-3">
                {language === 'bn' ? 'সার্টিফিকেশন' : 'Certifications'}
              </h2>
              <div className="space-y-2">
                {portfolioData.certifications.items.map((cert, cIdx) => (
                  <div key={cIdx} className="text-xs">
                    <div className="font-semibold text-slate-800 dark:text-slate-200">{t(cert.title)}</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">{cert.issuer}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 border-b border-purple-200 dark:border-purple-900/60 pb-1 mb-3">
                {language === 'bn' ? 'শিক্ষা' : 'Education'}
              </h2>
              <div className="space-y-2">
                {portfolioData.education.items.map((edu, eIdx) => (
                  <div key={eIdx} className="text-xs">
                    <div className="font-semibold text-slate-800 dark:text-slate-200">
                      {t(edu.degree)} ({edu.year})
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">{t(edu.institution)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
