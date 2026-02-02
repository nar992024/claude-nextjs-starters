'use client';

import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ComponentProps, useState } from 'react';

/**
 * SearchBar 컴포넌트
 * 검색 입력 필드
 */

interface SearchBarProps extends Omit<ComponentProps<typeof Input>, 'type'> {
  onSearch?: (value: string) => void;
  onClear?: () => void;
  showClearButton?: boolean;
}

export function SearchBar({
  onSearch,
  onClear,
  showClearButton = true,
  className,
  ...props
}: SearchBarProps) {
  const [value, setValue] = useState(props.defaultValue || '');

  const handleClear = () => {
    setValue('');
    onClear?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch?.(value as string);
    }
    props.onKeyDown?.(e);
  };

  return (
    <div className={cn('relative', className)}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

      <Input
        type="search"
        className="pl-10 pr-10"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        {...props}
      />

      {showClearButton && value && (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
          onClick={handleClear}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">지우기</span>
        </Button>
      )}
    </div>
  );
}
