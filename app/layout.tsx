import type { Metadata } from 'next'
import { Geist, Geist_Mono, Manrope, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _manrope = Manrope({ subsets: ["latin"], variable: '--font-manrope' });
const _inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Hansini Samarathunga | Product-Minded Problem Solver',
  description: 'Computer Science graduate passionate about Business Analysis, Product Management, and Digital Innovation. Transforming ideas into meaningful digital solutions.',
  keywords: ['Product Manager', 'Business Analyst', 'Software Developer', 'UX Designer', 'Digital Innovation'],
  creator: 'Hansini Samarathunga',
  metadataBase: new URL('https://hansini.dev'),
  openGraph: {
    title: 'Hansini Samarathunga | Portfolio',
    description: 'Computer Science graduate passionate about bridging technology and people',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning style={{ 
      ...(_manrope.style as any),
      ...(_inter.style as any)
    }}>
      <head>
        <script suppressHydrationWarning>
          {`
            (function() {
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            })();
          `}
        </script>
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
