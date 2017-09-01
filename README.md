# Depoly 
Deploy to `gh-pages` from a `build` folder

## Setp 1
Remove the `build` directory from the project’s .gitignore file.

## Setp 2
```
git add build && git commit -m "commit message here"
```

## Setp 3
```
git subtree push --prefix build origin gh-pages
```
