const { src, dest, watch, series, parallel } = require('gulp');// Access gulp via the methods 
var sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass'); 
sass.compiler = require('node-sass'); // Compile the files
var concat = require('gulp-concat'); // It is mainly used to concatenate files
var cleanCSS = require('gulp-clean-css'); // Process CSS files to minimize size.
var uglify = require('gulp-uglify-es').default; // Minimizes the size of Javascript´ files.
const htmlmin = require('gulp-htmlmin'); // Minimizes the size of html´ files.
const image = require('gulp-image');
var babel = require("gulp-babel");

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


// Create Files´paths object
const files = {
    htmlPath: 'src/**/*.html', // matchar alla filer som slutar med .html i rotmappen och eventuella underkataloger.
    cssPath: 'src/**/*.css',
    jsPath: 'src/**/*.js',
    sassPath: 'src/**/*.scss',
    imgPath: 'src/**/*.jpg',
}

// Babel
function babelTranspile () {
    return src(files.jsPath)
    .pipe(sourcemaps.init()) 
    .pipe(babel())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(dest("pub/js"))
    .pipe(browserSync.stream());
}

// Copy HTML´S files 
function htmlFiles () {
    return src(files.htmlPath) // Tells the Gulp task what files to use for the task
    .pipe(htmlmin({ collapseWhitespace: true, removeComments:true })) // Minimize files´size by removing whitespace and commets
    .pipe(dest('pub')) // Tells Gulp where to output the files once the task is completed
    .pipe(browserSync.stream()); // Synchronize files´changes to all browser
    }

// Concat and compress JAVASCRIPT´S files
function jsFiles () {
    return src(files.jsPath) // Tells the Gulp task what files to use for the task
    .pipe(uglify()) // Minimizes the size of Javascript´ files by removing whitespace and commets
    .pipe(concat('main.js')) // Concat all js-files into the main.js
    .pipe(dest('pub/js')) // Save those files into pub-directory
    .pipe(browserSync.stream()); // Synchronize files´changes to all browser
    }

// Concat and compress CSS´ files
function cssFiles () {
    return src(files.cssPath) // Tells the Gulp task what files to use for the task
    .pipe(concat('style.css')) // Concat all js-files into the main.js
    .pipe(cleanCSS()) // Minimizes the size of CSS' files by removing whitespace and commets
    .pipe(dest('pub/css')) // Save those files into pub-subdirectory
    .pipe(browserSync.stream()); // Synchronize files´changes to all browser
    }

// Concat and compress IMAGES´ files
function imgFiles () {
    return src(files.imgPath)
    .pipe(image())
    .pipe(dest('pub/'))
    .pipe(browserSync.stream()); // Synchronize files´changes to all browser
    }

    // Concat and compress SASS´ files
function sassFiles () {
    return src(files.sassPath) // Tells the Gulp task what files to use for the task
    .pipe(sourcemaps.init()) 
    .pipe(sass({outputStyle: 'compressed', indendedSyntax: 'true'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(dest('pub/css')) // Save those files into pub-directory
    .pipe(browserSync.stream());
    }

// Watch Task browser reload
function watchTask () {
    browserSync.init({
        server: {
            baseDir: "pub/"
        }
    });
    // Look after files´changes 
    watch([files.htmlPath, files.jsPath, files.cssPath, files.sassPath, files.imgPath], parallel(htmlFiles, jsFiles, cssFiles, sassFiles, imgFiles, babelTranspile)).on("change", reload); 
    }


// Export private tasks
exports.default = series(
    parallel(htmlFiles, jsFiles, cssFiles, sassFiles, imgFiles, babelTranspile), // Runs all tasks simultaneously
    watchTask // Look after changes in the tasks´s files
);



