var gulp = require('gulp');
var uglify = require('gulp-uglify');
//var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
var del = require('del');  // Deletes files.
var runSequence = require('run-sequence');
var less = require('gulp-less');
var path = require('path');
var minifyCSS = require('gulp-minify-css');

var path = {
    HTML: 'src/index.html',
    MINIFIED_OUT: 'build.min.js',
    OUT: 'build.js',
    DEST: 'dist',
    DEST_BUILD: 'dist/build',
    DEST_SRC: 'dist/src',
    ENTRY_POINT: './src/js/app.js',
    JS: ['src/js/*.js'],
    LESS: ['src/css/*.less']
};

gulp.task('clean', function() {
    return del(['dist']);
});

gulp.task('copyHTML', function(){
    return gulp.src(path.HTML)
        .pipe(gulp.dest(path.DEST));

});

gulp.task('startServer', function() {
    return require('./express.server');
});

gulp.task('buildReact', function() {
    return browserify({
        entries: [path.ENTRY_POINT],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true
    })  .transform(reactify)
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./dist/src/'));
});

gulp.task('buildReactMin', function() {
    return browserify({
        entries: [path.ENTRY_POINT]
    })  .transform(reactify)
        .bundle()
        .pipe(source('main.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('./dist/src/'));
});

gulp.task('watch', function() {
    return gulp.watch(path.LESS, ['buildLess']);
    return gulp.watch(path.JS, ['buildReact']);
});

gulp.task('buildLess', function(){
    return gulp.src('./src/css/styles.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('buildLessMin', function(){
    return gulp.src('./src/css/styles.less')
        .pipe(less())
        .pipe(minifyCSS())
        //possibly rename?
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', function (cb) {
    runSequence('clean', 'copyHTML', 'buildReact', 'buildLess', 'watch', 'startServer', cb);
});

gulp.task('production', function (cb) {
    runSequence('clean', 'copyHTML', 'buildReactMin', 'buildLessMin', cb);
});
