import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { SessionService } from 'src/app/auth/session.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit{

constructor(
 public clientService:ClientService,
 public sessionService:SessionService
){}
  ngOnInit():void{
    this.refresh()
  }
  refresh(){
    this.clientService.getClients().subscribe((res:any)=>{
      console.log(res)
    })
  }

  }
