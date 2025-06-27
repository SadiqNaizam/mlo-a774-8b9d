import React from 'react';
import { Link } from 'react-router-dom';

import AuthHeader from '@/components/layout/AuthHeader';
import AuthFooter from '@/components/layout/AuthFooter';
import AuthFormWrapper from '@/components/AuthFormWrapper';
import SocialAuthButtons from '@/components/SocialAuthButtons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const SignUpPage = () => {
  console.log('SignUpPage loaded');

  const handleSignUp = (event: React.FormEvent) => {
    event.preventDefault();
    // In a real application, you would handle form submission here.
    console.log('Creating account...');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AuthHeader />
      <main className="flex-grow flex items-center justify-center p-4">
        <AuthFormWrapper
          title="Create an Account"
          description="Enter your information to get started."
          footerContent={
            <div className="text-center text-sm text-muted-foreground w-full">
              Already have an account?{' '}
              <Link
                to="/" // Path from App.tsx for LoginPage
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                Log in
              </Link>
            </div>
          }
        >
          <form onSubmit={handleSignUp} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" required />
            </div>
            <Button type="submit" className="w-full mt-2">
              Create Account
            </Button>
          </form>

          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <Separator />
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

export default SignUpPage;