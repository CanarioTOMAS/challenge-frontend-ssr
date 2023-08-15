import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
  ListItemsComponent,
  ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListItemsComponent
  ]

})
export class SharedModule { }
