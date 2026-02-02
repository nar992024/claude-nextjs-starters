import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { FormFieldProps } from '@/lib/types/components';
import { ComponentProps } from 'react';

/**
 * FormField 컴포넌트
 * Label + Input + Error 메시지를 조합한 폼 필드
 */

interface FormFieldComponentProps
  extends FormFieldProps,
    Omit<ComponentProps<typeof Input>, 'label'> {
  id: string;
}

export function FormField({
  id,
  label,
  error,
  required,
  description,
  className,
  ...inputProps
}: FormFieldComponentProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {label && (
        <Label htmlFor={id}>
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
      )}

      <Input
        id={id}
        aria-invalid={!!error}
        aria-describedby={
          error ? `${id}-error` : description ? `${id}-description` : undefined
        }
        {...inputProps}
      />

      {description && !error && (
        <p
          id={`${id}-description`}
          className="text-sm text-muted-foreground"
        >
          {description}
        </p>
      )}

      {error && (
        <p
          id={`${id}-error`}
          className="text-sm text-destructive"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
