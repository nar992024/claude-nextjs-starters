/**
 * API 관련 타입 정의
 */

// API 응답 타입
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// 페이지네이션 타입
export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface PaginatedResponse<T = any> extends ApiResponse<T> {
  pagination: Pagination;
}

// 인증 관련 타입
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'user' | 'admin';
  createdAt: string;
  updatedAt: string;
}

export interface LoginRequest {
  email: string;
  password: string;
  remember?: boolean;
}

export interface LoginResponse {
  user: User;
  token: string;
  refreshToken?: string;
}

export interface SignupRequest {
  email: string;
  password: string;
  name: string;
}

export interface SignupResponse {
  user: User;
  token: string;
}

// HTTP 메서드 타입
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

// API 에러 타입
export interface ApiError {
  message: string;
  code: string;
  status: number;
  details?: Record<string, any>;
}
