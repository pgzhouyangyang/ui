mkdir temp_web
VERSION=`npx select-version-cli`

npm run lib
cd temp_web
git clone https://github.com/pgzhouyangyang/lib.git && cd lib
 rm -rf `find * ! -name README.md`
  cp -rf ../../lib/** .
  git add -A .
  git commit -m "[build] $VERSION"
  git tag $VERSION
  git push  origin master --tags
  cd ../..

  npm run build
  cd temp_web
  git clone https://github.com/pgzhouyangyang/pgzhouyangyang.github.io.git && cd pgzhouyangyang.github.io
  rm -rf *
  cp -rf ../../dist/** .
  git add -A .
  git commit -m "[build] $VERSION"
  git tag $VERSION
  git push origin master --tags
  cd ../..
