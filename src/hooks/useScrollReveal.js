import { useEffect } from 'react'

/** One-time reveals. Content remains visible if observation is unsupported. */
export function useScrollReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const elements = [...document.querySelectorAll('[data-reveal]')]
    const reveal = element => {
      element.classList.add('revealed')
      observer.unobserve(element)
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) reveal(entry.target) })
    }, { threshold: 0, rootMargin: '0px 0px -35px 0px' })

    elements.forEach(element => {
      // Never hide content already in view or a target reached through a hash.
      if (element.getBoundingClientRect().top < window.innerHeight - 35) {
        element.classList.add('revealed')
        return
      }
      const siblings = [...element.parentElement.children].filter(child => child.hasAttribute('data-reveal'))
      element.style.setProperty('--reveal-delay', `${Math.min(siblings.indexOf(element), 3) * 55}ms`)
      element.classList.add('reveal-ready')
      observer.observe(element)
    })
    const onFocus = event => {
      const element = event.target.closest('[data-reveal]')
      if (element) reveal(element)
    }
    document.addEventListener('focusin', onFocus)
    return () => {
      observer.disconnect()
      document.removeEventListener('focusin', onFocus)
      elements.forEach(element => {
        element.classList.remove('reveal-ready')
        element.style.removeProperty('--reveal-delay')
      })
    }
  }, [])
}
