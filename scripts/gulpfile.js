const path = require("path");
const { task, series, src, dest, watch } = require("gulp");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));

// Change working directory to the parent of the 'scripts' folder
process.chdir(path.resolve(__dirname, ".."));

task("sass", function () {
  return src("**/*.razor.scss") // Source folder
    .pipe(sass().on("error", sass.logError))
    .pipe(dest(path.resolve(__dirname, "..")));
});

task("watch", function () {
  watch("**/*.razor.scss", series("sass"));
});

task("default", series("sass", "watch"));
