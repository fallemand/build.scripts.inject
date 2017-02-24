/**
 * Dependencies
 */
var concat = require('gulp-concat');
var size = require('gulp-size');
var plumber = require('gulp-plumber');
var log = require('ui-gulp_tasks/log');
var merge2 = require('merge2');
var mkdirp = require('mkdirp');
var replace = require('gulp-replace');
var fs = require('fs');
var util = require('gulp-util');

/**
 * Name
 */
var taskname = 'build:scripts-inject';

/**
 * Module
 */
module.exports = function (gulp, paths, bundles) {
    if (!gulp || !paths || !bundles) {
        return log.module(taskname);
    }

    /**
     * Task
     */
    gulp.task(taskname, function () {
        if (!paths.build || !paths.build.scripts || !bundles.scripts || !Object.keys(bundles.scripts).length) {
            return log.task(taskname);
        }

        /**
         * Configuration
         */
        mkdirp.sync(paths.build.scripts);

        /**
         * Execution
         */
        var tasks = [];

        var replaceFunction = function(string) {
            string = string
                .replace('inject(\'', '')
                .replace('\');', '');
            var file = './src/scripts/' + string + '.js';
            if(fs.existsSync(file)) {
                return fs.readFileSync(file, 'utf8').replace(/inject\((.*)\)\;/g, replaceFunction);
            }
            return util.log(util.colors.red(
                'Can not inject file ',
                util.colors.underline(string),
                'file does not exists'
            ));
        };

        Object.keys(bundles.scripts).forEach(function (name) {
            tasks.push(
                gulp.src(bundles.scripts[name])
                    .pipe(replace(/inject\((.*)\)\;/g, replaceFunction))
                    .pipe(plumber())
                    .pipe(concat(name + '.js'))
                    .pipe(size({'title': 'Size of JS bundle (build) "' + name + '.js":'}))
                    .pipe(gulp.dest(paths.build.scripts))
            );
        });
        return merge2(tasks);
    });
};
