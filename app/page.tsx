import { MainLayout } from '@/components/templates/main-layout';
import { Container } from '@/components/atoms/container';
import { Heading } from '@/components/atoms/heading';
import { Text } from '@/components/atoms/text';
import { Link } from '@/components/atoms/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, Zap, Shield, Palette } from 'lucide-react';
import { ROUTES } from '@/lib/constants/routes';

/**
 * 홈페이지
 * 스타터킷 소개 및 주요 기능 설명
 */

export default function HomePage() {
  const features = [
    {
      icon: Zap,
      title: '빠른 개발',
      description: '검증된 컴포넌트와 유틸리티로 빠르게 프로젝트를 시작하세요.',
    },
    {
      icon: Palette,
      title: '다크모드',
      description: '시스템 설정에 따라 자동으로 전환되는 다크모드를 지원합니다.',
    },
    {
      icon: Shield,
      title: '타입 안정성',
      description: 'TypeScript와 Zod로 타입 안정성을 보장합니다.',
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <Container>
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              v1.0.0
            </Badge>

            <Heading level={1}>
              Next.js 범용 웹 스타터킷
            </Heading>

            <Text size="lg" className="text-muted-foreground">
              어떤 종류의 웹사이트든 사용할 수 있는 체계적이고 확장 가능한
              스타터킷입니다. 계층적 컴포넌트 아키텍처와 검증된 라이브러리를
              활용하세요.
            </Text>

            <div className="flex justify-center gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href={ROUTES.DASHBOARD}>시작하기</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com" external>
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Separator />

      {/* Features Section */}
      <section className="py-20">
        <Container>
          <div className="text-center space-y-4 mb-12">
            <Heading level={2}>주요 특징</Heading>
            <Text className="text-muted-foreground max-w-2xl mx-auto">
              검증된 기술 스택과 모범 사례로 구성된 스타터킷입니다.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title}>
                  <CardHeader>
                    <Icon className="h-10 w-10 mb-2 text-primary" />
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <Separator />

      {/* Tech Stack Section */}
      <section className="py-20 bg-muted/30">
        <Container>
          <div className="text-center space-y-4 mb-12">
            <Heading level={2}>기술 스택</Heading>
            <Text className="text-muted-foreground max-w-2xl mx-auto">
              최신 웹 기술로 구성되어 있습니다.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>프레임워크</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Next.js 16 (App Router)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>React 19</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>TypeScript 5</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>UI 라이브러리</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Tailwind CSS v4</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>shadcn/ui</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Lucide Icons</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>폼 & 검증</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>React Hook Form</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Zod</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>유틸리티</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>next-themes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>date-fns</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      <Separator />

      {/* CTA Section */}
      <section className="py-20">
        <Container>
          <Alert>
            <AlertTitle className="text-xl">지금 바로 시작하세요</AlertTitle>
            <AlertDescription className="mt-2">
              이 스타터킷으로 빠르게 프로젝트를 시작하고, 비즈니스 로직에
              집중하세요.
            </AlertDescription>
            <div className="mt-4">
              <Button asChild>
                <Link href={ROUTES.DASHBOARD}>대시보드 보기</Link>
              </Button>
            </div>
          </Alert>
        </Container>
      </section>
    </MainLayout>
  );
}
