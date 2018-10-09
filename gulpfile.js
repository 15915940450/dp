var gulp=require('gulp');
var htmlmin=require('gulp-htmlmin');
var exReplace=require('gulp-ex-replace');
var concatCss=require('gulp-concat-css');
var cleanCss=require('gulp-clean-css');
var uglify=require('gulp-uglify');
var imagemin=require('gulp-imagemin');
var v='?v=1.0.1';


gulp.task('html',function(){
  return gulp.src('index.html')
    .pipe(exReplace(/<link rel="stylesheet".+?\/>/g,''))
    .pipe(exReplace(/<\/head>/g,'<link rel="stylesheet" href="wan.css'+v+'" /></head>'))
    .pipe(htmlmin({collapseWhitespace:true}))
    .pipe(gulp.dest('dist/'));
});


gulp.task('css',function(){
  return gulp.src(['css/swiper.css','css/main.css'])
    .pipe(concatCss("wan.css"))
    .pipe(cleanCss({compatibility:'ie8'}))
    .pipe(gulp.dest('dist/'));
});

gulp.task('js',function(){
  return gulp.src(['js/jquery-1.9.1.min.js','js/swiper.min.js'])
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('js_main',function(){
  return gulp.src(['js/main.js'])
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('img',function(){
  return gulp.src('images/**/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./dist/images/'));
});

gulp.task('dist',['html','css','js','js_main','img'],function(){
  console.log('-------------dist okay.');
});

gulp.task('default',function(){
  console.log('-----http://gulpjs.com/-----');
  console.log('-----1.run gulp dist-----');
});
