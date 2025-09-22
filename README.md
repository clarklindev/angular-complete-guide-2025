# Section 01 - getting started

```sh
npm i -g @angular/cli

ng new first-angular-app
```

## vscode extensions

- angular language service (angular)
- angular essentials (john papa)

## angular-cli

- components

```
ng g c user
```

- directives

```
ng g d ...
```

## versions

### angular > 17

    - signal()
    - @if/@else

### angular > 17.2

    - two way binding using model() saves you from separate Input() and Output()
    - here... 'size' is a ModelSignal

```ts
import { model, EventEmitter } from "@angular/core";

// @Input({required:true}) size!:{width: string; height:string};
// @Output() sizeChange = new EventEmitter<{width: string; height:string}>();

size = model.required<{ width: string; height: string }>();

onReset(){
    // this.sizeChange.emit({width: '200', height: '100'});
    this.size.set({
        width: '200',
        height: '100'
    })
}
```

## building angular app

```
npm run build
```

## deploy

- deploy the 'dist/' to a static webhost

### firebase hosting - install firebase cli

#### step1 - install firebase cli

```
npm install -g firebase-tools
```

### step2 - firebase hosting - initialize your project

#### - login

```
firebase login
```

#### - initialize project

```
firebase init
```

- (select firebase features -> choose "hosting")
  - `hosting:  files for firebase hosting and (optionally) setup github action deploys`
- use an existing project (we created the project in firebase)
- select a default firebase project for this directory
- what do you want to use as your public directory: `dist/routing/browser`
- configure as a single page app - `Y` - SPA -> all requests reach index.html

### step3 - deploy to firebase hosting

```
npm run build
```

```
firebase deploy
```

## Using ng add, ng deploy & Angular's Built-in Deployment Support

- https://angular.dev/tools/cli/deployment
- you can use angular cli to assist with deploying to various platforms

### firebase

```
ng add @angular/fire
```

### vercel

```
vercel init angular
```

### netlify

```
ng add @netlify-builder/deploy
```

### github pages

```
ng add angular-cli-ghpages
```

### amazon s3

```
ng add @jefiozie/ngx-aws-deploy
```

## SSR - Setting Up SSR For An Angular App

### creating a new angular SSR project

```
ng new --ssr
```

### adding SSR to existing angular project

```
ng add @angular/ssr
```

### Building and Service an SSR App

- after setting up project as angular SSR project...

```
npm run build
```

- a script is added to package.json

```json
"server:ssr:routing": "node dist/routing/server/server.mjs"
```

```
npm run server:ssr:routing
```

- see an error localstorage is not defined
