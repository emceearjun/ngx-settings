## ngx-settings
Externalization for Angular apps.
ngx-settings uses JSON configuration to manage runtime dependencies post deployment.

## Installation
```posh
npm install @ngx-settings --save
```

## Import

#### Module
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
  "apiKey": "abcd1234",
  "credentials": {
    "username": "johndoe",
    "password": "pass"
  }
}
```

#### Usage
- Inject `NgxSettingsService` into the component class and use the `get` method by passing in the key:
```ts
export class AppComponent {
    apiKey: string;
    username: string;

    constructor(private settingsService: NgxSettingsService) {
        this.apiKey = this.settingsService.get("apiKey"); // Output: "abcd1234"
        this.username = this.settingsService.get("credentials.username"); // Output: "johndoe"
    }
}
```
- Use `NgxSettingsPipe` by name `settingsKey` in the HTML template:
```html
<div>{{"apiKey" | settingsKey}}</div><!-- Output: abcd1234 -->
<div>{{"credentials.username" | settingsKey}}</div><!-- Output: johndoe -->
```
- Provide a default value in case the actual property is not available for any reason:
```ts
export class AppComponent {
    apiKey: string;

    constructor(private settingsService: NgxSettingsService) {
        this.apiKey = this.settingsService.get("apiKey", "myDefaultKey"); // Output: "myDefaultKey"
    }
}
```
```html
<div>{{"apiKey" | settingsKey:"myDefaultKey"}}</div><!-- Output: myDefaultKey -->
```