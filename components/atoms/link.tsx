import NextLink from 'next/link';
import { cn } from '@/lib/utils';
import { LinkProps } from '@/lib/types/components';

/**
 * Link 컴포넌트
 * Next.js Link의 래퍼 컴포넌트
 */

export function Link({
  href,
  external = false,
  underline = false,
  children,
  className,
  ...props
}: LinkProps) {
  const linkClasses = cn(
    'text-primary hover:text-primary/80 transition-colors',
    underline && 'underline underline-offset-4',
    className
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={linkClasses} {...props}>
      {children}
    </NextLink>
  );
}
