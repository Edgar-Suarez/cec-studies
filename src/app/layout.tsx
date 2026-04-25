import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter, JetBrains_Mono, Caveat } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hand',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CEC Study Trainer',
  description: 'Canadian Electrical Code exam study app with quiz, flashcards, and calculators',
}

const navItems = [
  {
    href: '/',
    label: 'Dashboard',
    shortLabel: 'Home',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    href: '/study-guide',
    label: 'Study Guide',
    shortLabel: 'Study',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    href: '/quiz',
    label: 'Quiz',
    shortLabel: 'Quiz',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    href: '/flashcards',
    label: 'Flashcards',
    shortLabel: 'Cards',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    href: '/calculators',
    label: 'Calculators',
    shortLabel: 'Calc',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    href: '/tutor',
    label: 'AI Tutor',
    shortLabel: 'Tutor',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
]

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-surface-elevated border-t border-subtle z-50 md:hidden">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center gap-1 px-3 py-2 rounded-md text-secondary hover:text-accent hover:bg-surface-elevated-2 transition-colors duration-75 min-w-0"
          >
            {item.icon}
            <span className="text-xs font-medium truncate">{item.shortLabel}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

function SideNav() {
  return (
    <aside className="hidden md:flex flex-col w-56 min-h-screen bg-surface-elevated border-r border-subtle fixed left-0 top-0 z-40">
      <div className="p-4 border-b border-subtle">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 bg-accent rounded-md flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="text-accent-contrast font-bold text-sm">⚡</span>
          </div>
          <div>
            <div className="text-primary font-display font-bold text-sm">CEC Study</div>
            <div className="text-secondary text-xs">Trainer</div>
          </div>
        </div>
      </div>
      <nav className="flex flex-col gap-1 p-3 flex-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2.5 rounded-md text-secondary hover:text-primary hover:bg-surface-elevated-2 transition-colors duration-75 font-medium text-sm"
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="p-3 border-t border-subtle">
        <div className="text-xs text-muted text-center font-mono">
          CEC Study Trainer v1.0
        </div>
      </div>
    </aside>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable} ${caveat.variable}`}
    >
      <body className="bg-surface-base text-primary min-h-screen">
        <SideNav />
        <main className="md:ml-56 pb-20 md:pb-0 min-h-screen">{children}</main>
        <BottomNav />
      </body>
    </html>
  )
}
