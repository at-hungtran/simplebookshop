import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile.component';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { UserProfileRouteModule } from './user-profile-routing.module';

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    RouterModule,
    UserProfileRouteModule
  ],
})

export class UserProfileModule {}
