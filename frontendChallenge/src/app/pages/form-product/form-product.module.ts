import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from 'src/app/features/product/product.module';
import { FormProductPage } from './form-product.component';



@NgModule({
  declarations: [
    FormProductPage
  ],
  imports: [
    CommonModule,
    ProductModule
  ]
})
export class FormProductModule { }
