let gulp = require('gulp');

let testSources = [
   'test/tests/*.js',
];

gulp.task('clean', function() {
    return gulp.src(testSources)
});