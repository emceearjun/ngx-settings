import { HttpClientModule } from "@angular/common/http";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { APP_INITIALIZER, NgModule } from "@angular/core";
import { NgxSettingsService } from "./ngx-settings.service";
import { NgxSettingsPipe } from "./ngx-settings.pipe";

export function getSettings(settingsService: NgxSettingsService) {
  let factory = () => settingsService.getSettings();
  return factory;
}

@NgModule({
  imports: [HttpClientModule],
  declarations: [NgxSettingsPipe],
  providers: [
    NgxSettingsService,
    {
      provide: APP_INITIALIZER,
      useFactory: getSettings,
      deps: [NgxSettingsService],
      multi: true
    }
  ],
  exports: [NgxSettingsPipe]
})
export class NgxSettingsModule {
  static forRoot(appConfig: any): ModuleWithProviders {
    return {
      ngModule: NgxSettingsModule,
      providers: [{ provide: "appConfig", useValue: appConfig }]
    };
  }
}
