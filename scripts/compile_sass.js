var sass = require('node-sass');
var fs = require('fs');
var path = require('path');

var inputPath = path.resolve(__dirname, '../src/style/style.scss');
var outputPath = path.resolve(__dirname, '../build/style.css');

var writeCss = (css, callback) => {
  // write to the output as a js file
  fs.writeFile(outputPath, css, function (err) {
    if (err) {
      callback(err);
      return;
    }

    callback(null);
  });
}

var renderComplete = (callback) => {
  return (err, result) => {
    // if there was an error rendering the SASS, bubble it up
    if (err) {
      callback(err);
      return;
    }

    // if no error rendering, write the result
    writeCss(result.css.toString(), callback);
  };
}

module.exports = (callback) => {
  // use node-sass to render the sass
  sass.render({
    file: inputPath,
    outputStyle: 'compressed'
  }, renderComplete(callback));
}
