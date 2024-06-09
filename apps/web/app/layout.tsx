import { dir, getLocale } from '@repo/i18n/server'
import { Inter } from 'next/font/google'

import './globals.css'
import React from 'react'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}): Promise<React.JSX.Element> {
  const locale = await getLocale()
  const theme = 'dark'

  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>
        <Providers locale={locale} theme={theme}>{children}</Providers>
      </body>
    </html>
  )
}
