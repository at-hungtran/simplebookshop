import { Component, OnInit } from '@angular/core';
import { DialogProductService } from '../../service/dialog-product.service';

@Component({
  selector: 'app-notifi',
  templateUrl: 'notifi.component.html',
})

export class NotifiComponent implements OnInit{
  isVisible = false;
  message: string;
  modalName: string;

  constructor( private dialogProductService: DialogProductService ) {}

  ngOnInit() {
    this.openDialog();
  }

  openDialog() {
    this.dialogProductService.newModalName.subscribe(name => {
      this.modalName = name;
      if (this.modalName === 'notifi') {
        this.message = 'login success';
        this.isVisible = true;
        this.closeDialog();
      } else if (this.modalName === 'notifi-logout') {
        this.message = 'logout success';
        this.isVisible = true;
        this.closeDialog();
      }
    });
  }

  closeDialog() {
    setTimeout(() => {
      this.isVisible = false;
    }, 2000);
  }
}
