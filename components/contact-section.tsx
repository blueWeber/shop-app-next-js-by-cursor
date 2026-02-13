"use client"

import { Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="bg-foreground py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent">Contact Us</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight text-primary-foreground lg:text-5xl text-balance">
              함께 이야기 나눠요
            </h2>
            <p className="mt-6 leading-relaxed text-primary-foreground/60">
              비즈니스 제휴, 입점 문의, 또는 브랜드에 대해 궁금한 점이 있으시면
              언제든지 연락해 주세요. MAISON 팀이 정성껏 답변해 드리겠습니다.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-medium text-primary-foreground">본사</p>
                  <p className="mt-1 text-sm text-primary-foreground/60">
                    서울특별시 강남구 압구정로 123, MAISON 빌딩
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-medium text-primary-foreground">전화</p>
                  <p className="mt-1 text-sm text-primary-foreground/60">02-1234-5678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-medium text-primary-foreground">이메일</p>
                  <p className="mt-1 text-sm text-primary-foreground/60">contact@maison.co.kr</p>
                </div>
              </div>
            </div>
          </div>

          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-primary-foreground/80">
                  이름
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="홍길동"
                  className="border border-primary-foreground/20 bg-transparent px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-primary-foreground/80">
                  이메일
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  className="border border-primary-foreground/20 bg-transparent px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm text-primary-foreground/80">
                제목
              </label>
              <input
                id="subject"
                type="text"
                placeholder="문의 제목을 입력해 주세요"
                className="border border-primary-foreground/20 bg-transparent px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-primary-foreground/80">
                내용
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="문의 내용을 입력해 주세요"
                className="resize-none border border-primary-foreground/20 bg-transparent px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-2 border border-accent bg-accent px-8 py-3 text-sm uppercase tracking-widest text-accent-foreground transition-colors hover:bg-transparent hover:text-accent"
            >
              문의하기
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
