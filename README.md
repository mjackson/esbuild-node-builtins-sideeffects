This repo shows how esbuild leaves the `import` for unused node builtins in the output bundle.

To reproduce:

```
$ npm install
$ node build.js
```

Then inspect `output.js`.

Now switch the `import` in `input.js` to import from `./local-fs` instead of `fs`. Run the build again and you should not see the `import` in the output because there is a `sideEffects: false` in `package.json`.

It'd be nice if esbuild used an implicit `sideEffects: false` for node builtins since they are purely library code and don't have any side effects.