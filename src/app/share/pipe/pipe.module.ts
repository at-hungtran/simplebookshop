import { NgModule } from '@angular/core';

import { ConverPrice } from './conver-price.pipe';
import { FetchUrl } from './conver-url-image.pipe';

@NgModule({
  declarations: [
    ConverPrice,
    FetchUrl
  ],
  exports: [
    ConverPrice,
    FetchUrl
  ],
})

export class PipeModule {}
