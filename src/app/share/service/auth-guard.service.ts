import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})

export class AuthGuardService {
  constructor() {}

  getToken(): string {
    return localStorage.getItem(KEY);
  }
}
