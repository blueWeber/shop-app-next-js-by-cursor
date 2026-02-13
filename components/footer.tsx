import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="font-serif text-xl tracking-widest text-foreground">
              MAISON
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              당신의 일상에 품격을 더하는 프리미엄 패션 브랜드
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-foreground">
              Company
            </h4>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">회사소개</a>
              </li>
              <li>
                <a href="#philosophy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">브랜드 철학</a>
              </li>
              <li>
                <a href="#history" className="text-sm text-muted-foreground hover:text-foreground transition-colors">연혁</a>
              </li>
              <li>
                <a href="#team" className="text-sm text-muted-foreground hover:text-foreground transition-colors">팀 소개</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-foreground">
              Collections
            </h4>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <a href="#categories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">여성 컬렉션</a>
              </li>
              <li>
                <a href="#categories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">남성 컬렉션</a>
              </li>
              <li>
                <a href="#categories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">액세서리</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-foreground">
              Follow Us
            </h4>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <span className="text-sm text-muted-foreground">Instagram</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Facebook</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">YouTube</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {'© 2025 MAISON. All rights reserved.'}
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-muted-foreground">이용약관</span>
            <span className="text-xs text-muted-foreground">개인정보처리방침</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
