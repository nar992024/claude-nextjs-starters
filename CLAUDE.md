# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
npm run dev    # Start development server (http://localhost:3000)
npm run build  # Create production build
npm run start  # Run production server
npm run lint   # Run ESLint
```

### Adding shadcn/ui Components
```bash
npx shadcn@latest add [component-name]  # Add new shadcn/ui component to components/ui/
```

## Architecture Overview

### Component Hierarchy (5 Levels)

This project follows **Atomic Design** principles with a strict 5-level hierarchy:

**Level 1: Atoms** (`components/atoms/` + `components/ui/`)
- Basic building blocks (Heading, Text, Link, Spinner, Container)
- shadcn/ui primitives (Button, Input, Label, etc.)
- No dependencies on other custom components

**Level 2: Molecules** (`components/molecules/`)
- Combinations of atoms (FormField = Label + Input + Error)
- Examples: SearchBar, PasswordInput
- May depend on: Atoms, shadcn/ui

**Level 3: Organisms** (`components/organisms/`)
- Complex UI blocks (Header, Footer, ThemeToggle)
- May depend on: Atoms, Molecules, shadcn/ui

**Level 4: Templates** (`components/templates/`)
- Page layouts without data (MainLayout, AuthLayout, ErrorLayout)
- Compose organisms and define page structure
- May depend on: Atoms, Molecules, Organisms, shadcn/ui

**Level 5: Pages** (`app/*/page.tsx`)
- Complete pages with data
- Use templates and pass real content
- Next.js App Router pages

### Forms Architecture

All forms use **React Hook Form + Zod**:

1. Define Zod schema in `lib/validations/`
2. Use `zodResolver` with `useForm`
3. Infer TypeScript types with `z.infer<typeof schema>`
4. Place form components in `components/forms/`

Example:
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

### Theme System

- **Provider**: `ThemeProvider` wraps root layout in `app/layout.tsx`
- **Hook**: Use `useTheme()` from `next-themes` in client components
- **SSR**: Always use `useMounted()` hook before rendering theme-dependent content to prevent hydration mismatches
- **Styling**: Tailwind classes with `dark:` variant, CSS variables in `globals.css`

### Path Aliases

Use `@/` prefix for all imports:
```tsx
import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/lib/hooks';
import { ROUTES } from '@/lib/constants/routes';
```

### Utility Libraries

**Formatting** (`lib/utils/format.ts`):
- `formatDate()`, `formatDateTime()` - date-fns with Korean locale
- `formatNumber()`, `formatCurrency()` - Intl.NumberFormat
- `truncate()`, `capitalize()`, `slugify()` - String utilities

**Validation** (`lib/utils/validation.ts`):
- Runtime validation helpers (email, URL, phone, password strength)
- Use for client-side checks; use Zod schemas for form validation

**Constants**:
- `lib/constants/routes.ts` - All route paths (use `ROUTES.HOME`, not hardcoded strings)
- `lib/constants/config.ts` - App config, breakpoints, validation rules

### Custom Hooks

**`lib/hooks/use-media-query.ts`**:
```tsx
const isMobile = useMediaQuery('(max-width: 768px)');
// Convenience: useIsMobile(), useIsTablet(), useIsDesktop()
```

**`lib/hooks/use-mounted.ts`**:
```tsx
const mounted = useMounted();
if (!mounted) return null; // Prevent SSR/client mismatch
```

**`lib/hooks/use-local-storage.ts`**:
```tsx
const [value, setValue, removeValue] = useLocalStorage('key', defaultValue);
```

**`lib/hooks/use-debounce.ts`**:
```tsx
const debouncedValue = useDebounce(searchTerm, 500);
```

## Key Patterns

### Creating New Pages

1. Create folder in `app/` directory
2. Add `page.tsx` using a template:
```tsx
import { MainLayout } from '@/components/templates/main-layout';
import { Container } from '@/components/atoms/container';

export default function Page() {
  return (
    <MainLayout>
      <Container className="py-20">
        {/* Content */}
      </Container>
    </MainLayout>
  );
}
```

### Route Groups

- Use `(auth)` for grouping without affecting URL: `app/(auth)/login/page.tsx` → `/login`
- Allows separate layouts: `app/(auth)/layout.tsx`

### Client vs Server Components

- **Default**: Server Components (no `'use client'` directive)
- **Require `'use client'`**: Hooks (useState, useEffect, useTheme), event handlers, browser APIs
- **Pattern**: Keep logic server-side, push `'use client'` to leaf components

### Adding shadcn/ui Components

When you need a new shadcn/ui component:
1. Run: `npx shadcn@latest add [component-name]`
2. Component appears in `components/ui/`
3. Import and use in higher-level components

### Styling Conventions

- Use Tailwind utility classes
- Use `cn()` helper from `lib/utils` for conditional classes:
```tsx
import { cn } from '@/lib/utils';
className={cn('base-classes', condition && 'conditional-classes', className)}
```
- Follow responsive pattern: mobile-first, then `sm:`, `md:`, `lg:`, `xl:`

### Type Safety

- All component props must have TypeScript interfaces
- Use types from `lib/types/components.ts` and `lib/types/api.ts`
- Prefer `type` over `interface` for simple shapes
- Export types alongside components for reuse

### Language Conventions

- **Korean**: Comments, commit messages, user-facing text, documentation
- **English**: Variable names, function names, file names, type names

## Current State (Phase 1)

**Completed**:
- 5-level component hierarchy
- 10 shadcn/ui components
- React Hook Form + Zod integration
- Dark mode (next-themes)
- 9 pages (home, about, contact, dashboard, login, signup, 404, error, loading)
- 4 custom hooks
- Utility libraries

**Not Yet Implemented** (Phase 2):
- `lib/api/` - API client (axios + React Query)
- `lib/store/` - Client state (zustand)
- Toast notifications (sonner)
- Advanced organisms (NavigationMenu, MobileMenu, UserMenu, DataTable)
- File upload components

## Project-Specific Notes

- This is a **universal starter kit** - prioritize flexibility and reusability
- Follow "Don't reinvent the wheel" - use proven libraries
- Maintain strict component hierarchy - never skip levels
- All forms must use React Hook Form + Zod (no uncontrolled forms)
- Accessibility is mandatory - include ARIA attributes, keyboard navigation, sr-only text
- Mobile-first responsive design
