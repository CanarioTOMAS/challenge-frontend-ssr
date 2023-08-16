import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRubroComponent } from './form-rubro.component';

describe('FormRubroComponent', () => {
  let component: FormRubroComponent;
  let fixture: ComponentFixture<FormRubroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRubroComponent]
    });
    fixture = TestBed.createComponent(FormRubroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
