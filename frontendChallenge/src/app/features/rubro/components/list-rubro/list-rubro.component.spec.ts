import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRubroComponent } from './list-rubro.component';

describe('ListRubroComponent', () => {
  let component: ListRubroComponent;
  let fixture: ComponentFixture<ListRubroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRubroComponent]
    });
    fixture = TestBed.createComponent(ListRubroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
