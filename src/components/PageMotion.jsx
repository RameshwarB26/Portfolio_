import { useEffect, useRef, useState } from 'react'

export default function PageMotion() {
  const progress = useRef(null)
  const [paused, setPaused] = useState(() => {
    try { return localStorage.getItem('portfolio-motion') === 'paused' } catch { return false }
  })
  const [reduced, setReduced] = useState(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(query.matches)
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.motion = paused || reduced ? 'paused' : 'enabled'
    return () => { delete document.documentElement.dataset.motion }
  }, [paused, reduced])

  useEffect(() => {
    let frame = 0
    let previousScrolled = null
    const update = () => {
      frame = 0
      const distance = document.documentElement.scrollHeight - window.innerHeight
      const value = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0
      if (progress.current) progress.current.style.transform = `scaleX(${value})`
      const scrolled = window.scrollY > 20
      if (scrolled !== previousScrolled) {
        document.documentElement.dataset.scrolled = String(scrolled)
        previousScrolled = scrolled
      }
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    const observer = 'ResizeObserver' in window ? new ResizeObserver(schedule) : null
    observer?.observe(document.body)
    update()
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      observer?.disconnect()
      cancelAnimationFrame(frame)
      delete document.documentElement.dataset.scrolled
    }
  }, [])

  function toggleMotion() {
    const next = !paused
    setPaused(next)
    try { localStorage.setItem('portfolio-motion', next ? 'paused' : 'enabled') } catch { /* Session-only preference when storage is unavailable. */ }
  }

  return <><div className="reading-progress" aria-hidden="true"><span ref={progress} /></div><button type="button" className="motion-control" aria-pressed={paused || reduced} aria-label={reduced ? 'Motion reduced by your system preference' : paused ? 'Resume page animations' : 'Pause page animations'} onClick={toggleMotion} disabled={reduced}><span className="motion-control-icon" aria-hidden="true">{paused || reduced ? '▶' : 'Ⅱ'}</span>{reduced ? 'Reduced motion' : paused ? 'Resume motion' : 'Pause motion'}</button></>
}
