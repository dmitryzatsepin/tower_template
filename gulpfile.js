const gulp = require('gulp')


const serve = require('./gulp/tasks/serve')
const pug2html = require('./gulp/tasks/pug2html')
const styles = require('./gulp/tasks/styles')
const script = require('./gulp/tasks/script')
const fonts = require('./gulp/tasks/fonts')
const imageMinify = require('./gulp/tasks/imageMinify')
const svgSprite = require('./gulp/tasks/svgSprite')
const clean = require('./gulp/tasks/clean')
const copyDependencies = require('./gulp/tasks/copyDependencies')
const lighthouse = require('./gulp/tasks/lighthouse')
const robots = require('./gulp/tasks/robots')

const ready = gulp.series(clean, copyDependencies)
const set = gulp.parallel(pug2html, styles, script, fonts, imageMinify,svgSprite)

const dev = gulp.series(ready, set)
const build = gulp.series(dev, robots)

module.exports.start = gulp.series(dev, serve)
module.exports.build = build

module.exports.lighthouse = gulp.series(lighthouse)
