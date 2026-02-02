import { MainLayout } from '@/components/templates/main-layout';
import { Container } from '@/components/atoms/container';
import { Heading } from '@/components/atoms/heading';
import { Text } from '@/components/atoms/text';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Activity, Users, CreditCard, TrendingUp } from 'lucide-react';

/**
 * 대시보드 페이지
 */

export default function DashboardPage() {
  const stats = [
    {
      title: '총 사용자',
      value: '1,234',
      change: '+12.5%',
      icon: Users,
      trend: 'up',
    },
    {
      title: '활성 세션',
      value: '567',
      change: '+8.2%',
      icon: Activity,
      trend: 'up',
    },
    {
      title: '매출',
      value: '₩12,345,678',
      change: '+23.1%',
      icon: CreditCard,
      trend: 'up',
    },
    {
      title: '성장률',
      value: '18.5%',
      change: '+3.2%',
      icon: TrendingUp,
      trend: 'up',
    },
  ];

  return (
    <MainLayout>
      <Container className="py-12">
        <div className="space-y-8">
          {/* 헤더 */}
          <div>
            <Heading level={1}>대시보드</Heading>
            <Text className="text-muted-foreground mt-2">
              프로젝트의 주요 지표를 한눈에 확인하세요.
            </Text>
          </div>

          {/* 통계 카드 그리드 */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.title}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {stat.title}
                    </CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="flex items-center gap-1 mt-1">
                      <Badge
                        variant={stat.trend === 'up' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {stat.change}
                      </Badge>
                      <Text size="sm" className="text-muted-foreground">
                        지난달 대비
                      </Text>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* 최근 활동 */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>최근 활동</CardTitle>
                <CardDescription>
                  최근 시스템에서 발생한 이벤트입니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <div className="flex-1">
                    <Text size="sm" weight="medium">
                      새로운 사용자 등록
                    </Text>
                    <Text size="sm" className="text-muted-foreground">
                      2분 전
                    </Text>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <div className="flex-1">
                    <Text size="sm" weight="medium">
                      결제 완료
                    </Text>
                    <Text size="sm" className="text-muted-foreground">
                      15분 전
                    </Text>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-muted" />
                  <div className="flex-1">
                    <Text size="sm" weight="medium">
                      시스템 업데이트
                    </Text>
                    <Text size="sm" className="text-muted-foreground">
                      1시간 전
                    </Text>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>시스템 상태</CardTitle>
                <CardDescription>
                  현재 시스템 상태를 확인하세요.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Text size="sm">API 서버</Text>
                    <Badge variant="default">정상</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <Text size="sm">데이터베이스</Text>
                    <Badge variant="default">정상</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <Text size="sm">CDN</Text>
                    <Badge variant="default">정상</Badge>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <Text size="sm" weight="medium">
                    로딩 스켈레톤 예시:
                  </Text>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                  <Skeleton className="h-4 w-3/5" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
}
