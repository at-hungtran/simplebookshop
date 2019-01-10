import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../share/service/api.service';
import { StorageService } from '../../share/service/storage.service';
import { User } from '../../share/model/user';
import { ENDPOINTS } from '../../share/service/api.registry';

const KEY = 'token';

@Component ({
  selector: 'app-user-profile',
  templateUrl: 'user-profie.component.html'
})

export class UserProfileComponent implements OnInit{
  user = new User;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.setUser();
  }

  setUser() {
    let listUser: User[];
    const tokenCurrent = localStorage.getItem(KEY);
    this.apiService.get([ENDPOINTS.user]).subscribe(list => {
      listUser = list;
      const index = listUser.map(item => item.token).findIndex(item => item === tokenCurrent);
      this.user = listUser[index];
    });
  }
}
