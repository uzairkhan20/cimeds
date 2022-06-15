import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialaidComponent } from './financialaid.component';

describe('FinancialaidComponent', () => {
  let component: FinancialaidComponent;
  let fixture: ComponentFixture<FinancialaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
