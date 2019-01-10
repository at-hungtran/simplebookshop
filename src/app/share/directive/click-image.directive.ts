import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { DialogProductService } from '../service/dialog-product.service';

@Directive({
  selector: '[appBoxModel]'
})

export class BoxModelDirective {
  @Input('appBoxModel') appBoxModel: string;
  imageUrl: string;

  constructor(private el: ElementRef,
              private dialogProductService: DialogProductService) {}

  @HostListener('click', ['$event']) onclick(event) {
    if (event.target.className !== 'icon-add') {
      this.imageUrl = this.el.nativeElement.querySelector('img').attributes.src.nodeValue;
      this.dialogProductService.setImageUrl(this.imageUrl);
    }
  }
}
