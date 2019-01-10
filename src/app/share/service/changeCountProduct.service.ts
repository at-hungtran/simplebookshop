import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

const KEY = 'idproduct';

@Injectable()

export class ChangeCountProductService {
  listIdProduct = localStorage.getItem(KEY) ? JSON.parse(localStorage.getItem(KEY)) : [];

  countBehavior = new BehaviorSubject(this.listIdProduct.length);
  currentCount = this.countBehavior.asObservable();

  constructor(private storageService: StorageService) {
    console.log('create');
  }

  changeCountProduct() {
    this.countBehavior.next(this.listIdProduct.length);
  }

  pustToListIdProduct(id: number) {
    this.listIdProduct.push(id);
    this.changeCountProduct();
  }

  removeItemInLocalStore(id: number) {
    const arrayId = this.listIdProduct.filter(item => item !== id);
    this.updateListIdProduct(arrayId);
    this.storageService.set(KEY, JSON.stringify(arrayId));
    this.updateAfterRemoveItemLocal();
  }

  updateAfterRemoveItemLocal() {
    this.setIdFromLocal();
    this.changeCountProduct();
  }

  setIdFromLocal() {
    this.listIdProduct = this.storageService.get(KEY);
  }

  updateListIdProduct(list: number[]): void {
    this.listIdProduct = [];
    this.listIdProduct = list;
  }
}

