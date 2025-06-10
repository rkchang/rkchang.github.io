# Raymond's Personal Website

This repository contains both my personal website and my resume.

Build artifacts
```
make publish
```

Cleanup artifacts
```
make clean
```

## Website (portfolio)

Run
```
npm run dev
```

Build
```
npm run build
```

## Resume (resume)

Preview
```
latexmk -pdf -pvc Raymond_Chang_resume.tex
```

Build
```
latexmk -pdf
```

