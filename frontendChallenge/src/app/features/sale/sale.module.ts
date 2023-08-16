import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormSaleComponent } from './components/form-sale/form-sale.component';

@NgModule({
  declarations: [FormSaleComponent],
  exports: [FormSaleComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, SharedModule],
})
export class SaleModule {}
