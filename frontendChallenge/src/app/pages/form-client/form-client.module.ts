import { CommonModule } from '@angular/common';
import { FormClientPage } from './form-client.component';
import { ClientModule } from 'src/app/features/client/client.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    FormClientPage
  ],
  imports: [
    CommonModule,
    ClientModule
  ],
})
export class FormClientModule { }
