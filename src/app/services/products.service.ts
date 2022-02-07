import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './../models/product.model';
import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _apiUrl: string = environment.backendApiUrl + '/products';
  
  constructor(private http: HttpClient) { }

  getProductsForBanner(){
    
  }

  getProducts(){
    // return this.products;
    return this.http.get<Product[]>(this._apiUrl);
  }

  getProductById(productId: string){
    return this.http.get<Product>(`${this._apiUrl}/${productId}`);
  }

  createProduct(product: Product){
    return this.http.post<Product>(this._apiUrl, product);
  }

  updateProduct(productId: string, changes: Partial<Product>){
    return this.http.put<Product>(`${this._apiUrl}/${productId}`, changes);
  }

  deleteProduct(productId: string){
    return this.http.delete<Product>(`${this._apiUrl}/${productId}`);
  }
}
