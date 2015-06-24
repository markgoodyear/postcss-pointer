# postcss-pointer [![Build Status][ci-img]][ci]
[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/markgoodyear/postcss-pointer.svg?branch=master
[ci]:      https://travis-ci.org/markgoodyear/postcss-pointer
A [PostCSS] plugin to replace `pointer: cursor` with `cursor: pointer`. 

## Why?
Because of this Tweet: https://twitter.com/_dte/status/613396433748692992

## Example

Input:
```css
.elem {
  pointer: cursor;
}
```

Output:
```css
.elem {
  cursor: pointer;
}
```

## Usage
Install:
```
npm install postcss-pointer --save-dev
```

Then include the plugin:
```js
postcss([ require('postcss-pointer')(options) ])
```

See [PostCSS] docs for examples for your environment.

## Licence
Released under the MIT license.
