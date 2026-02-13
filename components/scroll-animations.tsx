"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ScrollAnimations() {
  useEffect(() => {
    const runAnimations = () => {
      const sections = document.querySelectorAll<HTMLElement>("main section[id]")
      if (sections.length === 0) return

      const triggers: ScrollTrigger[] = []

      // 공통: 섹션이 뷰포트에 들어올 때 페이드인 + 위로 슬라이드
      sections.forEach((section) => {
      const id = section.id
      const grid = section.querySelector<HTMLElement>(".grid")
      const isPhilosophy = id === "philosophy"
      const isCategories = id === "categories"
      const isHistory = id === "history"

      if (isPhilosophy && grid) {
        // 철학 섹션: 헤더 먼저 등장, 그 다음 카드들 스태거
        const header = section.querySelector<HTMLElement>(".text-center")
        const cards = Array.from(grid.children) as HTMLElement[]
        if (header) {
          const t1 = gsap.from(header, {
            y: 48,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: section, start: "top 85%" },
          })
          triggers.push(t1.scrollTrigger!)
        }
        if (cards.length) {
          const t2 = gsap.from(cards, {
            y: 56,
            opacity: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: grid, start: "top 88%" },
          })
          triggers.push(t2.scrollTrigger!)
        }
        return
      }

      if (isCategories && grid) {
        // 카테고리: 헤더 + 그리드 카드 스태거
        const cards = Array.from(grid.children) as HTMLElement[]
        if (cards.length) {
          const t = gsap.from(cards, {
            y: 50,
            opacity: 0,
            duration: 0.75,
            stagger: 0.14,
            ease: "power3.out",
            scrollTrigger: { trigger: section, start: "top 85%" },
          })
          triggers.push(t.scrollTrigger!)
        }
        return
      }

      if (isHistory) {
        // 연혁: 타임라인 아이템 스태거 (y + opacity만 사용해 모바일 대응)
        const timeline = section.querySelector<HTMLElement>(".flex.flex-col.gap-12")
        const items = timeline ? Array.from(timeline.children) as HTMLElement[] : []
        if (items.length) {
          const t = gsap.from(items, {
            y: 36,
            opacity: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: { trigger: section, start: "top 85%" },
          })
          triggers.push(t.scrollTrigger!)
        }
        return
      }

      // 나머지 섹션: 통째로 페이드인 + 슬라이드 업
      const t = gsap.from(section, {
        y: 56,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 88%",
          onRefresh: (self) => {
            if (self.progress > 0) self.animation.progress(1)
          },
        },
      })
      triggers.push(t.scrollTrigger!)
    })

      return triggers
    }

    const triggers = runAnimations() ?? []

    const refreshAndCatchUp = () => {
      ScrollTrigger.refresh()
      triggers.forEach((st) => {
        if (st && st.progress > 0) st.animation.progress(1)
      })
    }

    const timeoutId = setTimeout(refreshAndCatchUp, 150)
    const loadTimeoutId = setTimeout(refreshAndCatchUp, 500)
    const lateTimeoutId = setTimeout(refreshAndCatchUp, 1000)

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") refreshAndCatchUp()
    }

    window.addEventListener("load", refreshAndCatchUp)
    document.addEventListener("visibilitychange", onVisibilityChange)

    return () => {
      clearTimeout(timeoutId)
      clearTimeout(loadTimeoutId)
      clearTimeout(lateTimeoutId)
      window.removeEventListener("load", refreshAndCatchUp)
      document.removeEventListener("visibilitychange", onVisibilityChange)
      triggers.forEach((t) => t?.kill())
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return null
}
