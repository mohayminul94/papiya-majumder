import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata = {
  metadataBase: new URL('https://theppcqueen.com'),
  title: 'Papiya Rani Majumder | Digital Marketing Manager & Google Ads Specialist',
  description: 'Executive Portfolio of Papiya Rani Majumder - Digital Marketing Manager, Google Ads Specialist, and Performance Marketing Expert with 5+ years experience scaling high-ROI ad campaigns.',
  keywords: [
    'Papiya Rani Majumder',
    'The PPC Queen',
    'Google Ads Specialist',
    'Digital Marketing Manager',
    'Performance Marketing Expert',
    'PPC Manager Dhaka',
    'Google Ads Bangladesh',
    'GA4 & GTM Specialist',
    'High ROI Google Ads',
    'Ilmify Tech Agency'
  ],
  authors: [{ name: 'Papiya Rani Majumder', url: 'https://theppcqueen.com' }],
  creator: 'Papiya Rani Majumder',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://theppcqueen.com',
    title: 'Papiya Rani Majumder | Digital Marketing Manager & Google Ads Specialist',
    description: 'Executive Portfolio of Papiya Rani Majumder. Driving Business Growth Through Data-Driven Digital Marketing.',
    siteName: 'Papiya Rani Majumder Portfolio',
    images: [
      {
        url: '/images/papiya-profile.jpg',
        width: 1200,
        height: 1200,
        alt: 'Papiya Rani Majumder - Digital Marketing Manager',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Papiya Rani Majumder | Google Ads Specialist & Performance Marketer',
    description: '5+ Years of Experience in high-ROI Google Ads campaigns, performance marketing, and conversion tracking.',
    images: ['/images/papiya-profile.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-[#fafbfc] dark:bg-[#060b17] text-slate-900 dark:text-slate-100 antialiased selection:bg-purple-600 selection:text-white">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
