#!/usr/bin/env sh

# abort on errors
set -e

git init
git add -A
git commit -m 'deploy to main'

git push -f https://github.com/jersonmr/jersonmr.github.io.git main

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git subtree push --prefix dist origin gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -