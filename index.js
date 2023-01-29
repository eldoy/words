const extras = require('extras')
const { trim } = require('lodash')

const LENGTH = parseInt(process.argv[2] || 0)

if (!LENGTH) {
  console.log(`\nUsage: node index.js <length>\n`)
  process.exit(0)
}

const words = extras
  .read('nsf2022.txt')
  .split('\n')
  .map((x) => x.trim())
  .filter(Boolean)

const list = words.filter((x) => x.length === LENGTH)

console.log(list.join(' '))
