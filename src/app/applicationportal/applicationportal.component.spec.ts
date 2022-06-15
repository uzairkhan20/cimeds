import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationportalComponent } from './applicationportal.component';

describe('ApplicationportalComponent', () => {
  let component: ApplicationportalComponent;
  let fixture: ComponentFixture<ApplicationportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationportalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
