import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../../share/model/book';
import { StorageService } from '../../share/service/storage.service';
import { ChangeCountProductService } from '../../share/service/changeCountProduct.service';
import { ApiService } from '../../share/service/api.service';
import { ENDPOINTS } from '../../share/service/api.registry';

const KEY = 'idproduct';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
})

export class ShoppingCartComponent implements OnInit {
  books: Book[] = [];
  idProducts: number[];
  productsShopCart: Book[] = [];
  totalPrice = 0;
  newTotalPrice = new BehaviorSubject(this.totalPrice);
  listIdProduct = localStorage.getItem(KEY) ? JSON.parse(localStorage.getItem(KEY)) : [];

  constructor(private storageService: StorageService,
              private apiService: ApiService,
              private changeCountProductService: ChangeCountProductService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.getBooksApi();
  }

  removeItem(index: number) {
    const id = this.productsShopCart[index].id;
    this.changeCountProductService.removeItemInLocalStore(id);
    this.productsShopCart.splice(index, 1);
    this.setTotalPrice();
  }

  payAll(): void {
    this.storageService.remove(KEY);
    this.productsShopCart = [];
    this.totalPrice = 0;
    this.changeCountProductService.listIdProduct = [];
    this.changeCountProductService.changeCountProduct();
  }

  getBooksApi() {
    this.books = this.route.snapshot.data.data;
    this.setProductShopCart();
  }

  setProductShopCart() {
    this.fetchProductsShopCart();
    this.setTotalPriceProduct();
    this.setTotalPrice();
  }

  fetchProductsShopCart() {
    this.productsShopCart = [];
    if (this.listIdProduct) {
      for (let i = 0; i < this.books.length; i++) {
        const item = this.books[i];
        if (this.listIdProduct.indexOf(item.id) > -1) {
          let product = new Book;
          product = JSON.parse(JSON.stringify(item));
          product.amount = 0;
          this.productsShopCart.push(product);
        }
      }
    }
    this.setAmountProduct();
  }

  setAmountProduct() {
    if (this.listIdProduct) {
      for (let i = 0; i < this.listIdProduct.length; i++) {
        const id = this.listIdProduct[i];
        const listIdShopCarts = this.productsShopCart.map(item => item.id);
        const index = listIdShopCarts.indexOf(id);
        if (index > -1) {
          this.productsShopCart[index].amount++;
        }
      }
    }
  }

  setTotalPrice(): void {
    this.totalPrice = this.productsShopCart
    .map(item => item.price)
    .reduce((total, item) => total + item, 0);
    this.newTotalPrice.next(this.totalPrice);
  }

  setTotalPriceProduct(): void {
    for (let i = 0; i <  this.productsShopCart.length; i++) {
      this.productsShopCart[i].price = this.productsShopCart[i].amount * this.productsShopCart[i].price;
    }
  }
}
