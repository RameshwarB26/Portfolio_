import { useState } from 'react'

/** Screenshots are opt-in: empty frames never imitate application UI. */
export default function ProjectMedia({ project }) {
  const [failed, setFailed] = useState(false)
  const media = project.media
  const presentation = project.presentation || 'browser'
  const hasImage = Boolean(media?.src && !failed)
  const image = asset => <img src={asset.src} alt={asset.alt || `${project.title} application interface`} width={asset.width || (presentation === 'mobile' ? 390 : 1440)} height={asset.height || (presentation === 'mobile' ? 844 : 900)} loading="lazy" decoding="async" onError={() => setFailed(true)} />
  const emptyScreen = label => <div className="study-empty-screen"><span>{label}</span><small>{failed ? 'Image unavailable' : 'Screenshot to be added'}</small></div>

  if (project.presentation === 'artwork') {
    return <figure className="study-media study-media--artwork"><div className="study-artwork" role="img" aria-label={`Typographic cover for ${project.title}; not a product screenshot`}><span className="study-artwork-label">{project.category}</span><div className="study-paper"><span className="study-paper-name">{project.title}</span><span className="study-paper-word">Form.<br /><em>Function.</em></span><span className="study-paper-line" /><span className="study-paper-footer">{project.tech.slice(0, 2).join(' / ')}</span></div><span className="study-artwork-index" aria-hidden="true">{project.number}</span></div><figcaption>Typographic cover</figcaption></figure>
  }

  return <figure className={`study-media study-media--${presentation}`}>
    <div className="study-device-stage">
      {presentation === 'mobile' ? <><div className="study-phone">{hasImage ? image(media) : emptyScreen('Station discovery')}</div><div className="study-phone study-phone--secondary">{hasImage && media.secondary?.src ? image(media.secondary) : emptyScreen('Booking & trip planning')}</div></> : <div className="study-browser"><div className="study-browser-chrome" aria-hidden="true"><span className="study-browser-dots"><i /><i /><i /></span><span>{project.title}</span><span>↗</span></div>{hasImage ? image(media) : emptyScreen('Creator dashboard')}</div>}
    </div>
    <figcaption>{media?.caption || 'Reserved for actual application screenshots.'}</figcaption>
  </figure>
}
