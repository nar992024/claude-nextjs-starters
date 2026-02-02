'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginInput } from '@/lib/validations/auth';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/molecules/password-input';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from '@/components/atoms/link';
import { ROUTES } from '@/lib/constants/routes';

/**
 * LoginForm 컴포넌트
 * 로그인 폼
 */

interface LoginFormProps {
  onSubmit?: (data: LoginInput) => void | Promise<void>;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const handleFormSubmit = async (data: LoginInput) => {
    try {
      await onSubmit?.(data);
      console.log('로그인 데이터:', data);
    } catch (error) {
      console.error('로그인 오류:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      {/* 이메일 */}
      <div className="space-y-2">
        <Label htmlFor="email">
          이메일
          <span className="text-destructive ml-1">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="example@email.com"
          {...register('email')}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* 비밀번호 */}
      <div className="space-y-2">
        <Label htmlFor="password">
          비밀번호
          <span className="text-destructive ml-1">*</span>
        </Label>
        <PasswordInput
          id="password"
          placeholder="비밀번호를 입력하세요"
          {...register('password')}
          aria-invalid={!!errors.password}
        />
        {errors.password && (
          <p className="text-sm text-destructive">{errors.password.message}</p>
        )}
      </div>

      {/* 로그인 상태 유지 & 비밀번호 찾기 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" {...register('remember')} />
          <Label htmlFor="remember" className="text-sm font-normal">
            로그인 상태 유지
          </Label>
        </div>
        <Link
          href={ROUTES.AUTH.FORGOT_PASSWORD}
          className="text-sm"
          underline
        >
          비밀번호를 잊으셨나요?
        </Link>
      </div>

      {/* 제출 버튼 */}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? '로그인 중...' : '로그인'}
      </Button>

      {/* 회원가입 링크 */}
      <div className="text-center text-sm text-muted-foreground">
        계정이 없으신가요?{' '}
        <Link href={ROUTES.AUTH.SIGNUP} underline>
          회원가입
        </Link>
      </div>
    </form>
  );
}
