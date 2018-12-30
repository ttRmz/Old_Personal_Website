var gulp = require('gulp')
var gutil = require('gulp-util')
var livereload = require('gulp-livereload')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var csso = require('gulp-csso')
var plumber = require('gulp-plumber')
var connect = require('gulp-connect')

// Paths
var sassDir = './src/sass/'
var cssDir = './public/style/'

// Set the browser that you want to support
const AUTOPREFIXER_BROWSERS = [
  'ie >= 6',
  'ie_mob >= 6',
  'ff >= 14',
  'chrome >= 9',
  'safari >= 4',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 6',
]

// Start local server with livereload set up

gulp.task('connect', function() {
  connect.server({
    port: 8001,
    livereload: true,
  })
})

gulp.task('style', function() {
  gulp
    // Input
    .src(sassDir + '*.scss')

    // Prevent pipe breaking caused by errors from gulp plugins
    .pipe(plumber())

    // SASS compiler
    .pipe(
      sass({
        outputStyle: 'mested',
      }).on('error', sass.logError)
    )

    // Auto-prefix css styles for cross browser compatibility
    .pipe(autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }))

    // Minify the file
    .pipe(csso())

    // Output.pipe(plumber.stop())
    .pipe(plumber.stop())
    .pipe(gulp.dest(cssDir))

    .pipe(livereload(['port:3001']))
})

gulp.task('watch', function() {
  livereload.listen()
  gulp.watch(
    [sassDir + '/*.scss', sassDir + '/**/*.scss', './public/index.html'],
    ['style']
  )
})

gulp.task('default', ['style', 'connect', 'watch'])
