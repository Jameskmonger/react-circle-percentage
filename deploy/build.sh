# go up to source directory
cd ..

# copy the index.html and add the SHa to it
cp src/index.html out/index.html
sed -i 's/###SHA###/'"$SHA"'/g' out/index.html

# run webpack, passing the sha in
DEPLOY_SHA=$SHA npm run webpack

# copy the css
cp src/css/style.css out/style-$SHA.css

# copy vendor code
mkdir out/vendor
cp node_modules/react-circle-percentage/build/style.css out/vendor/react-circle-percentage.css

# go back to deploy directory
cd deploy