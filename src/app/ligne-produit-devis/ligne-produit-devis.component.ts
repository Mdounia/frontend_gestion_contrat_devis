import {Component, Input, OnInit} from '@angular/core';
import {ContratProduit} from "../contrat-produit";
import {DevisProduit} from "../devis-produit";
import {ProduitService} from "../service/produit.service";
import {Router} from "@angular/router";
import {DevisService} from "../service/devis.service";
import {DevisProduitService} from "../service/devis-produit.service";

@Component({
  selector: 'app-ligne-produit-devis',
  templateUrl: './ligne-produit-devis.component.html',
  styleUrls: ['./ligne-produit-devis.component.css']
})
export class LigneProduitDevisComponent implements OnInit {

  @Input() devis:any;
  devisList:any;
  fieldsetDisabled = false;
  ligneProduit:DevisProduit =new DevisProduit();
  produits:any;
  montant:number=0;
  isShow = false;
  constructor(private devisProduitService:DevisProduitService,private devisService:DevisService ,private produitService:ProduitService,private router :Router) { }

  ngOnInit(): void {
    this.getProduits();
    this.getAllDevis();
  }
  private getProduits(){
    this.produitService.getAllProduits().subscribe(
      data =>{
        this.produits=data;
      });
  }
  private getAllDevis(){
    this.devisService.getAllDevis().subscribe(
      data =>{
        this.devisList = data;
      }
    );
  }
  goToList(){
    this.router.navigate(['/devis'])
  }
  saveLigneProduit(){
    this.devisProduitService.createLigneProduit(this.ligneProduit).subscribe( data =>{
        console.log(data);
        //this.goToNextStep();
        //this.isShow=true;
        this.isShow=true;
        this.fieldsetDisabled=true;
      },
      error => console.log(error));
  }
  onSubmit(){
    console.log(this.ligneProduit);
    this.saveLigneProduit();
  }
}
