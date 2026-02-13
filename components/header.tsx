"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon } from "lucide-react"

const navLinks = [
  { label: "회사소개", href: "/#about" },
  { label: "브랜드 철학", href: "/#philosophy" },
  { label: "카테고리", href: "/#categories" },
  { label: "연혁", href: "/#history" },
  { label: "팀 소개", href: "/#team" },
  { label: "채용정보", href: "/recruitment" },
  { label: "문의", href: "/#contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="font-serif text-2xl tracking-widest text-foreground">
          MAISON
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="메인 내비게이션">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-md p-2 text-foreground"
            aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-background px-6 py-6 lg:hidden" aria-label="모바일 내비게이션">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">테마</p>
            <button
              type="button"
              onClick={() => {
                toggleTheme()
                setMobileOpen(false)
              }}
              className="flex items-center gap-2 text-left text-base text-foreground"
            >
              {isDark ? (
                <>
                  <Sun className="h-4 w-4" /> 라이트 모드
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4" /> 다크 모드
                </>
              )}
            </button>
            <hr className="border-border" />
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
