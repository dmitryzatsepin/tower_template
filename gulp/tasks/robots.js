const gulp = require('gulp')
const robots = require('gulp-robots');

module.exports = function () {
	return gulp.src('src/pages/index.pug')
	.pipe(robots({
		useragent: '*',
		allow: [],
		disallow: ['/']
	}))
	.pipe(gulp.dest('html/'));
};