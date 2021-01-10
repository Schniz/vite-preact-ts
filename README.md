# Vite 2.0.0 beta tree shaking regression

When using Vite `vite@1.0.0-rc.13`, `@tabler/icons` could tree-shake. Using `vite@2.0.0-beta.12`, it does not tree shake the module.

Take a look at the provided GH action to see the analyzed data:

```
█████████████████████████████████████████████████░
file:            /node_modules/@tabler/icons/icons-react/dist/index.umd.js
bundle space:    98.3 %
rendered size:   1.252 MB
original size:   1.252 MB
code reduction:  0.02 %
dependents:      1
  - /src/app.tsx
```

Looks like it does not bundle the `esm` version?
