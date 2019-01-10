import { Component, OnInit } from '@angular/core';

import { ChangeCountProductService } from '../../service/changeCountProduct.service';
import { DialogProductService } from '../../service/dialog-product.service';
import { AuthGuardService } from '../../service/auth-guard.service';
import { CheckUserService } from '../../service/check-user.service';
import { StorageService } from '../../service/storage.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { ApiService } from '../../service/api.service';
import { Book } from '../../model/book';
import { ENDPOINTS } from '../../service/api.registry';

const KEY = 'token';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {
  count: number;
  isVisible: boolean;
  modalName: string;
  isUserLogin = false;
  listBooks: Book;

  constructor(private changeCountProductService: ChangeCountProductService,
              private dialogProductDervice: DialogProductService,
              private authGuardService: AuthGuardService,
              private checkUserService: CheckUserService,
              private storageService: StorageService,
              private router: Router,
              private apiService: ApiService) {}

  ngOnInit() {
    this.setCount();
    this.checkUserLogin();
    this.setListBooks();
    this.checkUserService.isLogin.subscribe(value => this.isUserLogin = value);
  }

  setCount(): void {
    this.changeCountProductService.currentCount.subscribe(count => this.count = count);
  }

  openLoginForm() {
    this.modalName = 'login';
    this.dialogProductDervice.openDialog(this.modalName);
  }

  openRegisteform() {
    this.modalName = 'register';
    this.dialogProductDervice.openDialog(this.modalName);
  }

  checkUserLogin() {
    if (this.authGuardService.getToken()) {
      this.isUserLogin = true;
    }
  }

  logOut() {
    const dialogName = 'notifi-logout';
    this.storageService.remove(KEY);
    this.router.navigate(['/home']);
    this.isUserLogin = false;
    this.dialogProductDervice.openDialog(dialogName);
  }

  setListBooks() {
    this.apiService.get([ENDPOINTS.book])
    .subscribe(litsBooks => this.listBooks = litsBooks);
  }
}
