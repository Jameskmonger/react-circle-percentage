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

# backup the .git for out, delete everything (hide errors) and then restore
mkdir ___deploy_tmp
mv out/.git ___deploy_tmp/.git
rm -rf out/* out/.* 2> /dev/null
mv ___deploy_tmp/.git out/.git
rm -rf ___deploy_tmp

# run custom build scripts and then go back up
cd deploy
SHA=$SHA bash build.sh
cd ..

# if we're not in debug mode then commit etc
if [ -z "$DEBUG" ]; then
  # commit our changes
  cd out
  git add .
  git commit -m "Compiling and committing (${SHA})"

  # Now that we're all set up, we can push.
  git push $SSH_REPO $OUTPUT_BRANCH

  # delete the 'out' dir
  cd ..
  rm -rf out
fi
