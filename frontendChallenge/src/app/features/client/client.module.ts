
import { CommonModule } from '@angular/common';
import { ListClientComponent } from './components/list-client/list-client.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormClientComponent } from './components/form-client/form-client.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListClientComponent,
    FormClientComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
  ],
  exports: [
    ListClientComponent,
    FormClientComponent
  ],

})
export class ClientModule {}
