import { Pipe, PipeTransform } from '@angular/core';
import { NgxSettingsService } from './ngx-settings.service';

@Pipe({
  name: "settingsKey"
})
export class NgxSettingsPipe implements PipeTransform {

    constructor(private settingsService: NgxSettingsService) {}

    transform(value: string, args: string) {
        return this.settingsService.get(value, args);
    }
}
