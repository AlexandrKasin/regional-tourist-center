import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationCountryComponent } from './destination-country.component';

describe('DestinationCountryComponent', () => {
  let component: DestinationCountryComponent;
  let fixture: ComponentFixture<DestinationCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
