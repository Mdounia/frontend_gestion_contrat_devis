import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contrat} from "../contrat";

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  private baseUrl = "http://localhost:8080/api/v1/contrats/";
  constructor(private httpClient:HttpClient) {

  }
  getAllContrat(): Observable<Contrat[]>{
    return this.httpClient.get<Contrat[]>(`${this.baseUrl}`);
  }
  createContrat(contrat:Contrat): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,contrat);
  }
  deleteContrat(id:number) :Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}${id}`);
  }
  findById(id: number): Observable<Contrat>{
    return this.httpClient.get<Contrat>(`${this.baseUrl}${id}`);
  }
  updateStatus(id: number, contrat: Contrat): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}${id}`, contrat);
  }
}
