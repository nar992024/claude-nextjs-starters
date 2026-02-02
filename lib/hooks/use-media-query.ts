'use client';

import { useEffect, useState } from 'react';

/**
 * 미디어 쿼리 훅
 * 반응형 디자인을 위한 미디어 쿼리 상태를 관리합니다.
 */

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // 초기값 설정
    setMatches(media.matches);

    // 이벤트 리스너
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // 구형 브라우저 지원
    if (media.addEventListener) {
      media.addEventListener('change', listener);
    } else {
      media.addListener(listener);
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', listener);
      } else {
        media.removeListener(listener);
      }
    };
  }, [query]);

  return matches;
}

// 편의 훅들
export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 767px)');
}

export function useIsTablet(): boolean {
  return useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
}

export function useIsDesktop(): boolean {
  return useMediaQuery('(min-width: 1024px)');
}

export function useIsSmallScreen(): boolean {
  return useMediaQuery('(max-width: 639px)');
}

export function useIsLargeScreen(): boolean {
  return useMediaQuery('(min-width: 1280px)');
}
