import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sawtooth Roofing — Treasure Valley Storm Damage & Insurance Claims',
  description:
    'Storm-damaged 3-tab roof in Meridian, Nampa, Caldwell, or Boise? Sawtooth Roofing helps Treasure Valley homeowners navigate insurance claims and replace wind- and hail-damaged roofs.',
  applicationName: 'Sawtooth Roofing',
  authors: [{ name: 'Sawtooth Customs' }],
  keywords: [
    'roofing Meridian',
    'roofing Nampa',
    'roofing Boise',
    'roofing Caldwell',
    'storm damage roof Idaho',
    'roof insurance claim Idaho',
    '3-tab roof replacement',
    'Treasure Valley roofer',
  ],
  openGraph: {
    title: 'Sawtooth Roofing — Treasure Valley Storm Damage Specialists',
    description:
      'Recent 70mph winds and hail? Your 3-tab roof may qualify for a full insurance-covered replacement.',
    url: 'https://sawtooth-roofing.com',
    siteName: 'Sawtooth Roofing',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#a01d25',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-brand-black">
        {children}
      </body>
    </html>
  );
}
