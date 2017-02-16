var babel = require('babel-core');
var fs = require('fs');
var path = require('path');

var inputPath = path.resolve(__dirname, '../src/index.js');
var outputPath = path.resolve(__dirname, '../build/index.js');

// make the final JS changes
var finaliseJs = (js) => {
  return js.replace("./style/style.scss", "./style.css");
}

var writeJs = (js, callback) => {
  // make any final changes we need
  var finalisedJS = finaliseJs(js);

  fs.writeFile(outputPath, finalisedJS, (err) => {
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
