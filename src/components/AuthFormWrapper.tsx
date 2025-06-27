import React from 'react';
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AuthFormWrapperProps {
  /**
   * The main title of the form (e.g., "Welcome back").
   */
  title: string;
  /**
   * A short description or instruction below the title.
   */
  description: string;
  /**
   * The main content of the wrapper, typically the form fields and submit button.
   */
  children: React.ReactNode;
  /**
   * Optional content to be displayed in the footer, ideal for links.
   */
  footerContent?: React.ReactNode;
  /**
   * Optional additional class names for the card container.
   */
  className?: string;
}

const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({
  title,
  description,
  children,
  footerContent,
  className,
}) => {
  console.log('AuthFormWrapper loaded');

  return (
    <Card className={cn("w-full max-w-md", className)}>
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-2xl font-bold tracking-tight">
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {children}
      </CardContent>
      {footerContent && (
        <CardFooter>
          {footerContent}
        </CardFooter>
      )}
    </Card>
  );
};

export default AuthFormWrapper;