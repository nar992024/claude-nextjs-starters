import { MainLayout } from '@/components/templates/main-layout';
import { Container } from '@/components/atoms/container';
import { Heading } from '@/components/atoms/heading';
import { Text } from '@/components/atoms/text';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * 소개 페이지
 */

export default function AboutPage() {
  return (
    <MainLayout>
      <Container className="py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <Heading level={1}>소개</Heading>
            <Text size="lg" className="text-muted-foreground">
              Next.js 범용 웹 스타터킷에 대해 알아보세요.
            </Text>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>스타터킷 소개</CardTitle>
              <CardDescription>
                체계적이고 확장 가능한 웹 개발 기반
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Text>
                이 스타터킷은 어떤 종류의 웹사이트든 빠르게 시작할 수 있도록
                설계되었습니다. 계층적 컴포넌트 아키텍처(Atoms → Molecules →
                Organisms → Templates → Pages)를 따르며, 검증된 라이브러리만을
                사용합니다.
              </Text>

              <Text>
                "바퀴를 재발명하지 마라" 원칙에 따라 React Hook Form, Zod,
                next-themes, date-fns 등 업계 표준 라이브러리를 활용합니다.
              </Text>

              <Text>
                모든 컴포넌트는 접근성을 고려하여 작성되었으며, 반응형 디자인과
                다크모드를 기본으로 지원합니다.
              </Text>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>아키텍처</CardTitle>
              <CardDescription>5단계 계층 구조</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Text weight="semibold">Level 1: Atoms</Text>
                <Text size="sm" className="text-muted-foreground">
                  버튼, 입력, 텍스트 등 기본 UI 요소
                </Text>
              </div>
              <div>
                <Text weight="semibold">Level 2: Molecules</Text>
                <Text size="sm" className="text-muted-foreground">
                  폼 필드, 검색바 등 조합형 컴포넌트
                </Text>
              </div>
              <div>
                <Text weight="semibold">Level 3: Organisms</Text>
                <Text size="sm" className="text-muted-foreground">
                  헤더, 푸터, 네비게이션 등 복잡한 UI 블록
                </Text>
              </div>
              <div>
                <Text weight="semibold">Level 4: Templates</Text>
                <Text size="sm" className="text-muted-foreground">
                  메인 레이아웃, 대시보드 레이아웃 등 페이지 구조
                </Text>
              </div>
              <div>
                <Text weight="semibold">Level 5: Pages</Text>
                <Text size="sm" className="text-muted-foreground">
                  실제 라우트와 연결된 완성된 페이지
                </Text>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </MainLayout>
  );
}
