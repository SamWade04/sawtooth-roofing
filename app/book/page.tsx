import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { BookingContainer } from '@/components/BookingContainer';
import { Footer } from '@/components/Footer';
import { StickyCallBar } from '@/components/StickyCallBar';

export const metadata: Metadata = {
  title: 'Book Your Free Roof Inspection — Sawtooth Roofing',
  description:
    'Pick a time for your free roof inspection. Sawtooth Roofing serves Meridian, Nampa, Caldwell, and Boise.',
  // No-index: this page is mid-funnel, not meant to rank in search.
  robots: { index: false, follow: true },
  alternates: { canonical: '/book' },
};

export default function BookPage() {
  return (
    <>
      <Header />
      <main>
        <BookingContainer />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
