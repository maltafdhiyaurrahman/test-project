#!/bin/bash

# Keluar jika ada kesalahan
set -e

# Buat build untuk proyek Vue
npm run build

# Masuk ke folder build
cd dist

# Inisialisasi Git
git init
git add -A
git commit -m 'Deploy'

# Push ke GitHub Pages
git push -f https://github.com/maltafdhiyaurrahman/test-project.git master:gh-pages

# Kembali ke direktori sebelumnya
cd -
