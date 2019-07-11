const { src, dest, watch, series, parallel } = require('gulp');

const pug = require('gulp-pug'),
			browserSync = require('browser-sync').create(),
			reload = browserSync.reload,
			notify = require('gulp-notify'),
			babel = require('gulp-babel'),
			plumber = require('gulp-plumber'),
			sass = require('gulp-sass'),
			neat = require('bourbon-neat').includePaths,
			concat = require('gulp-concat'),
			rename = require('gulp-rename'),
			autoprefixer = require('gulp-autoprefixer'),
			sourcemaps = require('gulp-sourcemaps'),
			uglify = require('gulp-uglify'),
			imgmin = require('gulp-imagemin'),
			mozjpeg = require('imagemin-mozjpeg'),
			pngquant = require('imagemin-pngquant'),
			svgo = require('imagemin-svgo'),
			cleanCSS = require('gulp-clean-css'),
			del = require('del');

const clean = () => {
	return del('dist/*');
};

const html = () => {
	return src('src/pug/*.pug')
		.pipe(plumber({
			errorHandler: notify.onError('👻 <%= error.message %>')
		}))
    .pipe(pug({ pretty: true }))
    .pipe(dest('dist/'))
		.pipe(reload({ stream: true }))
};

const css = () => {
	return src('src/scss/main.scss')
		.pipe(plumber({
			errorHandler: notify.onError('👻 <%= error.message %>')
		}))
		.pipe(sourcemaps.init())
		.pipe(sass({ includePaths: neat }).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 6 versions']
		}))
		.pipe(rename('main.min.css'))
		.pipe(sourcemaps.write('./'))
		.pipe(dest('dist/static/css/'))
		.pipe(reload({ stream: true }))	
};

const js = () => {
	return src('src/js/*.js')
		.pipe(plumber({
			errorHandler: notify.onError('👻 <%= error.message %>')
		}))
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(dest('dist/static/js'))
		.pipe(reload({ stream: true }))
};

const fonts = () => {
	return src('src/fonts/**/*.*')
		.pipe(dest('dist/static/fonts'))
};

const images = () => {
	return src('src/img/**/*.*')
		.pipe(imgmin([
			pngquant(),
			mozjpeg(),
			svgo({ removeViewBox: false })
		], {
			verbose: true
		}))
		.pipe(dest('dist/static/img'))
};

const assetsCss = () => {
	return src('src/assets/**/*.css')
		.pipe(concat('assets.css'))
		.pipe(cleanCSS())
		.pipe(dest('./dist/static/assets'))
		.pipe(reload({ stream: true }))
};

const assetsJs = () => {
	return src('src/assets/**/*.js')
		.pipe(concat('assets.js'))
		.pipe(uglify())
		.pipe(dest('./dist/static/assets'))
		.pipe(reload({ stream: true }))
};

const watching = () => {
	watch('src/pug/**/*.pug', html);
	watch('src/scss/**/*.scss', css);
	watch('src/js/*.js', js);
	watch('src/img/**/*.*', images);
	watch('src/assets/**/*.*', parallel(assetsCss, assetsJs));
};

const browser = () => {
	browserSync.init({
		server: {
			baseDir: './dist'
		},
		port: 3000,
		notify: false
	})
};

exports.build = series(
  clean,
  parallel(html,css,js),
  parallel(
  	fonts,
  	images,
  	parallel(assetsCss,assetsJs)
  )
);
exports.watch = watching;
exports.clean = clean;
exports.default = series(
	clean,
  parallel(html, css, js),
  parallel(
  	fonts,
  	images,
  	parallel(assetsCss, assetsJs)
  ),
	parallel(browser, watching)
);
