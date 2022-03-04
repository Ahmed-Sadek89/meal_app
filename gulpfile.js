const {src, dest, watch, task, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const purgecss = require('gulp-purgecss');



task('sass', async() => {
    return src(['src/Styles/Scss/Index.scss'])
        //.pipe(sass())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(prefix('last 3 versions'))
        .pipe(purgecss({content: ['public/index.html', 'src/Components/**/*.js', 'src/General/**/*.js', 'src/App.js']}))
        .pipe(dest('src/Styles/Css'))
})

task('watch', async () => {
    watch(['src/Styles/Scss/*.scss',  'src/Components/**/*.scss', 'src/General/**/*.scss', 'src/Components/**/*.js', 'src/General/**/*.js', 'src/App.js'], series('sass'))
})