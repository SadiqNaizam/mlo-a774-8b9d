import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const AuthHeader: React.FC = () => {
  console.log('AuthHeader loaded');

  return (
    <header className="absolute top-0 w-full py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex items-center justify-start">
        <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight">SmartAuth</span>
        </Link>
      </div>
    </header>
  );
};

export default AuthHeader;