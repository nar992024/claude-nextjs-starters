/**
 * 검증 유틸리티 함수
 */

// 이메일 검증
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// URL 검증
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// 전화번호 검증 (한국)
export function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = /^01[016789]-?[0-9]{3,4}-?[0-9]{4}$/;
  return phoneRegex.test(phone);
}

// 비밀번호 강도 검증
export interface PasswordStrength {
  score: number; // 0-4
  feedback: string[];
  isValid: boolean;
}

export function checkPasswordStrength(
  password: string,
  minLength: number = 8
): PasswordStrength {
  const feedback: string[] = [];
  let score = 0;

  // 길이 검증
  if (password.length < minLength) {
    feedback.push(`최소 ${minLength}자 이상이어야 합니다`);
  } else {
    score++;
  }

  // 소문자 포함
  if (/[a-z]/.test(password)) {
    score++;
  } else {
    feedback.push('소문자를 포함해야 합니다');
  }

  // 대문자 포함
  if (/[A-Z]/.test(password)) {
    score++;
  } else {
    feedback.push('대문자를 포함해야 합니다');
  }

  // 숫자 포함
  if (/[0-9]/.test(password)) {
    score++;
  } else {
    feedback.push('숫자를 포함해야 합니다');
  }

  // 특수문자 포함
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    score++;
  }

  return {
    score: Math.min(score, 4),
    feedback,
    isValid: score >= 3 && password.length >= minLength,
  };
}

// 파일 타입 검증
export function isValidFileType(
  file: File,
  allowedTypes: string[]
): boolean {
  return allowedTypes.includes(file.type);
}

// 파일 크기 검증
export function isValidFileSize(file: File, maxSizeMB: number): boolean {
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  return file.size <= maxSizeBytes;
}

// 이미지 파일 검증
export function isImageFile(file: File): boolean {
  return file.type.startsWith('image/');
}

// 문자열 길이 검증
export function isValidLength(
  str: string,
  min: number,
  max?: number
): boolean {
  if (str.length < min) return false;
  if (max && str.length > max) return false;
  return true;
}

// 숫자 범위 검증
export function isInRange(
  value: number,
  min: number,
  max: number
): boolean {
  return value >= min && value <= max;
}

// 한글만 포함 검증
export function isKoreanOnly(str: string): boolean {
  return /^[가-힣\s]+$/.test(str);
}

// 영문만 포함 검증
export function isEnglishOnly(str: string): boolean {
  return /^[a-zA-Z\s]+$/.test(str);
}

// 영문+숫자만 포함 검증
export function isAlphanumeric(str: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(str);
}
