import fs from 'node:fs'
import assert from 'node:assert/strict'
const files = [...fs.readdirSync('src/sections').map(f => `src/sections/${f}`), ...fs.readdirSync('src/components').map(f => `src/components/${f}`), 'src/App.jsx', 'src/data/portfolio.js', 'index.html']
const source = files.map(f => fs.readFileSync(f, 'utf8')).join('\n')
for (const id of ['home', 'projects', 'about', 'experience', 'skills', 'contact', 'main']) assert(source.includes(`id="${id}"`), `Missing section ${id}`)
for (const target of source.matchAll(/href="#([a-z-]+)"/g)) assert(source.includes(`id="${target[1]}"`), `Broken anchor ${target[1]}`)
for (const asset of ['/images/Rameshwar_pic.jpeg', '/favicon.svg']) assert(fs.existsSync(`public${asset}`), `Missing asset ${asset}`)
assert(!/your.email|John Doe|via.placeholder|href="#"|framer-motion|react-icons|5 years/.test(source), 'Placeholder or removed import remains')
assert(source.includes('ram26.bhumbar@gmail.com'))
assert(source.includes('1S4ZrVjo1rRhM_Wvvc_YcIKVNjeslV-hw'))
console.log('PASS: section targets, assets, owner contact details, and placeholder cleanup')
