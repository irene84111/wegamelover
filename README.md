# Depoly 
Deploy to `gh-pages` from a `build` folder

### Setp 1
Remove the `build` directory from the project’s .gitignore file.

### Setp 2
```
git add build && git commit -m "commit message here"
```

### Setp 3
```
git subtree push --prefix build origin gh-pages
```

## If need to force push an subtree

### Setp 1
Checkout `develop` and create a local gh-pages branch containing the splitted output folder,
```
git subtree split --prefix build -b gh-pages
```

### Setp 2
Force the push of the `gh-pages` branch to the remote `gh-pages` branch at origin
```
git push -f origin gh-pages:gh-pages
```

### Setp 3
Delete the local `gh-pages` because you will need it: ref
```
git branch -D gh-pages
```
