import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleSelectComponent } from './collapsible-select.component';

describe('CollapsibleSelectComponent', () => {
  let component: CollapsibleSelectComponent;
  let fixture: ComponentFixture<CollapsibleSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsibleSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
