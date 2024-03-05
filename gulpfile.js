const variavelgulp = require('gulp');
const variavelsass = require('gulp-sass')(require('sass'));

function compilacaosass(){
    return variavelgulp.src('./source/styles/main.scss')
        .pipe(variavelsass())
        .pipe(variavelgulp.dest('./build/styles'))
}

exports.default = compilacaosass;
exports.sass = compilacaosass;