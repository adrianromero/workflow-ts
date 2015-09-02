

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

gulp.task('default', ['.build']);
gulp.task('.build', ['build.browserify'])
gulp.task('.develop-start', ['develop.server', 'develop.watch']);
gulp.task('.develop-stop', ['develop.serverclose']);

gulp.task('build.browserify', function() {
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

gulp.task('develop.watch', function() {
  gulp.watch(config.sourceFolder + '**/' + config.watchExtension, ['build.browserify']);
  gulp.watch(config.destFolder + config.destFile, ['develop.reload']);
});

gulp.task('develop.reload', function () {
    gulp.src(config.destFolder + config.destFile)
    .pipe(connect.reload());
});

gulp.task('develop.server', function() {
  connect.server({
    root: config.destFolder,
    livereload: true
  });
});

gulp.task('develop.serverclose', function() {
  // do nothing
});
