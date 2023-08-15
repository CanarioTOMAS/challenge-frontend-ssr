import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'app-item-list-client',
  templateUrl: './item-list-client.component.html',
  styleUrls: ['./item-list-client.component.css']
})
export class ItemListClientComponent implements OnInit{
  @Input() client!: Client;
constructor(){}

  ngOnInit(): void {

  }

}
