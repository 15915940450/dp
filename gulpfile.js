var gulp=require('gulp');
var htmlmin=require('gulp-htmlmin');
var cleanCss=require('gulp-clean-css');
var uglify=require('gulp-uglify');
var imagemin=require('gulp-imagemin');
var v='?v=1.0.1';


gulp.task('html',function(){
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace:true}))
    .pipe(gulp.dest('dist/'));
});

gulp.task('css',function(){
  return gulp.src(['css/reset.css','css/grid_fee300.css','css/swiper.css','css/styles.css','tangram/css/master.min.css'])
    .pipe(concatCss("fangxuecong.css"))
    .pipe(cleanCss({compatibility:'ie8'}))
    .pipe(gulp.dest('online/'));
});

gulp.task('js',function(){
  return gulp.src(['js/modernizr.js','js/FSS.js','js/jquery-3.0.0.min.js','js/wave.js','js/theater.min.js','js/swiper.jquery.min.js','js/main.js'])
    .pipe(concat('fangxuecong.js'))
    .pipe(uglify())
    .pipe(gulp.dest('online/'));
});

gulp.task('img',function(){
  return gulp.src('img/**/*')
      //.pipe(imagemin())
      .pipe(gulp.dest('./online/img/'));
});

gulp.task('default',function(){
  console.log('-----http://gulpjs.com/-----');
  console.log('-----1.run gulp basetask-----');
  console.log('-----2.run gulp zhhk-----');
});
