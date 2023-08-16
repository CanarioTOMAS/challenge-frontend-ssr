import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RubroModule } from 'src/app/features/rubro/rubro.module';
import { ListRubroPage } from './list-rubro.component';



@NgModule({
  declarations: [
    ListRubroPage
  ],
  imports: [
    CommonModule,
    RubroModule
  ]
})
export class ListRubroModule { }
