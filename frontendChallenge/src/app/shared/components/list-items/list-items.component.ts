import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {
  // @Input() items:Array<any>=[];
  // @Input() columns:Array<string>=[];
  // @Input() rows:Array<any>=[];
  @Input() titleTable:string='';
  // @Input('itemTemplate') itemTemplate!:TemplateRef<any>;
  @Input() HeadArray :Array<any>= [];
  @Input() GridArray :Array<any> = [];
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  edit(item: any) {
console.log(item)
    this.onEdit.emit(item);
  }
  delete(item: any) {
console.log(item)
    this.onDelete.emit(item);
  }

}
