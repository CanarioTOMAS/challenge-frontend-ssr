import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { SessionService } from 'src/app/auth/session.service';
import { Client } from '../../models/client';
import { ListItemsComponent } from 'src/app/shared/components/list-items/list-items.component';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit{
  @ViewChild('listItem') listItems!: ListItemsComponent;
public clients:Array<Client>=[];
public columns:Array<string>=['id','nombre','email','domicilio','telefono'];
public titleTable:string='Clientes';
constructor(
 public clientService:ClientService,
 public sessionService:SessionService
){}

  ngOnInit():void{
    this.refresh()
  }
  refresh(){
    this.clientService.getClients().subscribe((res:any)=>{
      this.clients=res;
      console.log(this.clients)

    })
  }

  editClient(event:any){

    console.log(event)
  }
  deleteClient(client:Client){
    if(client.id)
    this.clientService.deleteClient(client.id).subscribe((res:any)=>{
      console.log(res)
      this.refresh()
    })
    console.log(client.id)
  }


  }
