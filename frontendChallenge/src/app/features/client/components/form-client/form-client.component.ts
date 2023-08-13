import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})

export class FormClientComponent implements OnInit{
    public formClient!:FormGroup  ;
    public client: Client;
    constructor(
      public clientService:ClientService
    ) {
      this.client = new Client('', '', '', '', '')
    }

    ngOnInit(): void {
      this.formClient = new FormGroup({
        name: new FormControl('', [Validators.required]),
        cuit: new FormControl('', [Validators.required]),
        email: new FormControl('',),
        address: new FormControl('', ),
        phone: new FormControl('', ),
       });
    }

    onSubmit() {
      if(this.formClient.valid){
        let client:Client = {
          nombre: this.formClient.value.name,
          cuit: this.formClient.value.cuit,
          email: this.formClient.value.email,
          domicilio: this.formClient.value.address,
          telefono: this.formClient.value.phone,
        }
        this.clientService.createClient(client).subscribe(
          (data:any) => {
            console.log(data);
          }
        )
      }
    }


}
