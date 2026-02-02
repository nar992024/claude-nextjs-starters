import { Container } from '@/components/atoms/container';
import { Link } from '@/components/atoms/link';
import { Separator } from '@/components/ui/separator';
import { ROUTES } from '@/lib/constants/routes';

/**
 * Footer 컴포넌트
 * 기본 푸터
 */

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* 브랜드 */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Next.js Starter</h3>
              <p className="text-sm text-muted-foreground">
                범용 웹 스타터킷
              </p>
            </div>

            {/* 페이지 링크 */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">페이지</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href={ROUTES.HOME}>홈</Link>
                </li>
                <li>
                  <Link href={ROUTES.ABOUT}>소개</Link>
                </li>
                <li>
                  <Link href={ROUTES.CONTACT}>문의</Link>
                </li>
                <li>
                  <Link href={ROUTES.DASHBOARD}>대시보드</Link>
                </li>
              </ul>
            </div>

            {/* 법률 */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">법률</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy">개인정보처리방침</Link>
                </li>
                <li>
                  <Link href="/terms">이용약관</Link>
                </li>
              </ul>
            </div>

            {/* 소셜 */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">소셜</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="https://github.com" external>
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com" external>
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        <div className="py-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Next.js Starter. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
