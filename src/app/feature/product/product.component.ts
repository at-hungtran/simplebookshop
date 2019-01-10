import { Component, OnInit, OnDestroy, AfterViewInit,
  AfterViewChecked, AfterContentInit, AfterContentChecked, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../../share/model/book';
import { StorageService } from '../../share/service/storage.service';
import { ChangeCountProductService } from '../../share/service/changeCountProduct.service';

const KEY = 'idproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})

export class ProductComponent implements
OnInit,
OnDestroy,
AfterViewInit,
AfterViewChecked,
AfterContentInit,
AfterContentChecked,
DoCheck {
  books: Book[];
  listIdProduct: number[];

  constructor(private storageService: StorageService,
              private route: ActivatedRoute,
              private changeCountProductService: ChangeCountProductService) {
                console.log('contructor');
              }

  ngOnInit() {
    console.log('ngOnInit');
    if (this.route.snapshot.data.data) {
      this.books = this.route.snapshot.data.data;
    }
  }

  ngDoCheck() {
    console.log('do check');
  }

  ngOnCHanges() {
    console.log('ngOnCHanges');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log('destroy');
  }

  addProduct(index: number) {
    const id = this.books[index].id;
    this.changeCountProductService.pustToListIdProduct(id);
    this.storageService.set(KEY, JSON.stringify(this.changeCountProductService.listIdProduct));
  }
}
