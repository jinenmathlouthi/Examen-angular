import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { map, filter,find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient: HttpClient) { }
 getProductsList():Observable<Product[]>{
  return this._httpClient.get<Product[]>("http://localhost:3000/products")
}
 getProductsByName(searchText:string):Observable<Product[]>{
  return this.getProductsList().pipe(map(product=>product.filter(product=>product.name.toLowerCase()
.includes(searchText.toLowerCase()))))

   }
   getProductById(id:number):Observable<Product|undefined>{
    return this.getProductsList().pipe(map(product=>product.find(product=>product.id===id)))
 }
//  addProduct(product:Product):Observable<[Product]>{
//   return this._httpClient.post<Product[]>(`http://localhost:3000/products`,product) 
//  }
 updateProduct(product:Product):Observable<Product>{
  return this._httpClient.put<Product>(`http://localhost:3000/products/${product.id}`,product) 
 }
 deleteTodo(product:Product):Observable<Product[]>{
  return this._httpClient.delete<Product[]>(`http://localhost:3000/products/${product.id}`)
}

}