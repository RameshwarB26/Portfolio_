import { useEffect, useState } from 'react'

export function useSectionObserver(sectionIds = []) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? null)

  useEffect(() => {
    if (!sectionIds.length || !('IntersectionObserver' in window)) return

    const options = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    }

    const callback = (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      if (visible.length) {
        setActiveSection(visible[0].target.id)
      }
    }

    const observer = new IntersectionObserver(callback, options)
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [sectionIds.join(',')])

  return activeSection
}

