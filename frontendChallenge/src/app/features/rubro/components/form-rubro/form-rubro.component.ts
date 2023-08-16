import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Rubro } from '../../models/rubro';
import { RubroService } from '../../services/rubro.service';

@Component({
  selector: 'app-form-rubro',
  templateUrl: './form-rubro.component.html',
  styleUrls: ['./form-rubro.component.css']
})
export class FormRubroComponent implements OnInit {
  public formRubro!:FormGroup  ;
  public rubro: Rubro;
  public isEditing: boolean = false;
  public isSubmited: boolean = false;
  public buttonLabel = 'Crear Rubro';


  @Input() item!: Rubro;
  constructor(
    public rubroService:RubroService
  ) {
    this.rubro = new Rubro('', '', '')
    this.formRubro = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      codigo: new FormControl('', [Validators.required]),
     });
  }

  ngOnInit(): void {

     if (this.item && this.item.id != '') {
      this.isEditing = true;
      this.buttonLabel = 'Guardar';
      this.formRubro.setValue({
        nombre: this.item.nombre,
        codigo: this.item.codigo,
      });
    } else {
      this.isEditing = false;
    }
  }


  onSubmit() {
    this.isSubmited = true;
    if (this.formRubro.valid) {
      this.rubro.nombre = this.formRubro.controls['nombre'].value;
      this.rubro.codigo = this.formRubro.controls['codigo'].value;
      this.save();
    }
  }

  createRubro() {
      this.rubroService.createRubro(this.rubro).subscribe(
        (data:any) => {
          console.log(data);
        }
      )
    }



  save() {
    if (this.isEditing) {
      this.updateRubro();
    } else {
      this.createRubro();
    }
  }
  updateRubro() {
    this.rubro.id = this.item.id;
    this.rubroService.editRubro(this.item.id,this.rubro).subscribe({
      next: (data) => {
        console.log(data)
      },
    });
}
}
