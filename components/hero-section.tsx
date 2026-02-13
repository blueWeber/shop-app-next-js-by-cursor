import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-fashion.jpg"
        alt="MAISON 패션 브랜드 히어로 이미지"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-foreground/40" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary-foreground/80">
          Since 2010
        </p>
        <h1 className="font-serif text-5xl leading-tight tracking-tight text-primary-foreground md:text-7xl lg:text-8xl text-balance">
          Style that
          <br />
          defines you
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 lg:text-lg">
          당신의 일상에 품격을 더하는 프리미엄 패션 브랜드.
          <br />
          세련된 디자인과 최상의 품질로 새로운 스타일을 제안합니다.
        </p>
        <Link
          href="/recruitment"
          className="mt-10 inline-flex items-center gap-2 border border-primary-foreground/40 px-8 py-3 text-sm uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-foreground"
        >
          브랜드 스토리
          <ArrowDown className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
