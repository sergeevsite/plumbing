const { series } = require('gulp');
const { src, dest } = require('gulp');
cleanCSS = require('gulp-clean-css'); // install: npm install --save-dev gulp-clean-css
uglify = require('gulp-uglify'); // install: npm install --save-dev gulp-uglify
rename = require('gulp-rename'); // install: npm install --save-dev gulp-rename
htmlmin = require('gulp-htmlmin'); // install: npm install --save-dev gulp-htmlmin
tinypng = require('gulp-tinypng-compress'); // install: npm install --save-dev gulp-tinypng-compress

function minifyCss() {
  return src('./src/css/*.css') // Выбираем из папки файлы
    .pipe(cleanCSS({
      compatibility: 'ie8'
    })) // Сжимаем их с помощью плагина
    .pipe(dest('dist/css/')); // Выгружаем в папку
}
exports.minifyCss = minifyCss;

function moveJs() {
  return src('./src/js/*.min.js') // Выбираем из папки файлы
    .pipe(dest('dist/js/')); // Выгружаем в папку
}

function minifyJs() {
  return src(['./src/js/*.js', '!./src/js/*.min.js']) // Исключаем минифицированные файлы
    .pipe(uglify()) // Сжимаем JS файл
    .pipe(rename({extname: '.min.js'})) // Добавляем суффикс .min
    .pipe(dest('dist/js/')); // Выгружаем в папку назначения
}
exports.mmJs = series(moveJs, minifyJs);

function minifyHtml() {
  return src('./src/*.html') // Выбираем из папки файлы
    .pipe(htmlmin({
      collapseWhitespace: true 
    })) // Сжимаем их с помощью плагина
    .pipe(dest('dist/')); // Выгружаем в папку 
}
exports.minifyHtml = minifyHtml;

function movePhp() {
  return src('./src/*.php') // Выбираем из папки файлы
    .pipe(dest('dist/')); // Выгружаем в папку 
}
exports.movePhp = movePhp;

function moveIcon() {
  return src('./src/*.ico') // Выбираем из папки файлы
    .pipe(dest('dist/')); // Выгружаем в папку 
}
exports.moveIcon = moveIcon;

function moveFonts() {
  return src('./src/fonts/**/*') // Выбираем из папки файлы
    .pipe(dest('dist/fonts')); // Выгружаем в папку 
}
exports.moveFonts = moveFonts;

function tinyPng() {
  return src('./src/img/**/*.{png,jpg,jpeg}') // Выбираем из папки файлы
    .pipe(tinypng({
      key: 'OTZQQAYraBWzOakitcCayjs6KVZCO6wE'
    })) // Сжимаем их с помощью плагина
    .pipe(dest('dist/img/')); // Выгружаем в папку 
}
exports.tinyPng = tinyPng;

function moveSVG() {
  return src('./src/img/**/*.svg') // Выбираем из папки файлы
    .pipe(dest('dist/img')); // Выгружаем в папку 
}
exports.moveSVG = moveSVG;


exports.build = series(minifyCss, moveJs, minifyJs, minifyHtml, movePhp, moveIcon, moveFonts, tinyPng, moveSVG);




