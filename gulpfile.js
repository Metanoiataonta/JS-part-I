var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    svgSprite = require('gulp-svg-sprite'),
    plumber = require('gulp-plumber'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    spritesmith = require('gulp.spritesmith')
replace = require('gulp-replace');

gulp.task('sass', function () {
    return gulp.src('src/css/**/style.scss')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream: true}))
});
gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(browserSync.reload({stream: true}))
    // .pipe(gulp.dest('dist'))
});
gulp.task('js', function () {
    return gulp.src('src/js/**/*.js')
        // .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({stream: true}))
});
gulp.task('sprite', async function () {
    var spriteData =
        gulp.src('src/img/sprite/*.png') // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.scss',
                cssFormat: 'scss',
                algorithm: 'binary-tree',
                imgPath: '../img/sprite.png'
            }));

    spriteData.img.pipe(gulp.dest('dist/img/')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('src/css/')); // путь, куда сохраняем стили
});
assetsDir = "./";
gulp.task('svgSpriteBuild', function () {
    return gulp.src(assetsDir + 'img/*.svg')
        // minify svg
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        // remove all fill, style and stroke declarations in out shapes
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
                $('[opacity]').removeAttr('opacity');
            },
            parserOptions: {xmlMode: true}
        }))
        // cheerio plugin create unnecessary string '&gt;', so replace it.
        .pipe(replace('&gt;', '>'))
        // build svg sprite
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: "../sprite.svg",
                    render: {
                        scss: {
                            dest: '../sass/_sprite.scss',
                            template: assetsDir + "js/template.scss"
                        }
                    }
                }
            }
        }))
        .pipe(gulp.dest(assetsDir + 'dist/'));
});
gulp.task('watch', function () {
    gulp.watch('src/css/**/*.scss', gulp.parallel('sass'));
    gulp.watch('index.html', gulp.parallel('html'));
    gulp.watch('src/js/**/*.js', gulp.parallel('js'));
});
gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: './'
        },
        notify: false,
        startPath: "index.html",
        open: false
    });
});

gulp.task('clean', async function () {
    return del.sync('dist')
});

gulp.task('prebuild', async function () {
    var buildCss = gulp.src(['dist/style.css'])
        .pipe(gulp.dest('dist'))
});


gulp.task('default', gulp.parallel('sprite', 'sass', 'html', 'browser-sync', 'watch'));

gulp.task('build', gulp.parallel('prebuild', 'clean', 'sass'));