import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { ApiService } from './share/service/api.service';
import { ChangeCountProductService } from './share/service/changeCountProduct.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ ApiService, ChangeCountProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
