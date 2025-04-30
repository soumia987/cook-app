import React from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';

const Footer = () => {

  return (
    <footer className="bg-black py-6 shadow-inner">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
          <p className="text-sm text-gray-600">
            © 2025 Mamie's Kitchen. All rights reserved.
          </p>
          <div className="flex items-center text-sm text-gray-600">
            Made with <HeartIcon className="mx-1 h-4 w-4 text-red-500" /> by Mamie's Kitchen Team
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;