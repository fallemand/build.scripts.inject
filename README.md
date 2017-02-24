# build.scripts.inject

## What is this?
It's a Gulp Task that lets you inject JS files in others.
This works with the UI-APP scaffolding.

## How it works

1) Copy the task `build.scripts.inject.js` in `ui-app/config/tasks`  

2) Replace the task `build.scripts.concat` with this one.  
![c1](https://cloud.githubusercontent.com/assets/16105726/23305771/19a76dce-fa7f-11e6-8881-ea7c0ae9d287.png)  
![c2](https://cloud.githubusercontent.com/assets/16105726/23305788/327288e8-fa7f-11e6-9cab-155a60e55a1c.png)  

3) Inject files:  
`inject('components/filea');`  
Do not put the .js extension.  
The path is absolute starting from src/scripts.  

4) Generate the bundles, and they will have the injections.  
`npm run build`  

## If you use NPM 2  
Change the dependencies in the file `build.scripts.inject` for this:  
![c5](https://cloud.githubusercontent.com/assets/16105726/23305933/ce237414-fa7f-11e6-9206-99a9eae31ec0.png)  
