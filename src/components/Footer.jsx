import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-gray-300 py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-lg font-semibold text-white mb-4">
          Explore Famous Hindu Temples of India
        </h2>
        <p className="text-sm mb-6">
          Discover the heritage, stories, and spiritual significance of India's iconic temples.
        </p>

        <div className="flex justify-center space-x-6 mb-6">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/about" className="hover:text-white">About Us</a>
          <a href="/" className="hover:text-white">Temple Guide</a>
        </div>

        <div className="text-sm mb-4">
          Devloped By - Shivam Gupta
        </div>

        <div className="text-xs text-gray-500">
          <p>Copyright © 2024 Explore Famous Hindu Temples of India. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
