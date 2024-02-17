import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class CartService {
private apiURL=environment.apiURL+'/cart'
  constructor(private http:HttpClient) { }
addToCart(product:Product):Observable<Product>{
  return this.http.post<Product>(this.apiURL,product)
}
getCartItems():Observable<Product[]>{
  return this.http.get<Product[]>(this.apiURL)
}

clearCartItems():Observable<void>{
  return this.http.delete<void>(this.apiURL)
}

checkout(products:Product[]):Observable<void>{
  return this.http.post<void>(this.apiURL+'/checkout',products)
}
}


