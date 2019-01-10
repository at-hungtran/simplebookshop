import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { PipeModule } from './pipe/pipe.module';
import { CommonModule } from '@angular/common';
import { DialogModule } from './component/dialog/dialog.module';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { NotifiComponent } from './component/notifi/notifi.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NotifiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipeModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DialogModule,
    LoginComponent,
    RegisterComponent,
    NotifiComponent
  ],
})
export class ShareModule {}
