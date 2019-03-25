var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css')
var htmlmin = require('gulp-htmlmin')

gulp.task('minify-css', function(done) {
    return gulp.src('./src/css/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./dist/css/'))

    done();
})

gulp.task('htmlmin', function(done) {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./dist/'))

    done();
})

gulp.task('move-fonts', function(done) {
    return gulp.src('./src/fonts/**/*')
        .pipe(gulp.dest('./dist/fonts/'))
    done();
})

// gulp.task('move-js', function(done) {
//   return gulp.src('./src/js/*.js')
//   .pipe(gulp.dest('./dist/js/'))  
//   done();
// })


gulp.task('default', gulp.parallel('minify-css', 'htmlmin', function(done) {

    done();
}));