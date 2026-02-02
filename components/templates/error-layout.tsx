import { Container } from '@/components/atoms/container';
import { Heading } from '@/components/atoms/heading';
import { Text } from '@/components/atoms/text';
import { Button } from '@/components/ui/button';
import { Link } from '@/components/atoms/link';
import { ROUTES } from '@/lib/constants/routes';
import { BaseProps } from '@/lib/types/components';

/**
 * ErrorLayout 컴포넌트
 * 에러 페이지 레이아웃
 */

interface ErrorLayoutProps extends BaseProps {
  title: string;
  description: string;
  code?: string | number;
  showHomeButton?: boolean;
  actionButton?: React.ReactNode;
}

export function ErrorLayout({
  title,
  description,
  code,
  showHomeButton = true,
  actionButton,
}: ErrorLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40">
      <Container maxWidth="md" className="text-center">
        {code && (
          <div className="mb-8">
            <span className="text-9xl font-bold text-muted-foreground/20">
              {code}
            </span>
          </div>
        )}

        <div className="space-y-4">
          <Heading level={1} className="text-center">
            {title}
          </Heading>

          <Text size="lg" className="text-center text-muted-foreground">
            {description}
          </Text>

          <div className="flex justify-center gap-4 pt-6">
            {showHomeButton && (
              <Button asChild>
                <Link href={ROUTES.HOME}>홈으로 돌아가기</Link>
              </Button>
            )}

            {actionButton}
          </div>
        </div>
      </Container>
    </div>
  );
}
