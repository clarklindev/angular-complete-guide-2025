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
