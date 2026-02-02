import { Header } from '@/components/organisms/header';
import { Footer } from '@/components/organisms/footer';
import { LayoutProps } from '@/lib/types/components';

/**
 * MainLayout 컴포넌트
 * 기본 메인 레이아웃 (Header + Content + Footer)
 */

export function MainLayout({
  children,
  showHeader = true,
  showFooter = true,
}: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {showHeader && <Header />}

      <main className="flex-1">{children}</main>

      {showFooter && <Footer />}
    </div>
  );
}
