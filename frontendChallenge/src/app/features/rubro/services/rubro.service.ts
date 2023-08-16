import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { SessionService } from "src/app/auth/session.service";
import { GLOBAL } from "src/app/shared/services/GLOBLAL";
import { BaseCRUDService } from "src/app/shared/services/base-crud.service";
import { Rubro } from "../models/rubro";

@Injectable({ providedIn: 'root' })

export class RubroService extends BaseCRUDService{
public url :string
  constructor(
    public http: HttpClient,
    public sessionService: SessionService,

  ){
    super(http, sessionService);
    this.url = GLOBAL.url + '/rubros';
    }

    getRubros(){
      return super.get(this.url).pipe(map((res:any) => res.data))
    }

    getRubro(id:string):Observable<any>{
      return super.get(this.url + '/' + id).pipe(map((res:any) => res.data))
    }

    createRubro(rubro:Rubro){
      return super.post(this.url, rubro).pipe(map((res:any) => res.data))
    }

    editRubro(idRubro?:string,rubro?:Rubro){
      return super.post(this.url+'/' +idRubro,rubro).pipe(map((res:any) => res.data))
    }

    deleteRubro(_id:string){
      console.log(_id)
      return super.post(this.url + '/eliminar', {id:_id} ).pipe(map((res:any) => res.data))
    }
  }
