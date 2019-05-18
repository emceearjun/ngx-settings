## ngx-settings
Externalization for Angular apps.
ngx-settings uses JSON configuration to manage runtime dependencies post deployment.

## Installation
```posh
npm install @ngx-settings --save
```

## Usage

#### Component
First step is to import `NgxSettingsModule` into your NgModule
```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxSettingsModule } from 'ngx-settings';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSettingsModule.forRoot({
      settingsUrl: "https://jsonplaceholder.typicode.com/todos/1"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#### Sample output from URL:
```json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

#### Usage
Inject `NgxSettingsService` into your component and use the `get` method by passing in the key:
```ts
export class AppComponent {
    settings: any;

    constructor(private settingsService: NgxSettingsService) {
        this.title = this.settingsService.get("title"); // Output: "delectus aut autem"
    }
}
```