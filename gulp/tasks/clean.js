const del = require('del')

module.exports = function clean(cb) {
  return del('html').then(() => {
    cb()
  })
}
