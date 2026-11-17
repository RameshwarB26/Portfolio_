import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import { build } from 'esbuild'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { projects, experiences, education } from '../src/data/portfolio.js'

// Exercise actual section render paths, including both responsive career modes.
const output = new URL('../.section-render-check.mjs', import.meta.url)
try {
  await build({
    stdin: { contents: "export { default as Projects } from './src/sections/Projects.jsx'; export { default as Experience } from './src/sections/Experience.jsx'; export { default as Education } from './src/sections/Education.jsx';", resolveDir: process.cwd(), loader: 'jsx' },
    bundle: true, packages: 'external', platform: 'node', format: 'esm', jsx: 'automatic', loader: { '.css': 'empty' }, outfile: output.pathname.replace(/^\/([A-Za-z]:)/, '$1'),
  })
  const sections = await import(output.href)
  const render = Component => renderToStaticMarkup(React.createElement(Component))
  const work = render(sections.Projects)
  for (const project of projects) assert(work.includes(`id="study-${project.id}"`), `Missing ${project.id} study`)
  assert.equal((work.match(/Screenshot to be added/g) || []).length, 3)
  assert(work.includes('Razorpay test integration'))
  assert(work.includes('Revenue tracker is a mock-data demo'))
  for (const project of projects.filter(p => p.id !== 'portfolio')) assert(!project.live && !project.github, 'Unverified project link')

  globalThis.window = { matchMedia: () => ({ matches: true }) }
  const desktop = render(sections.Experience)
  assert.equal((desktop.match(/role="tab"/g) || []).length, experiences.length)
  assert.equal((desktop.match(/aria-selected="true"/g) || []).length, 1)
  assert.equal((desktop.match(/aria-hidden="true"/g) || []).length >= experiences.length - 1, true)
  for (let index = 0; index < experiences.length; index++) {
    assert(desktop.includes(`aria-controls="career-panel-${index}"`))
    assert(desktop.includes(`id="career-panel-${index}"`))
    assert(desktop.includes(`aria-labelledby="career-tab-${index}"`))
  }
  globalThis.window = { matchMedia: () => ({ matches: false }) }
  const mobile = render(sections.Experience)
  assert(!mobile.includes('role="tab"') && !mobile.includes('role="tabpanel"'))
  assert.equal((mobile.match(/<article/g) || []).length, experiences.length)
  assert(!/<article[^>]*aria-hidden="true"/.test(mobile))
  const academic = render(sections.Education)
  for (const [period, , , score] of education) {
    assert(academic.includes(period.split(' — ').at(-1)))
    assert(academic.includes(score))
  }
  console.log('PASS: project rendering, honest image slots, case-study disclosures, desktop tab relationships, mobile reading order, and academic records')
} finally {
  delete globalThis.window
  await fs.unlink(output).catch(() => {})
}
