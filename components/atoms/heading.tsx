import { cn } from '@/lib/utils';
import { HeadingProps } from '@/lib/types/components';

/**
 * Heading 컴포넌트
 * 타이포그래피 제목 요소
 */

const headingStyles = {
  1: 'text-4xl md:text-5xl font-bold tracking-tight',
  2: 'text-3xl md:text-4xl font-bold tracking-tight',
  3: 'text-2xl md:text-3xl font-semibold',
  4: 'text-xl md:text-2xl font-semibold',
  5: 'text-lg md:text-xl font-medium',
  6: 'text-base md:text-lg font-medium',
};

export function Heading({
  level,
  as,
  children,
  className,
  ...props
}: HeadingProps) {
  const Tag = (as || `h${level}`) as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

  return (
    <Tag className={cn(headingStyles[level], className)} {...props}>
      {children}
    </Tag>
  );
}
