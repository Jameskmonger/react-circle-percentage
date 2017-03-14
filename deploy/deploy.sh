# setup branch info
SOURCE_BRANCH="gh-pages-integration"
OUTPUT_BRANCH="gh-pages"

# get the repo info
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}

# get the SHA of the current source commit
SHA=`git rev-parse --verify HEAD`

# clone the whole repo into 'out' and put that repo on the target branch
git clone $REPO out
cd out
git checkout $OUTPUT_BRANCH
cd ..

# delete all compiled
rm -rf out/**/*

# run custom build scripts
./build.sh

# commit our changes
cd out
git add .
git commit -m "Compiling and committing (${SHA})"

# Now that we're all set up, we can push.
# git push $SSH_REPO $TARGET_BRANCH
