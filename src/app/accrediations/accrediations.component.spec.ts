import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccrediationsComponent } from './accrediations.component';

describe('AccrediationsComponent', () => {
  let component: AccrediationsComponent;
  let fixture: ComponentFixture<AccrediationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccrediationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccrediationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
