var mkdir = require("mkdirp");
var path = require("path");
var compileSass = require("./compile_sass");
var compileJs = require("./compile_js");

function onError (error) {
  console.log("A build error occured:");
  console.log(error);
}

var buildPath = path.resolve(__dirname, '../build/');

// create the build folder
mkdir(buildPath, (mkdirError, folderCreated) => {
  if (mkdirError) {
    onError(mkdirError);
    return;
  }

  if (folderCreated) {
    console.log("/build/ folder created successfully");
  } else {
    console.log("/build/ folder already exists");
  }

  // write the SASS
  compileSass((sassError) => {
      if (sassError) {
        onError(sassError);
        return;
      }

      console.log("CSS written successfully");

      // compile the JS
      compileJs((jsError) => {
        if (jsError) {
          onError(jsError);
          return;
        }

        console.log("JS written successfully");
      });
  });
});
