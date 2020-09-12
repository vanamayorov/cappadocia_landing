let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync');

gulp.task('sass', function(){
    return gulp.src('app/scss/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function(){
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});



gulp.task('watch', function() {
    gulp.watch('app/scss/*.scss', gulp.parallel('sass'))
    gulp.watch('app/*.html', gulp.parallel('html'))
});

gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));

