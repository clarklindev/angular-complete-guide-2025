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
