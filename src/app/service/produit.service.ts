import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Client} from "../client";
import {Produit} from "../produit";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private baseUrl = "http://localhost:8080/api/produit/all";
  constructor(private httpClient:HttpClient) { }

  getAllProduits(): Observable<Produit[]>{
    return this.httpClient.get<Produit[]>(`${this.baseUrl}`);
  }
}
