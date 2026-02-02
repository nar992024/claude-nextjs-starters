import { AuthLayout } from '@/components/templates/auth-layout';
import { Heading } from '@/components/atoms/heading';
import { Text } from '@/components/atoms/text';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LoginForm } from '@/components/forms/login-form';

/**
 * 로그인 페이지
 */

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="text-center space-y-2 mb-6">
        <Heading level={2}>로그인</Heading>
        <Text className="text-muted-foreground">
          계정에 로그인하여 서비스를 이용하세요
        </Text>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>로그인</CardTitle>
          <CardDescription>
            이메일과 비밀번호를 입력하여 로그인하세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </AuthLayout>
  );
}
