import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Devis} from "../devis";

@Injectable({
  providedIn: 'root'
})
export class DevisService {

  private baseUrl = "http://localhost:8080/api/v3/devis/";
  constructor(private httpClient:HttpClient) { }

  getAllDevis(): Observable<Devis[]>{
    return this.httpClient.get<Devis[]>(`${this.baseUrl}`);
  }
  createDevis(devis:Devis): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,devis);
  }
  deleteDevis(id:number) :Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}${id}`);
  }
  findById(id: number): Observable<Devis>{
    return this.httpClient.get<Devis>(`${this.baseUrl}${id}`);
  }
}
