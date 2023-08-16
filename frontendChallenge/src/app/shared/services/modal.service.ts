
import { Component, Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  constructor(private modal: NgbModal) {}

  openModal(component: any,) {
    return this.modal.open(component);
  }

  closeModal() {
    this.modal.dismissAll();
  }

}
