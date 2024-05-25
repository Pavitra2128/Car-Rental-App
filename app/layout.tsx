import { ClerkProvider, SignIn, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css';

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