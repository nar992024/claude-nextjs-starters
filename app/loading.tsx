import { Spinner } from '@/components/atoms/spinner';

/**
 * 로딩 페이지
 */

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Spinner size="lg" />
        <p className="text-muted-foreground">로딩 중...</p>
      </div>
    </div>
  );
}
