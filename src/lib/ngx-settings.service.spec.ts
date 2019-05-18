import { TestBed } from '@angular/core/testing';

import { NgxSettingsService } from './ngx-settings.service';

describe('NgxSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSettingsService = TestBed.get(NgxSettingsService);
    expect(service).toBeTruthy();
  });
});
