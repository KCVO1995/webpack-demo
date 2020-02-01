yarn build &&
git checkout gh-pages &&
mv dist/* ./ &&
sudo git add . &&
sudo git commit -m 'update' &&
sudo git push &&
sudo git checkout -