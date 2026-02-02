/**
 * 애플리케이션 설정 상수
 */

export const APP_CONFIG = {
  NAME: 'Next.js Starter',
  DESCRIPTION: '범용 웹 스타터킷',
  URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  LOCALE: 'ko-KR',
  THEME: {
    DEFAULT: 'system',
    STORAGE_KEY: 'theme-preference',
  },
} as const;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

export const ANIMATION = {
  DURATION: {
    FAST: 150,
    NORMAL: 300,
    SLOW: 500,
  },
  EASING: {
    DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
    IN: 'cubic-bezier(0.4, 0, 1, 1)',
    OUT: 'cubic-bezier(0, 0, 0.2, 1)',
    IN_OUT: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

export const VALIDATION = {
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_MAX_LENGTH: 100,
  USERNAME_MIN_LENGTH: 3,
  USERNAME_MAX_LENGTH: 30,
} as const;
