import { z } from 'zod';
import { VALIDATION } from '@/lib/constants/config';

/**
 * 공통 Zod 스키마
 */

// 이메일 스키마
export const emailSchema = z
  .string()
  .min(1, '이메일을 입력해주세요')
  .email('올바른 이메일 형식이 아닙니다');

// 비밀번호 스키마
export const passwordSchema = z
  .string()
  .min(
    VALIDATION.PASSWORD_MIN_LENGTH,
    `비밀번호는 최소 ${VALIDATION.PASSWORD_MIN_LENGTH}자 이상이어야 합니다`
  )
  .max(
    VALIDATION.PASSWORD_MAX_LENGTH,
    `비밀번호는 최대 ${VALIDATION.PASSWORD_MAX_LENGTH}자까지 가능합니다`
  )
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
    '비밀번호는 영문 대소문자와 숫자를 포함해야 합니다'
  );

// 사용자명 스키마
export const usernameSchema = z
  .string()
  .min(
    VALIDATION.USERNAME_MIN_LENGTH,
    `사용자명은 최소 ${VALIDATION.USERNAME_MIN_LENGTH}자 이상이어야 합니다`
  )
  .max(
    VALIDATION.USERNAME_MAX_LENGTH,
    `사용자명은 최대 ${VALIDATION.USERNAME_MAX_LENGTH}자까지 가능합니다`
  )
  .regex(
    /^[a-zA-Z0-9_]+$/,
    '사용자명은 영문, 숫자, 밑줄(_)만 사용할 수 있습니다'
  );

// 이름 스키마
export const nameSchema = z
  .string()
  .min(2, '이름은 최소 2자 이상이어야 합니다')
  .max(50, '이름은 최대 50자까지 가능합니다');

// 전화번호 스키마 (한국)
export const phoneSchema = z
  .string()
  .regex(
    /^01[016789]-?[0-9]{3,4}-?[0-9]{4}$/,
    '올바른 전화번호 형식이 아닙니다 (예: 010-1234-5678)'
  );

// URL 스키마
export const urlSchema = z
  .string()
  .url('올바른 URL 형식이 아닙니다');

// 날짜 스키마
export const dateSchema = z
  .string()
  .or(z.date())
  .refine((val) => !isNaN(Date.parse(val.toString())), {
    message: '올바른 날짜 형식이 아닙니다',
  });

// 페이지네이션 스키마
export const paginationSchema = z.object({
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().max(100).default(10),
});

// 정렬 스키마
export const sortSchema = z.object({
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).default('asc'),
});

// 검색 스키마
export const searchSchema = z.object({
  query: z.string().min(1, '검색어를 입력해주세요'),
});

// 파일 업로드 스키마
export const fileSchema = z
  .instanceof(File)
  .refine((file) => file.size <= 5 * 1024 * 1024, {
    message: '파일 크기는 5MB 이하여야 합니다',
  });

// 이미지 파일 스키마
export const imageSchema = fileSchema.refine(
  (file) => file.type.startsWith('image/'),
  {
    message: '이미지 파일만 업로드 가능합니다',
  }
);

// 선택적 문자열 스키마 (빈 문자열을 undefined로 변환)
export const optionalStringSchema = z
  .string()
  .transform((val) => (val === '' ? undefined : val))
  .optional();
