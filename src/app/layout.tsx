import React from 'react';
import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full bg-blue-950 font-mono text-white ">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
