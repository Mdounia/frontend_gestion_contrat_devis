import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Contrat} from "../contrat";
import {ContratService} from "../service/contrat.service";
import {LigneProduitContratService} from "../service/ligne-produit-contrat.service";
import {ContratProduit} from "../contrat-produit";

@Component({
  selector: 'app-contrat-details',
  templateUrl: './contrat-details.component.html',
  styleUrls: ['./contrat-details.component.css']
})
export class ContratDetailsComponent implements OnInit {

  // @ts-ignore
  id:number;
  // @ts-ignore
  contrat :Contrat;
  ligneProduits :any;
  constructor(private contratService :ContratService,private route :ActivatedRoute,private contratProduitService :LigneProduitContratService) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];
    this.contrat=new Contrat();
    this.contratService.findById(this.id).subscribe(
      data => {
        this.contrat = data;
      }
    );
    this.getAllLigneByContrat(this.id);
  }

  getAllLigneByContrat(id:number){
    this.contratProduitService.getLigneProduitByContrat(id).subscribe(
      data =>{
        this.ligneProduits= data;
      }
    );
  }
}
