import { ReactNode } from 'react';

/**
 * 공통 컴포넌트 타입 정의
 */

// 기본 Props
export interface BaseProps {
  children?: ReactNode;
  className?: string;
}

// 크기 타입
export type Size = 'sm' | 'md' | 'lg' | 'xl';

// 색상 변형 타입
export type Variant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'ghost'
  | 'link'
  | 'outline';

// 레이아웃 Props
export interface LayoutProps extends BaseProps {
  showHeader?: boolean;
  showFooter?: boolean;
  showSidebar?: boolean;
}

// 타이포그래피 Props
export interface HeadingProps extends BaseProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export interface TextProps extends BaseProps {
  as?: 'p' | 'span' | 'div';
  size?: Size;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}

// 링크 Props
export interface LinkProps extends BaseProps {
  href: string;
  external?: boolean;
  underline?: boolean;
}

// 컨테이너 Props
export interface ContainerProps extends BaseProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  center?: boolean;
  padding?: boolean;
}

// 폼 필드 Props
export interface FormFieldProps extends BaseProps {
  label?: string;
  error?: string;
  required?: boolean;
  description?: string;
}

// 데이터 테이블 Props
export interface DataTableColumn<T = any> {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: T) => ReactNode;
}

export interface DataTableProps<T = any> {
  columns: DataTableColumn<T>[];
  data: T[];
  loading?: boolean;
  onSort?: (key: string, direction: 'asc' | 'desc') => void;
  onRowClick?: (row: T) => void;
  className?: string;
}
