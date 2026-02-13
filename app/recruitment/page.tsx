import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Briefcase, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "채용정보 | MAISON",
  description: "MAISON 채용정보. 머천다이저(MD) 및 다양한 포지션의 자격 요건과 지원 방법을 안내합니다.",
}

export default function RecruitmentPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[72px]">
        {/* 상단 헤더 */}
        <section className="border-b border-border bg-muted/30">
          <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              메인으로
            </Link>
            <h1 className="mt-6 font-serif text-4xl tracking-tight lg:text-5xl text-balance">
              채용정보
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              MAISON과 함께 성장할 인재를 찾습니다.
            </p>
          </div>
        </section>

        {/* 채용 공고: MD */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="flex items-center gap-3 text-accent">
              <Briefcase className="h-5 w-5" />
              <span className="text-sm uppercase tracking-[0.2em]">채용 포지션</span>
            </div>
            <h2 className="mt-4 font-serif text-3xl tracking-tight lg:text-4xl">
              머천다이저 (MD)
            </h2>
            <p className="mt-2 text-muted-foreground">
              여성/남성 의류 및 액세서리 상품 기획 및 매장 머천다이징 담당
            </p>

            <div className="mt-10 space-y-10">
              {/* 직무 소개 */}
              <div>
                <h3 className="font-serif text-xl tracking-tight text-foreground">
                  직무 소개
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  컬렉션 기획부터 시즌별 오퍼 구매, 매장 진열 및 재고 관리까지
                  전 과정을 담당합니다. 트렌드 분석과 셀링 데이터를 바탕으로
                  수익성 있는 상품 구성을 제안하고, 브랜드 이미지에 맞는
                  머천다이징을 수행합니다.
                </p>
              </div>

              {/* 자격 요건 */}
              <div>
                <h3 className="font-serif text-xl tracking-tight text-foreground flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  자격 요건
                </h3>
                <ul className="mt-4 space-y-2 text-muted-foreground leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-accent">·</span>
                    <span>대졸 이상 (패션/의류/경영 관련 학과 우대)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">·</span>
                    <span>의류·패션 MD 경력 3년 이상</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">·</span>
                    <span>엑셀 등 오피스 프로그램 활용 능력 (피벗, 데이터 분석)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">·</span>
                    <span>트렌드·시장 분석 및 구매 기획 역량</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">·</span>
                    <span>원활한 커뮤니케이션과 팀 협업 가능하신 분</span>
                  </li>
                </ul>
              </div>

              {/* 우대 사항 */}
              <div>
                <h3 className="font-serif text-xl tracking-tight text-foreground">
                  우대 사항
                </h3>
                <ul className="mt-4 space-y-2 text-muted-foreground leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-accent">·</span>
                    <span>럭셔리·프리미엄 브랜드 MD 경험</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">·</span>
                    <span>해외 바이어·전시회 참가 경험</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">·</span>
                    <span>영어 또는 기타 외국어 활용 가능자</span>
                  </li>
                </ul>
              </div>

              {/* 근무 조건 */}
              <div>
                <h3 className="font-serif text-xl tracking-tight text-foreground">
                  근무 조건
                </h3>
                <ul className="mt-4 space-y-2 text-muted-foreground leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-accent">·</span>
                    <span>근무지: 서울 본사 (강남)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">·</span>
                    <span>고용 형태: 정규직</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">·</span>
                    <span>복리후생: 4대보험, 퇴직연금, 자기계발비 등</span>
                  </li>
                </ul>
              </div>

              {/* 지원 방법 */}
              <div className="border-t border-border pt-10">
                <h3 className="font-serif text-xl tracking-tight text-foreground">
                  지원 방법
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  이력서와 경력기술서를{" "}
                  <a
                    href="mailto:careers@maison.com"
                    className="text-accent underline underline-offset-2 hover:no-underline"
                  >
                    careers@maison.com
                  </a>
                  으로 보내주시면 검토 후 연락드리겠습니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
