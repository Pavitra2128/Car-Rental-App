import { ClerkProvider, SignIn, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css';
import NavBar from '@/components/NavBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            
            <SignedIn>
              <NavBar />
              {children}
            </SignedIn>
            <SignedOut>
              <SignIn />
            </SignedOut>
          </header>
        </body>
      </html>
    </ClerkProvider>
  )
}