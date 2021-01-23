# Vite 2.0.0 beta Preact regression

When using `vite@2.0.0-beta.34`, this project can be started locally (using `vite dev`). When updating to `2.0.0-beta.35` it provides the following error on `vite dev`:

```
7:51:42 PM [vite] Internal server error: dependency "preact" is imported in source code, but was transitively pre-bundled as part of another package. It should be explicitly listed as a dependency in package.json in order to avoid duplicated instances of this module.
  Plugin: vite:import-analysis
  File: /Users/USERNAME/Code/vite-preact-ts/src/main.tsx
      at tryNodeResolve (/Users/USERNAME/Code/vite-preact-ts/node_modules/vite/dist/node/chunks/dep-6f99a5ef.js:39728:19)
      at Context.resolveId (/Users/USERNAME/Code/vite-preact-ts/node_modules/vite/dist/node/chunks/dep-6f99a5ef.js:39625:28)
      at Object.resolveId (/Users/USERNAME/Code/vite-preact-ts/node_modules/vite/dist/node/chunks/dep-6f99a5ef.js:53441:53)
      at processTicksAndRejections (internal/process/task_queues.js:93:5)
      at async TransformContext.resolve (/Users/USERNAME/Code/vite-preact-ts/node_modules/vite/dist/node/chunks/dep-6f99a5ef.js:53217:23)
      at async normalizeUrl (/Users/USERNAME/Code/vite-preact-ts/node_modules/vite/dist/node/chunks/dep-6f99a5ef.js:46204:34)
      at async TransformContext.transform (/Users/USERNAME/Code/vite-preact-ts/node_modules/vite/dist/node/chunks/dep-6f99a5ef.js:46333:57)
      at async Object.transform (/Users/USERNAME/Code/vite-preact-ts/node_modules/vite/dist/node/chunks/dep-6f99a5ef.js:53507:30)
      at async transformRequest (/Users/USERNAME/Code/vite-preact-ts/node_modules/vite/dist/node/chunks/dep-6f99a5ef.js:60120:29)
      at async /Users/USERNAME/Code/vite-preact-ts/node_modules/vite/dist/node/chunks/dep-6f99a5ef.js:60211:32
```

When trying the latest version (currently `2.0.0-beta.44`), the failure is in the optimization phase:

```
Optimizable dependencies detected:
@tabler/icons, preact
Pre-bundling them to speed up dev server page load...
(this will be run only when your dependencies or config have changed)
 > node_modules/@tabler/icons/icons-react/dist/index.esm.js: error: Could not resolve "react" (mark it as external to exclude it from the bundle)
    1 │ import { createElement } from 'react';
      ╵                               ~~~~~~~

1 error
(node:76878) UnhandledPromiseRejectionWarning: Error: Build failed with 1 error:
node_modules/@tabler/icons/icons-react/dist/index.esm.js:1:30: error: Could not resolve "react" (mark it as external to exclude it from the bundle)
    at failureErrorWithLog (/Users/USERNAME/Code/vite-preact-ts/node_modules/esbuild/lib/main.js:969:15)
    at buildResponseToResult (/Users/USERNAME/Code/vite-preact-ts/node_modules/esbuild/lib/main.js:767:32)
    at /Users/USERNAME/Code/vite-preact-ts/node_modules/esbuild/lib/main.js:819:20
    at handleIncomingPacket (/Users/USERNAME/Code/vite-preact-ts/node_modules/esbuild/lib/main.js:566:9)
    at Socket.readFromStdout (/Users/USERNAME/Code/vite-preact-ts/node_modules/esbuild/lib/main.js:482:7)
    at Socket.emit (events.js:315:20)
    at addChunk (_stream_readable.js:309:12)
    at readableAddChunk (_stream_readable.js:284:9)
    at Socket.Readable.push (_stream_readable.js:223:10)
    at Pipe.onStreamRead (internal/stream_base_commons.js:188:23)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:76878) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:76878) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

Seems like in the latest version, `alias` doesn't work?
Not sure if solving this, will actually solve the issue from version `beta.35` though.
