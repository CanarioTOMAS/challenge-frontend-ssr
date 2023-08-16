import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRubroPage } from './form-rubro.component';
import { RubroModule } from 'src/app/features/rubro/rubro.module';



@NgModule({
  declarations: [
    FormRubroPage
  ],
  imports: [
    CommonModule,
    RubroModule
  ]
})
export class FormRubroModule { }
