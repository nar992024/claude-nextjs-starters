'use client';

import { useEffect } from 'react';
import { ErrorLayout } from '@/components/templates/error-layout';
import { Button } from '@/components/ui/button';

/**
 * 에러 페이지
 */

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <ErrorLayout
      code={500}
      title="문제가 발생했습니다"
      description={
        error.message || '일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
      }
      actionButton={
        <Button variant="outline" onClick={reset}>
          다시 시도
        </Button>
      }
    />
  );
}
