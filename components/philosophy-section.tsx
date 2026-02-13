import { Gem, Leaf, Paintbrush } from "lucide-react"

const values = [
  {
    icon: Paintbrush,
    number: "01",
    title: "Timeless Design",
    description:
      "트렌드에 흔들리지 않는 시대를 초월한 디자인을 추구합니다. 클래식한 아름다움과 현대적 감각의 조화를 통해 오래도록 사랑받는 스타일을 만듭니다.",
  },
  {
    icon: Gem,
    number: "02",
    title: "Uncompromising Quality",
    description:
      "이탈리아, 프랑스 등 세계 최고의 원단 산지에서 엄선한 소재만을 사용합니다. 숙련된 장인의 손길로 완성되는 한 벌 한 벌에 자부심을 담습니다.",
  },
  {
    icon: Leaf,
    number: "03",
    title: "Sustainable Fashion",
    description:
      "지속 가능한 패션을 위해 친환경 소재와 윤리적 생산 방식을 채택하고 있습니다. 아름다운 패션이 아름다운 세상을 만든다고 믿습니다.",
  },
]

export function PhilosophySection() {
  return (
    <section id="philosophy" className="bg-foreground py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Our Philosophy</p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight text-primary-foreground lg:text-5xl text-balance">
            우리가 믿는 가치
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/60 leading-relaxed">
            MAISON은 세 가지 핵심 가치를 바탕으로 패션의 본질을 재정의합니다.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.number}
              className="group border border-primary-foreground/10 p-8 transition-colors hover:border-accent/50 lg:p-10"
            >
              <div className="flex items-center gap-4">
                <item.icon className="h-5 w-5 text-accent" />
                <span className="font-serif text-sm text-primary-foreground/40">
                  {item.number}
                </span>
              </div>
              <h3 className="mt-6 font-serif text-xl text-primary-foreground tracking-tight">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
