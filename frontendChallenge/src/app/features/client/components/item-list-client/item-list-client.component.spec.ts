import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListClientComponent } from './item-list-client.component';

describe('ItemListClientComponent', () => {
  let component: ItemListClientComponent;
  let fixture: ComponentFixture<ItemListClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListClientComponent]
    });
    fixture = TestBed.createComponent(ItemListClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
