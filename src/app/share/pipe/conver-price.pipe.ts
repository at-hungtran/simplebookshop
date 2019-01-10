import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converPrice',
})

export class ConverPrice implements PipeTransform {
  transform(price: number) {
    const cashUnit = ' VNĐ';
    const rx =  /(\d+)(\d{3})/;
    return String(price).replace(/^\d+/, function(w) {
      while (rx.test(w)) {
        w = w.replace(rx, '$1,$2');
      }
      return w + cashUnit;
    });
  }
}
