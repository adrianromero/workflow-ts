

var gulp = require('gulp'),
  browserify = require('browserify'),
  connect = require('gulp-connect'),
  tsify = require('tsify'),
  source = require('vinyl-source-stream');

 var config = {
   sourceFolder: './ts/',
   sourceFile: 'index.ts',
   destFolder: './web/',
   destFile: 'build.js',
   watchExtension: '*.ts',
   debug: true,
 };

gulp.task('browserify', function() {
  var bundler = browserify({
      basedir: config.sourceFolder,
      debug: config.debug
  })
  .add(config.sourceFile)
  .plugin(tsify);

  return bundler.bundle()
  .pipe(source(config.destFile))
  .pipe(gulp.dest(config.destFolder));
});

gulp.task('watch', function() {
  gulp.watch(config.sourceFolder + '**/' + config.watchExtension, ['browserify']);
  gulp.watch(config.destFolder + config.destFile, ['html']);
});

gulp.task('html', function () {
    gulp.src(config.destFolder + config.destFile)
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: config.destFolder,
    livereload: true
  });
});


gulp.task('default', ['browserify']);
gulp.task('develop', ['connect', 'watch']);
