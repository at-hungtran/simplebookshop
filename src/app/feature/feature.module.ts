import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FeatureComponent } from './feature.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { ShareModule } from '../share/share.module';
import { UserProfileModule } from './user-profile/user-profile.module';

@NgModule({
  declarations: [
    FeatureComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FeatureRoutingModule,
    ShareModule,
    UserProfileModule
  ],
})
export class FeatureModule { }
