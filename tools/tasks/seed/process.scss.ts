import {join} from 'path';
import {APP_SRC, APP_DEST} from '../../config';
import * as gulp from 'gulp';
import * as sass from 'gulp-sass';

let sassOptions = {
  includePaths: ['src/assets']
};

export = () => {
        return gulp.src(join(APP_SRC, '**', '*.scss'))
            .pipe(sass(sassOptions))
            .pipe(gulp.dest(APP_DEST));
}
