import { Component, ElementRef, OnInit, HostListener } from '@angular/core';
import { DialogProductService } from '../../../service/dialog-product.service';

@Component({
  selector: 'app-dialog-product',
  templateUrl: './dialog-product.component.html',
})

export class DialogProductComponent implements OnInit {
  imageUrl: string;
  visible: boolean;

  constructor(private dialogProductService: DialogProductService,
              private el: ElementRef) {}

  ngOnInit() {
    this.setImgToDialog();
  }

  setImgToDialog() {
    this.dialogProductService.newImageUrl.subscribe(imageUrl => {
      this.imageUrl = imageUrl;
      if (this.imageUrl) {
        this.visible = true;
      }
    });
  }

  closeDialog() {
    this.visible = false;
  }

  @HostListener('click', ['$event']) onclick(event) {
    if (event.target.className === 'dialog-wrap') {
      this.visible = false;
    }
  }
}
