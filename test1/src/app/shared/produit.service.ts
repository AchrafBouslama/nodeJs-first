import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private BASE_URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getProduit(): Observable<any> {
    return this.http.get(`${this.BASE_URL}`+"api/produit");
  }


  createProduit(category: Object): Observable<any> {
    return this.http.post(`${this.BASE_URL}`+"addproduit", category);
  }
  updateCategory(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.BASE_URL}update/${id}`, value);
  }


  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}delete/${id}`, { responseType: 'text' });
  }
}
