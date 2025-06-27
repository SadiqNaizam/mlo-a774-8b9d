import React from 'react';
import { Link } from 'react-router-dom';

const AuthFooter: React.FC = () => {
  console.log('AuthFooter loaded');
  
  return (
    <footer className="w-full py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2">
        <Link 
          to="#" 
          className="text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          Terms of Service
        </Link>
        <Link 
          to="#" 
          className="text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default AuthFooter;