import { redirect } from 'next/navigation';

/**
 * Index temporarily redirects to /claim-check while the QR-flyer campaign is live.
 * Replace this with the real homepage during Task 2 (Core Site Rebuild).
 */
export default function HomePage() {
  redirect('/claim-check');
}
