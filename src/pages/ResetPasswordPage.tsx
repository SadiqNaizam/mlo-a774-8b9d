import React from 'react';
import { Link } from 'react-router-dom';

import AuthHeader from '@/components/layout/AuthHeader';
import AuthFooter from '@/components/layout/AuthFooter';
import AuthFormWrapper from '@/components/AuthFormWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ResetPasswordPage = () => {
  console.log('ResetPasswordPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <AuthHeader />
      <main className="flex-grow flex items-center justify-center p-4">
        <AuthFormWrapper
          title="Set a New Password"
          description="Please enter and confirm your new password below."
          footerContent={
            <div className="w-full text-center text-sm">
              <Link to="/" className="font-semibold text-primary hover:underline">
                Back to Login
              </Link>
            </div>
          }
        >
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="password">New Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
            <Button type="submit" className="w-full mt-2">
              Reset Password
            </Button>
          </form>
        </AuthFormWrapper>
      </main>
      <AuthFooter />
    </div>
  );
};

export default ResetPasswordPage;