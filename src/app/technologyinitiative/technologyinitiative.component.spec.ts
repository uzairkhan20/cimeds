import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyinitiativeComponent } from './technologyinitiative.component';

describe('TechnologyinitiativeComponent', () => {
  let component: TechnologyinitiativeComponent;
  let fixture: ComponentFixture<TechnologyinitiativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyinitiativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyinitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
