# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)가 이 저장소에서 작업할 때 필요한 가이드를 제공합니다.

## 명령어

### 개발
```bash
npm run dev    # 개발 서버 실행 (http://localhost:3000)
npm run build  # 프로덕션 빌드 생성
npm run start  # 프로덕션 서버 실행
npm run lint   # ESLint 실행
```

### shadcn/ui 컴포넌트 추가
```bash
npx shadcn@latest add [component-name]  # components/ui/에 새 shadcn/ui 컴포넌트 추가
```

## 아키텍처 개요

### 컴포넌트 계층 구조 (5단계)

이 프로젝트는 엄격한 5단계 계층 구조로 **Atomic Design** 원칙을 따릅니다:

**Level 1: Atoms** (`components/atoms/` + `components/ui/`)
- 기본 빌딩 블록 (Heading, Text, Link, Spinner, Container)
- shadcn/ui 프리미티브 (Button, Input, Label 등)
- 다른 커스텀 컴포넌트에 의존하지 않음

**Level 2: Molecules** (`components/molecules/`)
- Atoms의 조합 (FormField = Label + Input + Error)
- 예시: SearchBar, PasswordInput
- 의존 가능: Atoms, shadcn/ui

**Level 3: Organisms** (`components/organisms/`)
- 복잡한 UI 블록 (Header, Footer, ThemeToggle)
- 의존 가능: Atoms, Molecules, shadcn/ui

**Level 4: Templates** (`components/templates/`)
- 데이터 없는 페이지 레이아웃 (MainLayout, AuthLayout, ErrorLayout)
- Organisms를 조합하고 페이지 구조 정의
- 의존 가능: Atoms, Molecules, Organisms, shadcn/ui

**Level 5: Pages** (`app/*/page.tsx`)
- 데이터가 있는 완성된 페이지
- Template을 사용하고 실제 콘텐츠 전달
- Next.js App Router 페이지

### 폼 아키텍처

모든 폼은 **React Hook Form + Zod**를 사용합니다:

1. `lib/validations/`에 Zod 스키마 정의
2. `useForm`과 함께 `zodResolver` 사용
3. `z.infer<typeof schema>`로 TypeScript 타입 추론
4. `components/forms/`에 폼 컴포넌트 배치

예시:
```tsx
const schema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

type FormData = z.infer<typeof schema>;

const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
  resolver: zodResolver(schema),
});
```

### 테마 시스템

- **Provider**: `app/layout.tsx`의 루트 레이아웃을 `ThemeProvider`로 감싸기
- **Hook**: 클라이언트 컴포넌트에서 `next-themes`의 `useTheme()` 사용
- **SSR**: 하이드레이션 불일치 방지를 위해 테마 의존적 콘텐츠 렌더링 전에 항상 `useMounted()` 훅 사용
- **스타일링**: `dark:` 변형이 있는 Tailwind 클래스, `globals.css`의 CSS 변수

### 경로 별칭

모든 import에 `@/` 접두사 사용:
```tsx
import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/lib/hooks';
import { ROUTES } from '@/lib/constants/routes';
```

### 유틸리티 라이브러리

**포맷팅** (`lib/utils/format.ts`):
- `formatDate()`, `formatDateTime()` - date-fns와 한국어 로케일
- `formatNumber()`, `formatCurrency()` - Intl.NumberFormat
- `truncate()`, `capitalize()`, `slugify()` - 문자열 유틸리티

**검증** (`lib/utils/validation.ts`):
- 런타임 검증 헬퍼 (이메일, URL, 전화번호, 비밀번호 강도)
- 클라이언트 측 검사에 사용; 폼 검증에는 Zod 스키마 사용

**상수**:
- `lib/constants/routes.ts` - 모든 라우트 경로 (하드코딩된 문자열 대신 `ROUTES.HOME` 사용)
- `lib/constants/config.ts` - 앱 설정, 브레이크포인트, 검증 규칙

### 커스텀 훅

**`lib/hooks/use-media-query.ts`**:
```tsx
const isMobile = useMediaQuery('(max-width: 768px)');
// 편의 함수: useIsMobile(), useIsTablet(), useIsDesktop()
```

**`lib/hooks/use-mounted.ts`**:
```tsx
const mounted = useMounted();
if (!mounted) return null; // SSR/클라이언트 불일치 방지
```

**`lib/hooks/use-local-storage.ts`**:
```tsx
const [value, setValue, removeValue] = useLocalStorage('key', defaultValue);
```

**`lib/hooks/use-debounce.ts`**:
```tsx
const debouncedValue = useDebounce(searchTerm, 500);
```

## 주요 패턴

### 새 페이지 생성

1. `app/` 디렉토리에 폴더 생성
2. 템플릿을 사용하여 `page.tsx` 추가:
```tsx
import { MainLayout } from '@/components/templates/main-layout';
import { Container } from '@/components/atoms/container';

export default function Page() {
  return (
    <MainLayout>
      <Container className="py-20">
        {/* 콘텐츠 */}
      </Container>
    </MainLayout>
  );
}
```

### 라우트 그룹

- URL에 영향을 주지 않고 그룹화하려면 `(auth)` 사용: `app/(auth)/login/page.tsx` → `/login`
- 별도 레이아웃 허용: `app/(auth)/layout.tsx`

### 클라이언트 vs 서버 컴포넌트

- **기본값**: 서버 컴포넌트 (`'use client'` 지시문 없음)
- **`'use client'` 필요**: 훅 (useState, useEffect, useTheme), 이벤트 핸들러, 브라우저 API
- **패턴**: 로직을 서버 측에 유지하고, `'use client'`를 리프 컴포넌트로 푸시

### shadcn/ui 컴포넌트 추가

새 shadcn/ui 컴포넌트가 필요할 때:
1. 실행: `npx shadcn@latest add [component-name]`
2. 컴포넌트가 `components/ui/`에 나타남
3. 상위 레벨 컴포넌트에서 import 및 사용

### 스타일링 규칙

- Tailwind 유틸리티 클래스 사용
- 조건부 클래스를 위해 `lib/utils`의 `cn()` 헬퍼 사용:
```tsx
import { cn } from '@/lib/utils';
className={cn('base-classes', condition && 'conditional-classes', className)}
```
- 반응형 패턴 따르기: 모바일 우선, 그 다음 `sm:`, `md:`, `lg:`, `xl:`

### 타입 안정성

- 모든 컴포넌트 props는 TypeScript 인터페이스를 가져야 함
- `lib/types/components.ts`와 `lib/types/api.ts`의 타입 사용
- 간단한 형태에는 `interface`보다 `type` 선호
- 재사용을 위해 컴포넌트와 함께 타입 export

### 언어 규칙

- **한국어**: 주석, 커밋 메시지, 사용자 대면 텍스트, 문서
- **영어**: 변수명, 함수명, 파일명, 타입명

## 현재 상태 (Phase 1)

**완료됨**:
- 5단계 컴포넌트 계층 구조
- 10개 shadcn/ui 컴포넌트
- React Hook Form + Zod 통합
- 다크모드 (next-themes)
- 9개 페이지 (home, about, contact, dashboard, login, signup, 404, error, loading)
- 4개 커스텀 훅
- 유틸리티 라이브러리

**미구현** (Phase 2):
- `lib/api/` - API 클라이언트 (axios + React Query)
- `lib/store/` - 클라이언트 상태 (zustand)
- Toast 알림 (sonner)
- 고급 organisms (NavigationMenu, MobileMenu, UserMenu, DataTable)
- 파일 업로드 컴포넌트

## 프로젝트 특정 참고사항

- 이것은 **범용 스타터킷**입니다 - 유연성과 재사용성을 우선시
- "바퀴를 재발명하지 마라" 원칙 준수 - 검증된 라이브러리 사용
- 엄격한 컴포넌트 계층 유지 - 절대 레벨 건너뛰지 말 것
- 모든 폼은 React Hook Form + Zod 사용 필수 (비제어 폼 금지)
- 접근성은 필수 - ARIA 속성, 키보드 네비게이션, sr-only 텍스트 포함
- 모바일 우선 반응형 디자인
