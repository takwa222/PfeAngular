import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manufacture } from '../model/manufacture';

@Injectable({
  providedIn: 'root'
})

export class ManufacturesService {
  private manufacturesUrl = "http://127.0.0.1:8081/manufactures";


  constructor(private http: HttpClient) {}
  getAllManufactures(): Observable<Manufacture[]> {
    //return this.http.get<Category[]>(`${this.categoriesUrl}`);
    return this.http.get<Manufacture[]>(this.manufacturesUrl+"/list");
  }

  createManufacture(manufacture: Manufacture): Observable<Manufacture>{
    return this.http.post<Manufacture>(this.manufacturesUrl+"/new", manufacture);
  }

  deleteManufacture(id: number): Observable<Manufacture>{
    return this.http.delete<Manufacture>(`${this.manufacturesUrl}/manufacture/${id}`);
  }

  editManufacture(id: number, manufacture: Manufacture): Observable<any>{
    return this.http.put(`${this.manufacturesUrl}/manufacture/${id}`, manufacture);
  }


  findByName(name: any): Observable<Manufacture[]> {
    return this.http.get<Manufacture[]>(`${this.manufacturesUrl}/list?name=${name}`);
  }

  findManufactureById(id: number): Observable<Manufacture>{
    return this.http.get<Manufacture>(`${this.manufacturesUrl}/manufacture/${id}`);
  }


}
