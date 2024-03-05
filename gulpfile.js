const variavelgulp = require('gulp');
const variavelsass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function compressaoJavaScript(){
    return variavelgulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(variavelgulp.dest('./build/scripts'))
}

function compressaoDeImagens(){
    return variavelgulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(variavelgulp.dest('./build/images'))
}

function compilacaosass(){
    return variavelgulp.src('./source/styles/main.scss')
        .pipe(variavelsass())
        .pipe(variavelgulp.dest('./build/styles'))
}

exports.default = compilacaosass;
exports.sass = compilacaosass;
exports.javascript = compressaoJavaScript;
exports.images = compressaoDeImagens;