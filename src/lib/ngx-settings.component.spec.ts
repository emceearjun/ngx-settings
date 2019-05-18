import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSettingsComponent } from './ngx-settings.component';

describe('NgxSettingsComponent', () => {
  let component: NgxSettingsComponent;
  let fixture: ComponentFixture<NgxSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
