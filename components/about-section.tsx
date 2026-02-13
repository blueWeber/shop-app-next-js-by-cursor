import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent">About Us</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight lg:text-5xl text-balance">
              패션 그 이상의 가치를 전합니다
            </h2>
            <div className="mt-8 flex flex-col gap-5 text-muted-foreground leading-relaxed">
              <p>
                MAISON은 2010년 서울에서 시작된 프리미엄 패션 브랜드입니다.
                우리는 단순히 옷을 만드는 것이 아니라, 입는 사람의 개성과 라이프스타일을
                표현하는 스타일을 디자인합니다.
              </p>
              <p>
                최상의 소재 선별부터 섬세한 봉제 기술까지, 모든 공정에서
                타협 없는 품질을 추구합니다. 전 세계 20개국에 진출한 글로벌 패션
                기업으로 성장했으며, 고객의 일상에 영감을 더하는 브랜드가 되고자
                합니다.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <p className="font-serif text-3xl lg:text-4xl text-foreground">15+</p>
                <p className="mt-1 text-sm text-muted-foreground">Years of History</p>
              </div>
              <div>
                <p className="font-serif text-3xl lg:text-4xl text-foreground">20+</p>
                <p className="mt-1 text-sm text-muted-foreground">Global Markets</p>
              </div>
              <div>
                <p className="font-serif text-3xl lg:text-4xl text-foreground">500K+</p>
                <p className="mt-1 text-sm text-muted-foreground">Happy Customers</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/about-studio.jpg"
              alt="MAISON 디자인 스튜디오"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
