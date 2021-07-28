import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../model/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private brandsUrl = "http://127.0.0.1:8081/brands";


  constructor(private http: HttpClient) {}
  getAllBrands(): Observable<Brand[]> {
    //return this.http.get<Category[]>(`${this.categoriesUrl}`);
    return this.http.get<Brand[]>(this.brandsUrl+"/list");
  }

  createBrand(brand: Brand): Observable<Brand>{
    return this.http.post<Brand>(this.brandsUrl+"/new", brand);
  }

  deleteBrand(id: number): Observable<Brand>{
    return this.http.delete<Brand>(`${this.brandsUrl}/brand/${id}`);
  }

  editBrand(id: number, brand: Brand): Observable<any>{
    return this.http.put(`${this.brandsUrl}/brand/${id}`, brand);
  }


  findByName(name: any): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${this.brandsUrl}/list?name=${name}`);
  }

  findBrandById(id: number): Observable<Brand>{
    return this.http.get<Brand>(`${this.brandsUrl}/brand/${id}`);
  }


}

