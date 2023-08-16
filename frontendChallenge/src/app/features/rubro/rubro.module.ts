import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormRubroComponent } from './components/form-rubro/form-rubro.component';
import { ListRubroComponent } from './components/list-rubro/list-rubro.component';



@NgModule({
  declarations: [
    FormRubroComponent,
    ListRubroComponent
  ],
  exports:[
    FormRubroComponent,
    ListRubroComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
  ]
})
export class RubroModule { }
