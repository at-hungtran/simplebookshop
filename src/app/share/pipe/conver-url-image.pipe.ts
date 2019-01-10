import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fetchUrl',
})

export class FetchUrl implements PipeTransform {
  transform(namePicture: string) {
    const url = 'assets/images/';
    return url + namePicture;
  }
}
