var babel = require('babel-core');
var fs = require('fs');
var path = require('path');

var inputPath = path.resolve(__dirname, '../../src/index.js');
var outputPath = path.resolve(__dirname, '../../build/index.js');

var writeJs = (js, callback) => {
  fs.writeFile(outputPath, js, (err) => {
    if (err) {
      callback(err);
      return;
    }

    callback(null);
  });
};

var transformComplete = (callback) => {
  return (err, result) => {
    // if there was an error transforming, bubble it up
    if (err) {
      callback(err);
      return;
    }

    // if there was no error, write the JS
    writeJs(result.code, (err) => callback(err));
  };
}

module.exports = (callback) => {
  babel.transformFile(inputPath, {
    presets: ["react", "latest"]
  }, transformComplete(callback));
}
