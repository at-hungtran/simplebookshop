import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';
import { ProductResolve } from '../share/service/product.resolver';
import { AuthGuard } from '../auth-guard/auth-guard';

const routes: Routes = [
  { path: '',
    component: FeatureComponent,
    children: [
      {
        path: '',
        loadChildren: './product/product.module#ProductModule',
        resolve: { data: ProductResolve }
      },
      {
        path: 'home',
        loadChildren: './product/product.module#ProductModule',
        resolve: { data: ProductResolve }
      },
      {
        path: 'shopcart',
        loadChildren: './shopping-cart/shopping-cart.module#ShopCartModule',
        resolve: { data: ProductResolve }
      },
      {
        path: 'profile',
        loadChildren: './user-profile/user-profile.module#UserProfileModule',
        resolve: { data: ProductResolve },
        canActivate: [AuthGuard]
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: [ ProductResolve, AuthGuard ]
})

export class FeatureRoutingModule {}
