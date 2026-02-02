import { ErrorLayout } from '@/components/templates/error-layout';

/**
 * 404 Not Found 페이지
 */

export default function NotFound() {
  return (
    <ErrorLayout
      code={404}
      title="페이지를 찾을 수 없습니다"
      description="요청하신 페이지가 존재하지 않거나 이동되었습니다."
    />
  );
}
