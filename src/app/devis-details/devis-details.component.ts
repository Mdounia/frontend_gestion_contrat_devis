import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DevisService} from "../service/devis.service";
import {DevisProduitService} from "../service/devis-produit.service";
import {Contrat} from "../contrat";
import {Devis} from "../devis";

@Component({
  selector: 'app-devis-details',
  templateUrl: './devis-details.component.html',
  styleUrls: ['./devis-details.component.css']
})
export class DevisDetailsComponent implements OnInit {
  // @ts-ignore
  id:number;
  // @ts-ignore
  devis :Devis;
  ligneProduits :any;
  constructor(private route :ActivatedRoute,private devisService:DevisService,private devisProduitService:DevisProduitService) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];
    this.devis=new Devis();
    this.devisService.findById(this.id).subscribe(
      data =>{
        this.devis= data;
      }
    );
    this.getAllLigneProduitByDevis(this.id);
  }
getAllLigneProduitByDevis(id:number){
    this.devisProduitService.getLigneProduitByDevis(id).subscribe(
      data =>{
        this.ligneProduits=data;
      }
    );
}
}
