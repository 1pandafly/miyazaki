const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const htmlmin = require('gulp-htmlmin');

const html = () => {
    return gulp.src('src/*.html')
        .pipe(htmlmin({
            removeComments: true,
            collapseWhitespace: true,
        }))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.stream());
};

exports.html = html;

const php = () => {
    return gulp.src('src/*.php')
        .pipe(gulp.dest('build'))
        .pipe(browserSync.stream());
};

exports.php = php;


const styles = () => {
    return gulp.src('./src/scss/*.scss')
        .pipe(concat('styles.css'))
        .pipe(sass()).on('error', sass.logError)
        .pipe(autoprefixer({
            overrideBrowserslist: [">0.2%", "not dead"],
            cascade: false
        }))
        .pipe(cleancss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.stream());
};

exports.styles = styles;


const scripts = () => {
    return gulp.src('./src/js/**/*.js')
        .pipe(concat('script.js'))
        .pipe(babel({presets: ['@babel/preset-env']}))
        .pipe(terser()).on('error', function (e) {
            console.log(e);
        })
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.stream());
};

exports.scripts = scripts;


const copy = () => {
    return gulp.src([
        'src/assets/**/*',
    ], {
        base: 'src'
    })
        .pipe(gulp.dest('build'))
        .pipe(browserSync.stream({
            once: true
        }));
};

exports.copy = copy;


const server = () => {
    browserSync.init({
        server: {
            baseDir: "build",
            index: "index.html"
        },
        port: 3000,
        notify: false
    });
};

exports.server = server;


const watch = () => {
    browserSync.init({
        server: {
            baseDir: "build",
            index: "index.html"
        },
        port: 3000,
        notify: false
    });
    gulp.watch('src/*.html', gulp.series(html));
    gulp.watch('src/*.php', gulp.series(php));
    gulp.watch('src/scss/**/*.scss', gulp.series(styles));
    gulp.watch('src/js/**/*.js', gulp.series(scripts));
    gulp.watch([
        'src/assets/**/*',
    ], gulp.series(copy));
};

exports.watch = watch;


exports.default = gulp.series(
    gulp.parallel(
        html,
        php,
        styles,
        scripts,
        copy,
    ),
    gulp.parallel(
        watch,
        server,
    ),
);
