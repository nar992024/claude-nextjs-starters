import { AuthLayout } from '@/components/templates/auth-layout';
import { Heading } from '@/components/atoms/heading';
import { Text } from '@/components/atoms/text';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SignupForm } from '@/components/forms/signup-form';

/**
 * 회원가입 페이지
 */

export default function SignupPage() {
  return (
    <AuthLayout>
      <div className="text-center space-y-2 mb-6">
        <Heading level={2}>회원가입</Heading>
        <Text className="text-muted-foreground">
          새 계정을 만들어 서비스를 시작하세요
        </Text>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>회원가입</CardTitle>
          <CardDescription>
            아래 정보를 입력하여 계정을 만드세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm />
        </CardContent>
      </Card>
    </AuthLayout>
  );
}
