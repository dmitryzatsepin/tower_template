const gulp = require('gulp');
const svgo = require('gulp-svgo');
const svgSprite = require('gulp-svg-sprite');


module.exports = function icons() {
	return gulp.src('src/img/icons/*.svg')
		.pipe(
			svgo({
				plugins: [
					{
						removeAttrs: { attrs: "(fill|stroke|style|width|height|data.*)" }
					}
				]
			})
		)
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: "../sprite.svg"
				}
			}
		}))
		.pipe(gulp.dest('html/img/icons'));
};
