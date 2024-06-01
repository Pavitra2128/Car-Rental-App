import React from 'react';
import { ClerkProvider, SignIn, SignedOut } from '@clerk/nextjs';
import './globals.css';
import NavBar from '@/components/NavBar';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <NavBar />
          </header>
          <main>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}

