'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ComponentProps } from 'react';

/**
 * ThemeProvider 컴포넌트
 * next-themes를 사용한 다크모드 제공자
 */

export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
