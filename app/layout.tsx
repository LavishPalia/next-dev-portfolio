import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),

  title: 'Lavish Palia 😊 Protfolio',
  authors: {
    name: 'Lavish Palia',
  },

  description:
    "Based in India, I'm a Fullstack developer passionate about building modern web applications that users love",
  openGraph: {
    title: 'Lavish Palia',
    description:
      "Based in India, I'm a Fullstack developer passionate about building modern web applications that users love",
    url: 'http://localhost:3000',
    siteName: 'Lavish Palia',
    images: '/og.png',
    type: 'website',
  },
  keywords: ['Developer Portfolio', 'Lavish Palia', 'nextjs', 'tailwind css'],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
