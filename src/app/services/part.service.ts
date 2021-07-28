import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Part } from '../model/part';

@Injectable({
  providedIn: 'root'
})
export class PartService {
  private partsUrl = "http://127.0.0.1:8081/parts";

  constructor(private http: HttpClient) { }

  getAllParts(): Observable<Part[]> {
    return this.http.get<Part[]>(this.partsUrl+"/list");
  }

  createPart(part: Part): Observable<Part>{
    return this.http.post<Part>(this.partsUrl+"/new", part);
  }

  deletePart(id: number): Observable<Part>{
    return this.http.delete<Part>(`${this.partsUrl}/part/${id}`);
  }

  editPart(id: number, part: Part): Observable<any>{
    return this.http.put(`${this.partsUrl}/part/${id}`, part);
  }


  findByTitle(title: any): Observable<Part[]> {
    return this.http.get<Part[]>(`${this.partsUrl}/list?title=${title}`);
  }

  findPartById(id: number): Observable<Part>{
    return this.http.get<Part>(`${this.partsUrl}/part/${id}`);
  }

}
