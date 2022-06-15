import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalmdComponent } from './globalmd.component';

describe('GlobalmdComponent', () => {
  let component: GlobalmdComponent;
  let fixture: ComponentFixture<GlobalmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalmdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
