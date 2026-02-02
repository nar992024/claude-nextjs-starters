import { z } from 'zod';
import { emailSchema, passwordSchema, nameSchema } from './common';

/**
 * 인증 관련 Zod 스키마
 */

// 로그인 스키마
export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, '비밀번호를 입력해주세요'),
  remember: z.boolean().optional(),
});

export type LoginInput = z.infer<typeof loginSchema>;

// 회원가입 스키마
export const signupSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string().min(1, '비밀번호 확인을 입력해주세요'),
    name: nameSchema,
    terms: z.boolean().refine((val) => val === true, {
      message: '이용약관에 동의해주세요',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다',
    path: ['confirmPassword'],
  });

export type SignupInput = z.infer<typeof signupSchema>;

// 비밀번호 찾기 스키마
export const forgotPasswordSchema = z.object({
  email: emailSchema,
});

export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;

// 비밀번호 재설정 스키마
export const resetPasswordSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: z.string().min(1, '비밀번호 확인을 입력해주세요'),
    token: z.string().min(1, '유효하지 않은 토큰입니다'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다',
    path: ['confirmPassword'],
  });

export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;

// 비밀번호 변경 스키마
export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, '현재 비밀번호를 입력해주세요'),
    newPassword: passwordSchema,
    confirmPassword: z.string().min(1, '비밀번호 확인을 입력해주세요'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다',
    path: ['confirmPassword'],
  })
  .refine((data) => data.currentPassword !== data.newPassword, {
    message: '새 비밀번호는 현재 비밀번호와 달라야 합니다',
    path: ['newPassword'],
  });

export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;
