import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ContratProduit} from "../contrat-produit";
import {Contrat} from "../contrat";

@Injectable({
  providedIn: 'root'
})
export class LigneProduitContratService {

  private baseUrl = "http://localhost:8080/api/v2/ligneProduit/";
  constructor(private httpClient:HttpClient) { }

  createLigneProduit(ligneProduit:ContratProduit): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,ligneProduit);
  }
  getLigneProduitByContrat(id:number): Observable<ContratProduit[]> {
    return this.httpClient.get<ContratProduit[]>(`${this.baseUrl}${id}`);
  }
}
