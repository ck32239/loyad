/*
integration test with gulp
*/

'use strict';

let gulp = require('gulp');
let mocha = require('gulp-mocha');

// mocha test runner
gulp.task('default',(cb) => {
	let app = require('./bin/www');
            app.start((err, serverInstance) => {
                if (err) {
                    console.log(err);
                    return cb();
                }
                gulp.src(['test/integra_test.js'])
                .pipe(mocha())
                .on('end',() => {
                        console.log("closing server instance..");
                        serverInstance.close();
                        cb();
                    });
            })
    
});