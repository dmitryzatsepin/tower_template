const gulp = require('gulp')

const imageMinify = require('./imageMinify')
const svgSprite = require('./svgSprite')
const styles = require('./styles')
const pug2html = require('./pug2html')
const script = require('./script')
const copyDependencies = require('./copyDependencies')

const server = require('browser-sync').create()

module.exports = function serve(cb) {
    server.init({
        server: 'html',
        notify: false,
        open: true,
        cors: true
    })

    gulp.watch('src/img/*/*.{gif,png,jpg,svg,webp}', gulp.series(imageMinify)).on('change', server.reload)
    gulp.watch('src/img/sprite/*.svg', gulp.series(svgSprite)).on('change', server.reload)
    gulp.watch('src/styles/**/*.sass', gulp.series(styles, cb => gulp.src('html/assets/css').pipe(server.stream()).on('end', cb)))
    gulp.watch('src/js/**/*.js', gulp.series(script)).on('change', server.reload)
    gulp.watch('src/pages/**/*.pug', gulp.series(pug2html))
    gulp.watch('html/*.html').on('change', server.reload)

    gulp.watch('package.json', gulp.series(copyDependencies)).on('change', server.reload)

    return cb()
}
