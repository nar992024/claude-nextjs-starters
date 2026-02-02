import { Link } from '@/components/atoms/link';
import { Container } from '@/components/atoms/container';
import { ThemeToggle } from '@/components/organisms/theme-toggle';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants/routes';

/**
 * Header 컴포넌트
 * 기본 헤더
 */

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center gap-6">
            <Link href={ROUTES.HOME} className="flex items-center space-x-2">
              <span className="font-bold text-xl">Next.js Starter</span>
            </Link>

            {/* 네비게이션 */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href={ROUTES.ABOUT}>소개</Link>
              <Link href={ROUTES.CONTACT}>문의</Link>
              <Link href={ROUTES.DASHBOARD}>대시보드</Link>
            </nav>
          </div>

          {/* 우측 액션 */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" asChild>
              <Link href={ROUTES.AUTH.LOGIN}>로그인</Link>
            </Button>
            <Button asChild>
              <Link href={ROUTES.AUTH.SIGNUP}>회원가입</Link>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
