var gulp = require('gulp');
var uglify = require('gulp-uglify');
//var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
//var streamify = require('gulp-streamify');
var del = require('del');  // Deletes files.
var runSequence = require('run-sequence');
var less = require('gulp-less');
var path = require('path');

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

//gulp.task('replaceHTMLsrc', function(){
//    gulp.src(path.HTML)
//        .pipe(htmlreplace({
//            'js': 'src/' + path.OUT
//        }))
//        .pipe(gulp.dest(path.DEST));
//});

gulp.task('startServer', function() {
    return require('./express.server');
});

//gulp.task('watch', function() {
//    gulp.watch(path.HTML, ['replaceHTMLsrc']);
//
//    var watcher  = watchify(browserify({
//        entries: [path.ENTRY_POINT],
//        transform: [reactify],
//        debug: true,
//        cache: {}, packageCache: {}, fullPaths: true
//    }));
//
//    return watcher.on('update', function () {
//        watcher.bundle()
//            .pipe(source(path.OUT))
//            .pipe(gulp.dest(path.DEST_SRC));
//        console.log('Updated');
//    })
//        .bundle()
//        .pipe(source(path.OUT))
//        .pipe(gulp.dest(path.DEST_SRC));
//});

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

gulp.task('watch', function() {
    return gulp.watch(path.LESS, ['buildLess']);
    return gulp.watch(path.JS, ['buildReact']);
});

//gulp.task('build', function(){
//    browserify({
//        entries: [path.ENTRY_POINT],
//        transform: [reactify]
//    })
//        .bundle()
//        .pipe(source(path.MINIFIED_OUT))
//        .pipe(streamify(uglify({file:path.MINIFIED_OUT })))
//        .pipe(gulp.dest(path.DEST_BUILD));
//});
//
//gulp.task('replaceHTML', function(){
//    gulp.src(path.HTML)
//        .pipe(htmlreplace({
//            'js': 'build/' + path.MINIFIED_OUT
//        }))
//        .pipe(gulp.dest(path.DEST));
//});

//gulp.task('production', ['clean', 'replaceHTML', 'build']);

gulp.task('buildLess', function(){
    return gulp.src('./src/css/styles.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', function (cb) {
    runSequence('clean', 'copyHTML', 'buildReact', 'buildLess', 'watch', 'startServer', cb);
});
