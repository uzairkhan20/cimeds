import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsmleComponent } from './usmle.component';

describe('UsmleComponent', () => {
  let component: UsmleComponent;
  let fixture: ComponentFixture<UsmleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsmleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsmleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
