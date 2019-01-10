import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { ENDPOINTS } from './api.registry';

@Injectable()
export class ProductResolve implements Resolve<any> {

  constructor(protected apiService: ApiService) {}

  resolve() {
    return this.apiService.get([ENDPOINTS.book]);
  }
}
