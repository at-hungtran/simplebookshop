import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { PipeModule } from '../../share/pipe/pipe.module';
import { BoxModelDirective } from '../../share/directive/click-image.directive';

@NgModule({
  declarations: [
    ProductComponent,
    BoxModelDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductRoutingModule,
    PipeModule
  ],
})
export class ProductModule {}
