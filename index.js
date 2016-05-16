/**
 * Created by Peter Fox on 16/05/2016.
 */

var gulp = require('gulp'),
    mjml = require('gulp-mjml'),
    rename = require('gulp-rename');
    Elixir = require('laravel-elixir');

var config = Elixir.config;
var Task = Elixir.Task;

Elixir.extend('mjml', function(src, output, mjmlEngine) {
    var paths = prepGulpPaths(src, output);

    new Task('mjml', function() {
        gulp.src(paths.src.path)
            .pipe(mjml(mjmlEngine))
            .pipe(rename(function (path) {
                path.extname = '.blade.php'
            }))
            .pipe(gulp.dest(paths.output.path));
    })
        .watch(paths.src.baseDir + '/**/*.mjml')
        .ignore(paths.output.path);
});


/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|Array} src
 * @param  {string|null}  output
 * @return {GulpPaths}
 */
var prepGulpPaths = function(src, output) {
    return new Elixir.GulpPaths()
        .src(src || '/**/*.mjml', config.get('assets.email.mjml.folder'))
        .output(output || config.viewPath);
};