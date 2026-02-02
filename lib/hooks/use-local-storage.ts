'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * 로컬 스토리지 훅
 * 로컬 스토리지와 동기화되는 상태를 관리합니다.
 */

type SetValue<T> = T | ((val: T) => T);

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: SetValue<T>) => void, () => void] {
  // 초기값 설정
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`로컬 스토리지에서 ${key}를 읽는 중 오류 발생:`, error);
      return initialValue;
    }
  });

  // 값 설정 함수
  const setValue = useCallback(
    (value: SetValue<T>) => {
      try {
        // 함수형 업데이트 지원
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;

        setStoredValue(valueToStore);

        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));

          // 다른 탭/윈도우에 알림
          window.dispatchEvent(
            new StorageEvent('storage', {
              key,
              newValue: JSON.stringify(valueToStore),
            })
          );
        }
      } catch (error) {
        console.error(`로컬 스토리지에 ${key}를 저장하는 중 오류 발생:`, error);
      }
    },
    [key, storedValue]
  );

  // 값 제거 함수
  const removeValue = useCallback(() => {
    try {
      setStoredValue(initialValue);
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key);
      }
    } catch (error) {
      console.error(`로컬 스토리지에서 ${key}를 제거하는 중 오류 발생:`, error);
    }
  }, [key, initialValue]);

  // storage 이벤트 리스너 (다른 탭/윈도우의 변경사항 감지)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        try {
          setStoredValue(JSON.parse(e.newValue));
        } catch (error) {
          console.error('스토리지 이벤트 처리 중 오류:', error);
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);
      return () => window.removeEventListener('storage', handleStorageChange);
    }
  }, [key]);

  return [storedValue, setValue, removeValue];
}
