import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_ROOT = 'http://5b5cab736a725000148a67a2.mockapi.io/hu/v1';

@Injectable()

export class ApiService {
  constructor(private http: HttpClient) {
    console.log('api  service');
  }

  get(endPoin: string[], params?: object): Observable<any> {
    const url = this.query(endPoin, params);
    return this.http.get<any>(url);
  }

  post(endPoin: string[], body): Observable<any> {
    const url = this.query(endPoin);
    return this.http.post(url, body);
  }

  query(endpoint: string[], params?: object): string {
    const url = [API_ROOT, endpoint.join('/')].join('/');
    return url;
  }
}
