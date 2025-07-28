import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Мебельная студия Александра Кожа | Крым/Краснодар',
  description: 'Дизайнерские кухни, гардеробы, ванные, дома под ключ. Мебель не для всех. Крым → работаем по Краснодару.',
  keywords: 'мебель, кухни, гардеробы, дизайн, Крым, Краснодар, мебельная студия',
  authors: [{ name: 'Александр Кожа' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 