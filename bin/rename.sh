find . -name '*.css' -exec sh -c 'mv "$0" "${0%.css}.scss"' {} \;
