import { MainLayout } from '@/components/templates/main-layout';
import { Container } from '@/components/atoms/container';
import { Heading } from '@/components/atoms/heading';
import { Text } from '@/components/atoms/text';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

/**
 * 문의 페이지
 */

export default function ContactPage() {
  return (
    <MainLayout>
      <Container className="py-20">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <Heading level={1}>문의하기</Heading>
            <Text size="lg" className="text-muted-foreground">
              궁금한 점이 있으시면 언제든 연락주세요.
            </Text>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>문의 폼</CardTitle>
              <CardDescription>
                아래 양식을 작성하여 보내주시면 빠르게 답변드리겠습니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">이름</Label>
                  <Input id="name" placeholder="홍길동" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">제목</Label>
                  <Input id="subject" placeholder="문의 제목을 입력하세요" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">메시지</Label>
                  <Textarea
                    id="message"
                    placeholder="문의 내용을 입력하세요"
                    rows={6}
                  />
                </div>

                <Button type="submit" className="w-full">
                  보내기
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </MainLayout>
  );
}
