
/**
 * @roxi/routify 2.18.8
 * File generated Mon Feb 13 2023 13:11:43 GMT+0900 (대한민국 표준시)
 */

export const __version = "2.18.8"
export const __timestamp = "2023-02-13T04:11:43.864Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "root",
  "filepath": "/",
  "root": true,
  "ownMeta": {},
  "absolutePath": "src/pages",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "C:/Users/teem0213/Downloads/storybook-main/storybook-main/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "test",
      "filepath": "/test",
      "name": "test",
      "ext": "",
      "badExt": false,
      "absolutePath": "C:/Users/teem0213/Downloads/storybook-main/storybook-main/src/pages/test",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "[slug].svelte",
          "filepath": "/test/[slug].svelte",
          "name": "[slug]",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "C:/Users/teem0213/Downloads/storybook-main/storybook-main/src/pages/test/[slug].svelte",
          "importPath": "../src/pages/test/[slug].svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/test/:slug",
          "id": "_test__slug",
          "component": () => import('../src/pages/test/[slug].svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/test"
    }
  ],
  "isLayout": false,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

