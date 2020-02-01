yarn build &&

echo 1 >> log.txt &&

git checkout gh-pages &&

echo 2 >> log.txt &&

mv dist/* ./ && 

echo 3 >> log.txt &&

git add . && 

echo 4 >> log.txt &&

git commit -m 'update' && 

echo 5 >> log.txt &&

git push && 

echo 6 >> log.txt && 

git checkout -