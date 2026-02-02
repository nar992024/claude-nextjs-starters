import { cn } from '@/lib/utils';
import { TextProps } from '@/lib/types/components';

/**
 * Text 컴포넌트
 * 본문 텍스트 요소
 */

const sizeStyles = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

const weightStyles = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export function Text({
  as: Tag = 'p',
  size = 'md',
  weight = 'normal',
  children,
  className,
  ...props
}: TextProps) {
  return (
    <Tag
      className={cn(
        sizeStyles[size],
        weightStyles[weight],
        'text-foreground',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
