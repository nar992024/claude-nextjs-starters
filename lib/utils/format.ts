import { format, formatDistance, formatRelative, isValid } from 'date-fns';
import { ko } from 'date-fns/locale';

/**
 * 날짜 포맷팅 유틸리티
 */

export function formatDate(
  date: Date | string | number,
  formatStr: string = 'yyyy-MM-dd'
): string {
  const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;

  if (!isValid(dateObj)) {
    return '유효하지 않은 날짜';
  }

  return format(dateObj, formatStr, { locale: ko });
}

export function formatDateTime(date: Date | string | number): string {
  return formatDate(date, 'yyyy-MM-dd HH:mm:ss');
}

export function formatRelativeTime(date: Date | string | number): string {
  const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;

  if (!isValid(dateObj)) {
    return '유효하지 않은 날짜';
  }

  return formatDistance(dateObj, new Date(), {
    addSuffix: true,
    locale: ko,
  });
}

export function formatRelativeDate(date: Date | string | number): string {
  const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;

  if (!isValid(dateObj)) {
    return '유효하지 않은 날짜';
  }

  return formatRelative(dateObj, new Date(), { locale: ko });
}

/**
 * 숫자 포맷팅 유틸리티
 */

export function formatNumber(
  value: number,
  options?: Intl.NumberFormatOptions
): string {
  return new Intl.NumberFormat('ko-KR', options).format(value);
}

export function formatCurrency(
  value: number,
  currency: string = 'KRW'
): string {
  return formatNumber(value, {
    style: 'currency',
    currency,
  });
}

export function formatPercent(value: number, decimals: number = 0): string {
  return formatNumber(value / 100, {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function formatCompactNumber(value: number): string {
  return formatNumber(value, {
    notation: 'compact',
    compactDisplay: 'short',
  });
}

/**
 * 문자열 포맷팅 유틸리티
 */

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function titleCase(str: string): string {
  return str
    .split(' ')
    .map((word) => capitalize(word))
    .join(' ');
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * 파일 크기 포맷팅
 */

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
