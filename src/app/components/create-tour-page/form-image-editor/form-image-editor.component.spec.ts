import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormImageEditorComponent } from './form-image-editor.component';

describe('FormImageEditorComponent', () => {
  let component: FormImageEditorComponent;
  let fixture: ComponentFixture<FormImageEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormImageEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormImageEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
