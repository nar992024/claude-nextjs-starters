/**
 * 라우트 상수
 * 애플리케이션 전체에서 사용하는 라우트 경로를 정의합니다.
 */

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  DASHBOARD: '/dashboard',

  // 인증 관련
  AUTH: {
    LOGIN: '/login',
    SIGNUP: '/signup',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password',
  },

  // API 관련
  API: {
    AUTH: {
      LOGIN: '/api/auth/login',
      SIGNUP: '/api/auth/signup',
      LOGOUT: '/api/auth/logout',
      ME: '/api/auth/me',
    },
  },
} as const;

export type RoutePath = typeof ROUTES[keyof typeof ROUTES];
