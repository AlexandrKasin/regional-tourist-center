import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourFilterComponent } from './tour-filter.component';

describe('TourFilterComponent', () => {
  let component: TourFilterComponent;
  let fixture: ComponentFixture<TourFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
