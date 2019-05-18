import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class NgxSettingsService {
  private settings: any;

  constructor(
    private http: HttpClient,
    @Inject("appConfig") private appConfig: any
  ) {}

  getSettings(): Promise<any> {
    const promise = this.http
      .get(this.appConfig["settingsUrl"])
      .toPromise()
      .then(settings => {
        this.settings = settings;
      })
      .catch(error => {
        console.error(
          "Unable to fetch settings file: " + this.appConfig["settingsUrl"]
        );
        throw error;
      });

    return promise;
  }

  get(key: string): any {
    let value = this.settings[key];
    if (!value) {
      throw new Error("No key found with name: " + key);
    }
    return value;
  }
}