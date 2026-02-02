import { cn } from '@/lib/utils';
import { ContainerProps } from '@/lib/types/components';

/**
 * Container 컴포넌트
 * 반응형 컨테이너
 */

const maxWidthStyles = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
};

export function Container({
  maxWidth = 'xl',
  center = true,
  padding = true,
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'w-full',
        maxWidthStyles[maxWidth],
        center && 'mx-auto',
        padding && 'px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
