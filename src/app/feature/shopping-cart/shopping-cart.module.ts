import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { PipeModule } from '../../share/pipe/pipe.module';


@NgModule({
  declarations: [
    ShoppingCartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ShoppingCartRoutingModule,
    PipeModule,
  ],
})
export class ShopCartModule {}
