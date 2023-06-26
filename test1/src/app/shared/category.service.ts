import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/Category/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private BASE_URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getCategory(): Observable<any> {
    return this.http.get(`${this.BASE_URL}`+"api/category");
  }


  createCategory(category: Object): Observable<any> {
    return this.http.post(`${this.BASE_URL}`+"addCategory", category);
  }
  updateCategory(id: number, name:string,type:any,qualite:string): Observable<Object> {
    return this.http.patch(`${this.BASE_URL}updateC/${id}`, {name,type,qualite});
  }


  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/deleteC/${id}`, { responseType: 'text' });
  }

}
