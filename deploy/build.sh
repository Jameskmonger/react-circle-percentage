# go up to source directory
cd ..

cp src/index.html out/index.html
npm run webpack
mv src/bundle.js out/bundle.js

# go back to deploy directory
cd deploy
