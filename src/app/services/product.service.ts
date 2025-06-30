import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl:string = "https://dummyjson.com/products"

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get<any>(this.apiUrl)
  }

  getById(id:number){
    return this.http.get<any>(`${this.apiUrl}/${id}`)
  }
}
