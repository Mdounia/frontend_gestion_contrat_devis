import { Component, OnInit } from '@angular/core';
import {Contrat} from "../contrat";
import {Devis} from "../devis";
import {DevisService} from "../service/devis.service";
import {Router} from "@angular/router";
import {ClientService} from "../service/client.service";

@Component({
  selector: 'app-create-devis',
  templateUrl: './create-devis.component.html',
  styleUrls: ['./create-devis.component.css']
})
export class CreateDevisComponent implements OnInit {

  clients :any;
  devis :Devis = new Devis();
  isShow = false;
  fieldsetDisabled = false
  constructor(private devisService:DevisService,private router :Router,private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClients();
  }

  private getClients(){
    this.clientService.getAllClient().subscribe(
      data =>{
        this.clients=data;
      });
  }
  saveDevis(){
    this.devisService.createDevis(this.devis).subscribe(
      data=>{
        this.isShow=true;
        this.fieldsetDisabled=true;
      }
    );
  }
  onSubmit(){
    this.saveDevis();
  }
}
