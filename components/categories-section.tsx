import Image from "next/image"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    title: "Women",
    subtitle: "여성 컬렉션",
    image: "/images/category-women.jpg",
  },
  {
    title: "Men",
    subtitle: "남성 컬렉션",
    image: "/images/category-men.jpg",
  },
  {
    title: "Accessories",
    subtitle: "액세서리",
    image: "/images/category-accessories.jpg",
  },
]

export function CategoriesSection() {
  return (
    <section id="categories" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent">Collections</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight lg:text-5xl text-balance">
              카테고리 소개
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground leading-relaxed">
            여성, 남성, 그리고 액세서리까지. 모든 컬렉션에서 MAISON만의 세련된 감성을 만나보세요.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.title} className="group relative aspect-[3/4] overflow-hidden cursor-pointer">
              <Image
                src={cat.image}
                alt={`${cat.subtitle} 컬렉션`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/30 transition-colors group-hover:bg-foreground/50" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
                <h3 className="font-serif text-3xl tracking-wide text-primary-foreground">
                  {cat.title}
                </h3>
                <p className="mt-1 text-sm text-primary-foreground/70">{cat.subtitle}</p>
                <div className="mt-4 flex items-center gap-2 text-sm uppercase tracking-widest text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  <span>View Collection</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
