yarn build &&
git checkout gh-pages &&
mv dist/* ./ && 
git add . && 
git commit -m 'update' && 
git push && 
git checkout -