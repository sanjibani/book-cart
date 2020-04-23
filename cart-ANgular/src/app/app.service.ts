import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductArray } from './shared-module/models/product.model';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  messageSuccess = false;
  baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  constructor(private http: HttpClient) { }

  getProducts(searchQuery): Observable<ProductArray> {
    // return this.http.get<Product[]>('../assets/products.json');
    return this.http.get<ProductArray>(this.baseUrl + searchQuery);
  }

  toggleMessageWindow() {
    setTimeout(() => {
    this.messageSuccess = false;
   }, 2000);
  }
}
