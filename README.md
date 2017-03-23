# build.scripts.concat - inject

## What is this?
This parameter lets you inject JS files in others.
This works with the UI-APP scaffolding.

## How it works
Inject is inactive by default in the [ui-gulp_tasks](https://github.com/mercadolibre/ui-gulp_tasks), you need to activate it

### 1) Edit your gulpfile.js
```js
var buildConcat = require('ui-gulp_tasks/tasks/build.scripts.concat');
buildConcat(gulp, paths, bundles, {
    'inject': true,
    'injectBasePath': './src/scripts/'
})
```
`injectBasePath`: This is the base path where inject with look for files. 

For example, if you have this in your js file:  
`inject('components/filea');`  

Inject with look the file here:  
`./src/scripts/components/filea.js`

### 2) Inject files: [Example](https://github.com/fallemand/build.scripts.inject/blob/master/ui-app/src/scripts/components/a.js)  
```
inject('components/filea');
```
Do not put the .js extension.  
The path is absolute starting from `injectBasePath`.  

### 3) Generate the bundles, and they will have the injections.  
```
npm run build
```
 
