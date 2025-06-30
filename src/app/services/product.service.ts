import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categories } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl:string = "https://dummyjson.com/products"
  private apiUrlCategories:string = "https://dummyjson.com/products/categories"
  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get<any>(this.apiUrl)
  }

  getById(id:number){
    return this.http.get<any>(`${this.apiUrl}/${id}`)
  }

  getByCategory(category:string) {
    return this.http.get<any>(`${this.apiUrl}/category/${category}`)
  }

  getCategories(){
    return this.http.get<Categories[]>(this.apiUrlCategories)
  }
}
