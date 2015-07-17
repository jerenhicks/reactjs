var gulp = require('gulp');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
var del = require('del');  // Deletes files.
var runSequence = require('run-sequence');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');

var path = {
    HTML: 'src/index.html',
    MINIFIED_OUT: 'build.min.js',
    OUT: 'build.js',
    DEST: 'dist',
    DEST_BUILD: 'dist/build',
    DEST_SRC: 'dist/src',
    ENTRY_POINT: './src/js/main.js',
    JS: ['src/js/**/*.js'],
    LESS: ['src/css/*.less'],
    NODE_DIR: './node_modules',
    BOOTSTRAP_LOCATION: './node_modules/bootstrap/dist/js/bootstrap.js'
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

gulp.task('buildJS', function() {
    return browserify({
        entries: [path.ENTRY_POINT],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true
    })  .transform(reactify)
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./dist/src/'));
});

gulp.task('buildThirdPartyJS', function() {
    var javascript = new browserify({
        debug:true,
        fullPaths:true
    });
    javascript.add(path.BOOTSTRAP_LOCATION);
    javascript.bundle()
        .pipe(source('thirdparty.js'))
        .pipe(gulp.dest('./dist/src/'));
});

gulp.task('buildJSMin', function() {
    return browserify({
        entries: [path.ENTRY_POINT]
    })  .transform(reactify)
        .bundle()
        .pipe(source('main.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('./dist/src/'));
});

gulp.task('watch', function() {
    gulp.watch(path.LESS, ['buildLess']);
    return gulp.watch(path.JS, ['buildJS']);
});

gulp.task('buildLess', function(){
    return gulp.src(['./src/css/styles.less', './node_modules/bootstrap/less/bootstrap.less'])
        .pipe(less())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('buildLessMin', function(){
    return gulp.src(['./src/css/styles.less', './node_modules/bootstrap/less/bootstrap.less'])
        .pipe(less())
        .pipe(minifyCSS())
        //possibly rename?
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', function (cb) {
    runSequence('clean', 'copyHTML', 'buildJS', 'buildThirdPartyJS', 'buildLess', 'watch', 'startServer', cb);
});

gulp.task('production', function (cb) {
    runSequence('clean', 'copyHTML', 'buildJSMin', 'buildLessMin', cb);
});
