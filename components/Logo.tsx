import Image from 'next/image';

interface LogoProps {
  className?: string;
  priority?: boolean;
}

/**
 * Sawtooth Roofing wordmark. SVG source lives in /public/logo.svg.
 * Native viewBox is 1024x532 (≈1.92:1 aspect).
 */
export function Logo({ className = 'h-10 w-auto', priority = false }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Sawtooth Roofing"
      width={1024}
      height={532}
      priority={priority}
      className={className}
    />
  );
}
