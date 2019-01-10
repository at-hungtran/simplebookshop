import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class DialogProductService {
  imageUrl = '';
  newImageUrl = new BehaviorSubject(this.imageUrl);
  modalName = '';
  newModalName = new BehaviorSubject(this.modalName);

  constructor() {
    console.log('dialog service');
  }

  setImageUrl(imagrUrl: string) {
    this.newImageUrl.next(imagrUrl);
  }

  openDialog(modalName: string) {
    this.newModalName.next(modalName);
  }
}
