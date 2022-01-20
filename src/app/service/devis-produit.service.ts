import { Injectable } from '@angular/core';
import {ContratProduit} from "../contrat-produit";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DevisProduit} from "../devis-produit";

@Injectable({
  providedIn: 'root'
})
export class DevisProduitService {

  private baseUrl = "http://localhost:8080/api/v4/ligneProduitDevis/";
  constructor(private httpClient:HttpClient) { }

  createLigneProduit(ligneProduit:DevisProduit): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,ligneProduit);
  }
  getLigneProduitByDevis(id:number): Observable<DevisProduit[]> {
    return this.httpClient.get<DevisProduit[]>(`${this.baseUrl}${id}`);
  }
}
