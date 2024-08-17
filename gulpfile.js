const gulp = require('gulp');
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));

const paths = {
    src: {
        css: {
            dir: './static/css'
        },
        scss: {
            main: './scss/theme.scss'
        },
        js: {
            dir: './static/js'
        }
    }
}

gulp.task('scss', function() {
    return gulp
        .src(paths.src.scss.main)
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix())
        .pipe(minify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.src.css.dir));
});

gulp.task('js', function() {
    return gulp.src([
        'node_modules/bootstrap/dist/js/bootstrap.min.js'
    ])
    .pipe(gulp.dest(paths.src.js.dir));
});


gulp.task('default', gulp.series('scss', 'js'));