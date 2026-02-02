# Next.js 범용 웹 스타터킷

어떤 종류의 웹사이트든 사용할 수 있는 체계적이고 확장 가능한 범용 스타터킷입니다.

## 🚀 주요 특징

- ✅ **계층적 컴포넌트 아키텍처**: Atoms → Molecules → Organisms → Templates → Pages
- ✅ **검증된 라이브러리 활용**: "바퀴를 재발명하지 마라" 원칙
- ✅ **타입 안정성**: TypeScript + Zod로 완벽한 타입 체크
- ✅ **다크모드**: 시스템 설정에 따라 자동 전환
- ✅ **반응형 디자인**: 모바일, 태블릿, 데스크톱 완벽 지원
- ✅ **접근성**: WCAG 기준 준수

## 📦 기술 스택

### 프레임워크 & 언어
- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**

### UI & 스타일링
- **Tailwind CSS v4**
- **shadcn/ui** (New York 스타일)
- **Lucide Icons**

### 폼 & 검증
- **React Hook Form** - 비제어 컴포넌트 기반 고성능 폼
- **Zod** - 타입 안전 스키마 검증

### 유틸리티
- **next-themes** - 다크모드 관리
- **date-fns** - 날짜 처리
- **class-variance-authority** - 조건부 클래스 관리

## 📁 디렉토리 구조

```
claude-nextjs-starters/
├── app/                          # Next.js 앱 라우터
│   ├── (auth)/                   # 인증 라우트 그룹
│   │   ├── login/
│   │   └── signup/
│   ├── about/
│   ├── contact/
│   ├── dashboard/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── error.tsx
│   ├── not-found.tsx
│   └── loading.tsx
├── components/
│   ├── ui/                       # shadcn/ui 컴포넌트 (Level 1)
│   ├── atoms/                    # 기본 UI 요소 (Level 1)
│   │   ├── heading.tsx
│   │   ├── text.tsx
│   │   ├── link.tsx
│   │   ├── spinner.tsx
│   │   └── container.tsx
│   ├── molecules/                # 조합형 컴포넌트 (Level 2)
│   │   ├── form-field.tsx
│   │   ├── search-bar.tsx
│   │   └── password-input.tsx
│   ├── organisms/                # 복잡한 UI 블록 (Level 3)
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── theme-toggle.tsx
│   ├── templates/                # 페이지 레이아웃 (Level 4)
│   │   ├── main-layout.tsx
│   │   ├── auth-layout.tsx
│   │   └── error-layout.tsx
│   ├── forms/                    # 폼 컴포넌트
│   │   ├── login-form.tsx
│   │   └── signup-form.tsx
│   └── providers/                # Context Providers
│       └── theme-provider.tsx
├── lib/
│   ├── api/                      # API 클라이언트 (Phase 2에서 구현)
│   ├── hooks/                    # 커스텀 훅
│   │   ├── use-media-query.ts
│   │   ├── use-local-storage.ts
│   │   ├── use-debounce.ts
│   │   └── use-mounted.ts
│   ├── validations/              # Zod 스키마
│   │   ├── common.ts
│   │   └── auth.ts
│   ├── store/                    # 상태 관리 (Phase 2에서 구현)
│   ├── utils/                    # 유틸리티 함수
│   │   ├── cn.ts
│   │   ├── format.ts
│   │   └── validation.ts
│   ├── constants/                # 상수
│   │   ├── routes.ts
│   │   └── config.ts
│   └── types/                    # TypeScript 타입
│       ├── components.ts
│       └── api.ts
└── public/                       # 정적 파일
```

## 🎨 컴포넌트 계층 구조

### Level 1: Atoms (기본 UI 요소)
- `Heading` - 타이포그래피 제목
- `Text` - 본문 텍스트
- `Link` - Next.js Link 래퍼
- `Spinner` - 로딩 스피너
- `Container` - 반응형 컨테이너
- ShadcnUI 컴포넌트 (Button, Input, Label 등)

### Level 2: Molecules (조합형 컴포넌트)
- `FormField` - Label + Input + Error 조합
- `SearchBar` - 검색 입력
- `PasswordInput` - 비밀번호 입력 (보기/숨기기)

### Level 3: Organisms (복잡한 UI 블록)
- `Header` - 기본 헤더
- `Footer` - 기본 푸터
- `ThemeToggle` - 다크모드 토글

### Level 4: Templates (페이지 레이아웃)
- `MainLayout` - Header + Content + Footer
- `AuthLayout` - 중앙 정렬 인증 레이아웃
- `ErrorLayout` - 에러 페이지 레이아웃

### Level 5: Pages (완성된 페이지)
- 홈페이지 (`/`)
- 소개 (`/about`)
- 문의 (`/contact`)
- 대시보드 (`/dashboard`)
- 로그인 (`/login`)
- 회원가입 (`/signup`)
- 404 페이지
- 에러 페이지

## 🚀 빠른 시작

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 📚 사용 가이드

### 새 페이지 추가

1. `app/` 디렉토리에 새 폴더 생성
2. `page.tsx` 파일 생성
3. 레이아웃 컴포넌트로 감싸기

```tsx
import { MainLayout } from '@/components/templates/main-layout';
import { Container } from '@/components/atoms/container';
import { Heading } from '@/components/atoms/heading';

export default function NewPage() {
  return (
    <MainLayout>
      <Container className="py-20">
        <Heading level={1}>새 페이지</Heading>
      </Container>
    </MainLayout>
  );
}
```

### 폼 생성

React Hook Form + Zod를 사용합니다:

```tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('올바른 이메일을 입력하세요'),
  message: z.string().min(10, '최소 10자 이상 입력하세요'),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 폼 필드들 */}
    </form>
  );
}
```

### 다크모드 사용

`useTheme` 훅으로 테마를 제어합니다:

```tsx
'use client';

import { useTheme } from 'next-themes';

export function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      테마 전환
    </button>
  );
}
```

### 커스텀 훅 사용

```tsx
import { useMediaQuery, useDebounce } from '@/lib/hooks';

export function Component() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const debouncedValue = useDebounce(searchTerm, 500);

  // ...
}
```

## 🔮 Phase 2 구현 예정

Phase 2에서는 다음 기능들이 추가됩니다:

### 추가 패키지
- **sonner** - Toast 알림
- **@tanstack/react-query** - 서버 상태 관리
- **axios** - HTTP 클라이언트
- **zustand** - 클라이언트 상태 관리
- **react-dropzone** - 파일 업로드

### 추가 컴포넌트
- 고급 Organisms (NavigationMenu, MobileMenu, UserMenu, DataTable)
- 추가 Forms (ContactForm 등)
- API 클라이언트 설정
- 상태 관리 스토어

## 📝 라이선스

MIT License

## 🤝 기여

이슈와 풀 리퀘스트를 환영합니다!

## 📞 문의

문제가 있거나 제안사항이 있으시면 이슈를 생성해주세요.
