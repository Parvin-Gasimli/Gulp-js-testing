var gulp=require("gulp"),
 concat =require('gulp-concat'),
 prefixer =require("gulp-autoprefixer"),
 sass=require("gulp-sass")
 


// gulp.task("run",function(){
//   return gulp.src("project/*.html")
 
//   .pipe(gulp.dest('dist'))
    
// })

// gulp.task("run",function(){
//   return gulp.src(["project/index.html","project/style.css"])
 
//   .pipe(gulp.dest('dist'))
    
// })
gulp.task("css",function(){
  return gulp.src('project/*.css')
  .pipe(concat('main.css'))
  .pipe(gulp.dest('dist'))
    
})
gulp.task("scss",function(){
  return gulp.src('project/scss/style.scss')
  .pipe(sass)
  .pipe(concat('test.css'))
  .pipe(gulp.dest('dist/css'))
    
})
gulp.task("css1",function(){
  return gulp.src('project/*.css')
  .pipe(prefixer())
  .pipe(concat('main.css'))
  .pipe(gulp.dest('dist'))
    
})

gulp.task("js",function(){
  return gulp.src('project/*.js')
  .pipe(concat('all.js'))
  .pipe(gulp.dest('dist'))
    
})


