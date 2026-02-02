import { Container } from '@/components/atoms/container';
import { BaseProps } from '@/lib/types/components';

/**
 * AuthLayout 컴포넌트
 * 인증 페이지 레이아웃 (중앙 정렬)
 */

export function AuthLayout({ children }: BaseProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40">
      <Container maxWidth="sm" className="py-12">
        <div className="w-full space-y-6">{children}</div>
      </Container>
    </div>
  );
}
