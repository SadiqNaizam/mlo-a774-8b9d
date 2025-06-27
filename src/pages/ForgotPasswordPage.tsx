import React from 'react';
import { Link } from 'react-router-dom';

// Custom Layout Components
import AuthHeader from '@/components/layout/AuthHeader';
import AuthFooter from '@/components/layout/AuthFooter';
import AuthFormWrapper from '@/components/AuthFormWrapper';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ForgotPasswordPage = () => {
  console.log('ForgotPasswordPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <AuthHeader />

      <main className="flex-1 flex items-center justify-center p-4">
        <AuthFormWrapper
          title="Forgot Your Password?"
          description="No worries! Enter your email below and we will send you instructions to reset your password."
          footerContent={
            <div className="text-center text-sm text-muted-foreground w-full">
              Remembered your password?{' '}
              <Link
                to="/" // Route from App.tsx for LoginPage
                className="font-semibold text-primary hover:underline"
              >
                Log In
              </Link>
            </div>
          }
        >
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
          </form>
        </AuthFormWrapper>
      </main>

      <AuthFooter />
    </div>
  );
};

export default ForgotPasswordPage;