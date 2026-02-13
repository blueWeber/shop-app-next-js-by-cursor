import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Noto_Sans_KR } from 'next/font/google'

import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MAISON - Premium Fashion',
  description: '당신의 일상에 품격을 더하는 프리미엄 패션 브랜드, MAISON. 세련된 디자인과 최상의 품질로 새로운 스타일을 제안합니다.',
}

export const viewport: Viewport = {
  themeColor: '#1c1916',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${playfair.variable} ${notoSansKR.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
