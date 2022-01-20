import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contrat} from "../contrat";
import {Client} from "../client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = "http://localhost:8080/api/client/all";
  constructor(private httpClient:HttpClient) {

  }

  getAllClient(): Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${this.baseUrl}`);
  }
}
