import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiURL = environment.apiURL + '/products';
  constructor(private http:HttpClient) {
    console.log(this.apiURL)


   }
   getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiURL)
   }
}
