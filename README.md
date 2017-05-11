# Angular Json viewer

Angular JSON Viewer component. JSON in HTML with syntax highlight like Chrome DevTools.

## Install

```
npm install @fynd/angular-json-viewer --save
```

## Usage
import FyAngularJsonViewerModule to use in angular app. 

```js
import { FyAngularJsonViewerModule } from '@fynd/angular-json-viewer';

@NgModule({
    ...,
    imports: [
        ...,
        FyAngularJsonViewerModule,
        ...
    ],
    ...
})
export class AppModule { }
```

```html
<fy-angular-json-viewer [json]="object"></fy-angular-json-viewer>
```