import { Component, OnInit, HostListener, ElementRef, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DialogProductService } from '../../service/dialog-product.service';
import { userNameValidation } from '../../../validators/user-name.validator';
import { ApiService } from '../../service/api.service';
import { ENDPOINTS } from '../../service/api.registry';
import { User } from '../../model/user';
import { StorageService } from '../../service/storage.service';
import { CheckUserService } from '../../service/check-user.service';

const MAX_LENGTH_USERNAME = 8;
const KEY = 'token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit, OnChanges {
  modalName: string;
  errorMessage: string;
  loginMessage = { 'message': ' ', 'messageName':  '' };
  formLogin: FormGroup;
  userName: string;
  password: string;
  listUsers: User[];
  isVisible = false;
  isMessage = false;


  constructor(private dialogProductService: DialogProductService,
              private storageService: StorageService,
              private formbd: FormBuilder,
              private apiServide: ApiService,
              private el: ElementRef,
              private checkUserService: CheckUserService) {}

  ngOnInit() {
    this.setIsVisible();
    this.createForm();
    this.setListUsers();
    console.log('login OnInit');
  }

  ngOnChanges() {
    console.log('change');
  }

  setIsVisible() {
    this.dialogProductService.newModalName.subscribe(value => {
      this.modalName = value;
      this.closeLogin();
      if (this.modalName === 'login') {
        this.openLogin();
      }
    });
  }

  createForm() {
    this.formLogin = this.formbd.group({
      userName: ['', [Validators.required, Validators.maxLength(MAX_LENGTH_USERNAME)]],
      password: ['', [Validators.required]],
    }, {
      validator: userNameValidation
    });
  }

  userNameValidate() {
    //console.log(userNameValidation);
    this.userName = this.formLogin.controls.userName.value;
    this.errorMessage = '';
    if (!this.userName) {
      this.errorMessage = 'User Name is required.';
    } else if (this.userName.length > MAX_LENGTH_USERNAME) {
      this.errorMessage = 'User Name less than 8 character.';
    } else if (userNameValidation) {
      console.log(userNameValidation);
      this.errorMessage = 'User name invalid.';
    }
    return this.errorMessage;
  }

  passwordValidate() {
    this.password = this.formLogin.controls.password.value;
    if (!this.password) {
      this.errorMessage = 'password is required.';
    }
    return this.errorMessage;
  }

  closeLogin() {
    this.isVisible = false;
  }

  openLogin() {
    this.createForm();
    this.isVisible = true;
  }

  openRegister() {
    this.dialogProductService.openDialog('register');
  }

  @HostListener('click', ['$event']) onclick(event) {
    if (event.target.className === 'dialog-form-wrap') {
      this.closeLogin();
    }
  }

  login() {
    if (this.isUser()) {
      const dialogName = 'notifi';
      this.checkUserService.isUserLogin(true);
      this.closeLogin();
      this.dialogProductService.openDialog(dialogName);
    } else {
      this.loginMessage = { 'message': 'User Name of Password not correct', 'messageName': 'error' };
    }
    this.isMessage = true;
  }

  setTokenToLocal(token: string) {
    this.storageService.set(KEY, token);
  }

  setListUsers() {
    if (!this.listUsers) {
      this.apiServide.get([ENDPOINTS.user]).subscribe(user => this.listUsers = user);
    }
  }

  isUser(): boolean {
    if (this.listUsers) {
      const listUserName = this.listUsers.map(item => item.userName);
      const index = listUserName.indexOf(this.userName);
      if (index > -1) {
        if (this.listUsers[index].password === this.password) {
          this.setTokenToLocal(this.listUsers[index].token);
          return true;
        }
      }
    }
    return false;
  }
}
