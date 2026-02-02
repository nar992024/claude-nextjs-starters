'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema, SignupInput } from '@/lib/validations/auth';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/molecules/password-input';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from '@/components/atoms/link';
import { ROUTES } from '@/lib/constants/routes';

/**
 * SignupForm 컴포넌트
 * 회원가입 폼
 */

interface SignupFormProps {
  onSubmit?: (data: SignupInput) => void | Promise<void>;
}

export function SignupForm({ onSubmit }: SignupFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
  });

  const handleFormSubmit = async (data: SignupInput) => {
    try {
      await onSubmit?.(data);
      console.log('회원가입 데이터:', data);
    } catch (error) {
      console.error('회원가입 오류:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      {/* 이름 */}
      <div className="space-y-2">
        <Label htmlFor="name">
          이름
          <span className="text-destructive ml-1">*</span>
        </Label>
        <Input
          id="name"
          placeholder="홍길동"
          {...register('name')}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

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
        <p className="text-xs text-muted-foreground">
          영문 대소문자, 숫자를 포함하여 8자 이상
        </p>
      </div>

      {/* 비밀번호 확인 */}
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">
          비밀번호 확인
          <span className="text-destructive ml-1">*</span>
        </Label>
        <PasswordInput
          id="confirmPassword"
          placeholder="비밀번호를 다시 입력하세요"
          {...register('confirmPassword')}
          aria-invalid={!!errors.confirmPassword}
        />
        {errors.confirmPassword && (
          <p className="text-sm text-destructive">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* 이용약관 동의 */}
      <div className="space-y-2">
        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            {...register('terms')}
            aria-invalid={!!errors.terms}
          />
          <Label htmlFor="terms" className="text-sm font-normal leading-tight">
            <Link href="/terms" underline external>
              이용약관
            </Link>
            과{' '}
            <Link href="/privacy" underline external>
              개인정보처리방침
            </Link>
            에 동의합니다
            <span className="text-destructive ml-1">*</span>
          </Label>
        </div>
        {errors.terms && (
          <p className="text-sm text-destructive">{errors.terms.message}</p>
        )}
      </div>

      {/* 제출 버튼 */}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? '가입 중...' : '회원가입'}
      </Button>

      {/* 로그인 링크 */}
      <div className="text-center text-sm text-muted-foreground">
        이미 계정이 있으신가요?{' '}
        <Link href={ROUTES.AUTH.LOGIN} underline>
          로그인
        </Link>
      </div>
    </form>
  );
}
