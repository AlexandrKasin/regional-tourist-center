import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTourPageComponent } from './create-tour-page.component';

describe('CreateTourPageComponent', () => {
  let component: CreateTourPageComponent;
  let fixture: ComponentFixture<CreateTourPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTourPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTourPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
