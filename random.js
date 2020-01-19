const randomBytes = require('@consento/sync-randombytes')
const { Buffer } = require('buffer')

function random(size) {
  const r = Buffer.alloc(32 + size)
  randomBytes(r)
  return r.slice(32)
}

module.exports = {
  random
}
