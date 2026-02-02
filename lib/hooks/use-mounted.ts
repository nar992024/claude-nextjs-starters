'use client';

import { useEffect, useState } from 'react';

/**
 * 마운트 상태 훅
 * 컴포넌트가 마운트되었는지 확인합니다.
 * SSR 시 hydration 불일치를 방지하는데 유용합니다.
 */

export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
