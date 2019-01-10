import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DialogProductService } from '../../service/dialog-product.service';
import { mathPassword } from '../../../validators/password.validator';
import { userNameValidation } from '../../../validators/user-name.validator';
import { phoneNumberVatidation } from '../../../validators/phone-number.validator';
import { nameVatidation } from '../../../validators/name.validator';
import { User } from '../../model/user';

const MAX_LENGTH_USERNAME = 8;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})

export class RegisterComponent implements OnInit {
  modalName: string;
  isVisible = false;
  formRegister: FormGroup;
  errorMessage: string;
  user = new User;
  name: string;
  userName: string;
  password: string;
  passwordCheck: string;
  birthday: string;
  address: string;
  phoneNumber: string;

  constructor(private dialogProductService: DialogProductService,
              private formbd: FormBuilder) {}

  ngOnInit() {
    this.setIsVisible();
    this.createForm();
  }

  createForm() {
    this.formRegister = this.formbd.group({
      name: ['', [Validators.required]],
      userName: ['', [Validators.required, Validators.maxLength(MAX_LENGTH_USERNAME)]],
      password: ['', [Validators.required]],
      passwordCheck: ['', [Validators.required]],
      birthday: ['', [Validators.required] ],
      address: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]]
    }, {
      validator: [
        mathPassword,
        userNameValidation,
        phoneNumberVatidation,
        nameVatidation ]
    });
  }

  nameValidate() {
    this.name = this.formRegister.controls.name.value;
    if (!name) {
      this.errorMessage = 'Name is required.';
    } else if (nameVatidation) {
      this.errorMessage = 'Name is invalid.';
    }
    return this.errorMessage;
  }

  userNameValidate() {
    this.userName = this.formRegister.controls.userName.value;
    if (!this.userName) {
      this.errorMessage = 'User Name is required.';
    } else if (this.userName.length > MAX_LENGTH_USERNAME) {
      this.errorMessage = 'User Name less than 8 character.';
    } else if (userNameValidation) {
      this.errorMessage = 'User name invalid.';
    }
    return this.errorMessage;
  }

  passwordValidate() {
    this.password = this.formRegister.controls.password.value;
    if (!this.password) {
      this.errorMessage = 'password is required.';
    }
    return this.errorMessage;
  }

  passwordCheckValidate() {
    this.passwordCheck = this.formRegister.controls.passwordCheck.value;
    if (!this.passwordCheck) {
      this.errorMessage = 'password is required.';
    } else if (mathPassword) {
      this.errorMessage = 'password not match.';
    }
    return this.errorMessage;
  }

  birthdayValidate() {
    this.birthday = this.formRegister.controls.birthday.value;
    if (!this.birthday) {
      this.errorMessage = 'Birthday is required.';
    }
    return this.errorMessage;
  }

  addressValidate() {
    this.address = this.formRegister.controls.address.value;
    if (! this.address) {
      this.errorMessage = 'Address is required.';
    }
    return this.errorMessage;
  }

  phoneNumberValidate() {
    this.phoneNumber = this.formRegister.controls.phoneNumber.value;
    if (! this.phoneNumber) {
      this.errorMessage = 'Phone Number is required.';
    } else if (phoneNumberVatidation) {
      this.errorMessage = 'Phone Number invalid.';
    }
    return this.errorMessage;
  }

  // setUser() {
  //   this.user.name = this.name;
  //   this.user.userName = this.userName;
  //   this.user.address = this.address;
  //   this.user.avatar = '';
  //   this.user.password = this.password;
  //   this.user.token = 
  // }

  register() {
    this.closeRegister();
  }

  setIsVisible() {
    this.dialogProductService.newModalName.subscribe(value => {
      this.modalName = value;
      this.closeRegister();
      if (this.modalName === 'register') {
        this.openRegister();
      }
    });
  }

  openRegister() {
    this.createForm();
    this.isVisible = true;
  }

  closeRegister() {
    this.isVisible = false;
  }

  openLogin() {
    this.dialogProductService.openDialog('login');
  }

  @HostListener('click', ['$event']) onclick(event) {
    if (event.target.className === 'dialog-form-wrap') {
      this.closeRegister();
    }
  }
}
