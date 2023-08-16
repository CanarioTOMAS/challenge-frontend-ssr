import { Component, OnInit, ViewChild } from '@angular/core';
import { Rubro } from '../../models/rubro';
import { SessionService } from 'src/app/auth/session.service';
import { ListItemsComponent } from 'src/app/shared/components/list-items/list-items.component';
import { ModalService } from 'src/app/shared/services/modal.service';
import { RubroService } from '../../services/rubro.service';
import { FormRubroComponent } from '../form-rubro/form-rubro.component';

@Component({
  selector: 'app-list-rubro',
  templateUrl: './list-rubro.component.html',
  styleUrls: ['./list-rubro.component.css']
})
export class ListRubroComponent implements OnInit{
  @ViewChild('listItem') listItems!: ListItemsComponent;
public rubros:Array<Rubro>=[];
public columns:Array<string>=['id','nombre','codigo'];
public titleTable:string='Rubros';
constructor(
 public rubroService:RubroService,
 public sessionService:SessionService,
 public modalService:ModalService

){}

  ngOnInit():void{
    this.refresh()
  }
  refresh(){
    this.rubroService.getRubros().subscribe((res:any)=>{
      this.rubros=res;
      console.log(this.rubros)

    })
  }

  editRubro(rubro:Rubro){
this.modalService.openModal(FormRubroComponent,rubro)

  }
  deleteRubro(rubro:Rubro){
    if(rubro.id)
    this.rubroService.deleteRubro(rubro.id).subscribe((res:any)=>{
      console.log(res)
      this.refresh()
    })

  }
}
