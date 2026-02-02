'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useMounted } from '@/lib/hooks/use-mounted';

/**
 * ThemeToggle 컴포넌트
 * 다크모드 토글 버튼
 */

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  // SSR 시 렌더링하지 않음 (hydration 불일치 방지)
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Sun className="h-5 w-5" />
      </Button>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="테마 전환"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}
