import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private http = inject(HttpClient)

  constructor() { }

  getCategories() {
    return this.http.get<any>('https://fakestoreapi.com/products/categories')
  }

  getProductsByCategory(categoryName: string) {
    console.log(categoryName);
    return this.http.get<any>(`https://fakestoreapi.com/products/category/${categoryName}`);
  }

}
