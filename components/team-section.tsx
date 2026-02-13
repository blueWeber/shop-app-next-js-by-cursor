import Image from "next/image"

export function TeamSection() {
  return (
    <section id="team" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[5/4] overflow-hidden order-2 lg:order-1">
            <Image
              src="/images/team-photo.jpg"
              alt="MAISON 크리에이티브 팀"
              fill
              className="object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">Our Team</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight lg:text-5xl text-balance">
              크리에이티브 팀을 소개합니다
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              MAISON의 팀은 패션 디자이너, 머천다이저, 마케터, 그리고 기술 전문가로
              구성되어 있습니다. 다양한 배경과 전문성을 가진 120명의 팀원이 하나의
              목표를 향해 함께 나아갑니다.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              파리, 밀라노, 서울 세 곳의 디자인 스튜디오에서 창의적인 영감을 나누며,
              글로벌 감각과 로컬 트렌드를 결합한 컬렉션을 선보이고 있습니다.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border border-border p-6">
                <p className="font-serif text-3xl text-foreground">120+</p>
                <p className="mt-1 text-sm text-muted-foreground">전문 인력</p>
              </div>
              <div className="border border-border p-6">
                <p className="font-serif text-3xl text-foreground">3</p>
                <p className="mt-1 text-sm text-muted-foreground">글로벌 스튜디오</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
