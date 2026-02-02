'use client';

import { Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ComponentProps, forwardRef, useState } from 'react';

/**
 * PasswordInput 컴포넌트
 * 비밀번호 입력 필드 (보기/숨기기 토글)
 */

export interface PasswordInputProps
  extends Omit<ComponentProps<typeof Input>, 'type'> {
  showToggle?: boolean;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ showToggle = true, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className={cn('relative', className)}>
        <Input
          type={showPassword ? 'text' : 'password'}
          className="pr-10"
          ref={ref}
          {...props}
        />

        {showToggle && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
            <span className="sr-only">
              {showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
            </span>
          </Button>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
