import React from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import AuthHeader from '../components/layout/AuthHeader';
import AuthFooter from '../components/layout/AuthFooter';
import AuthFormWrapper from '../components/AuthFormWrapper';
import SocialAuthButtons from '../components/SocialAuthButtons';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const LoginPage: React.FC = () => {
  console.log('LoginPage loaded');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // In a real application, you would handle form submission here.
    console.log("Login form submitted");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AuthHeader />

      <main className="flex-1 flex items-center justify-center p-4">
        <AuthFormWrapper
          title="Welcome back"
          description="Enter your credentials to access your account."
          footerContent={
            <div className="w-full text-center text-sm">
              Don&apos;t have an account?{' '}
              <Link to="/sign-up" className="font-semibold text-primary hover:underline">
                Sign Up
              </Link>
            </div>
          }
        >
          <form onSubmit={handleLogin} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                autoComplete="email"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" required autoComplete="current-password" />
            </div>
            <Button type="submit" className="w-full mt-2">
              Login
            </Button>
          </form>

          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          
          <SocialAuthButtons />
        </AuthFormWrapper>
      </main>

      <AuthFooter />
    </div>
  );
};

export default LoginPage;