const milestones = [
  {
    year: "2010",
    title: "브랜드 설립",
    description: "서울 성수동에 첫 번째 아틀리에를 열고, 프리미엄 여성복 라인을 선보이며 MAISON의 여정을 시작합니다.",
  },
  {
    year: "2013",
    title: "남성 컬렉션 론칭",
    description: "남성 패션 라인을 새롭게 론칭하며 토탈 패션 브랜드로의 첫 걸음을 내딛습니다.",
  },
  {
    year: "2016",
    title: "서울 패션위크 참가",
    description: "서울 패션위크에 공식 참가하며, 국내 패션 시장에서 주목받는 브랜드로 성장합니다.",
  },
  {
    year: "2019",
    title: "글로벌 진출",
    description: "도쿄, 파리, 뉴욕에 플래그십 스토어를 오픈하며 글로벌 시장에 본격 진출합니다.",
  },
  {
    year: "2022",
    title: "지속가능 패션 선언",
    description: "친환경 소재 100% 전환을 목표로 'Green MAISON' 캠페인을 공식 발표합니다.",
  },
  {
    year: "2025",
    title: "디지털 혁신",
    description: "AI 기반 맞춤 스타일링 서비스를 도입하고, 온라인 쇼핑 경험을 전면 혁신합니다.",
  },
]

export function HistorySection() {
  return (
    <section id="history" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Our Journey</p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight lg:text-5xl text-balance">
            브랜드 연혁
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />

          <div className="flex flex-col gap-12">
            {milestones.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex flex-col gap-4 md:flex-row md:gap-0 ${
                  i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="hidden md:absolute md:left-1/2 md:top-1 md:block md:-translate-x-1/2">
                  <div className="flex h-3 w-3 items-center justify-center rounded-full bg-accent" />
                </div>

                <div
                  className={`md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                  }`}
                >
                  <span className="font-serif text-2xl text-accent">{item.year}</span>
                  <h3 className="mt-1 text-lg font-medium tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
