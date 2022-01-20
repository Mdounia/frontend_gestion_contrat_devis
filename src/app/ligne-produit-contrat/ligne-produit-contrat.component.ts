import {Component, Input, OnInit} from '@angular/core';
import {ContratProduit} from "../contrat-produit";
import {LigneProduitContratService} from "../service/ligne-produit-contrat.service";
import {ProduitService} from "../service/produit.service";
import {Router} from "@angular/router";
import {ContratService} from "../service/contrat.service";

@Component({
  selector: 'app-ligne-produit-contrat',
  templateUrl: './ligne-produit-contrat.component.html',
  styleUrls: ['./ligne-produit-contrat.component.css']
})
export class LigneProduitContratComponent implements OnInit {

 @Input() contrat:any;
  contrats:any;
  fieldsetDisabled = false;
  ligneProduit:ContratProduit =new ContratProduit();
  produits:any;
  montant:number=0;
  isShow = false;
  constructor(private contratService:ContratService ,private contratproduitService :LigneProduitContratService,private produitService:ProduitService,private router :Router) { }

  ngOnInit(): void {
    this.getProduits();
    this.getContrats();
   // this.ligneProduit.contrat.numero=this.contrat.numero;
  }
  selected(){
    this.montant =this.ligneProduit.produit.prix * this.ligneProduit.quantite;
  }
  private getProduits(){
    this.produitService.getAllProduits().subscribe(
      data =>{
        this.produits=data;
      });
  }
  private getContrats(){
    this.contratService.getAllContrat().subscribe(
      data =>{
        this.contrats=data;
      });
  }
  goToList(){
    this.router.navigate(['/contrats'])
  }
  saveLigneProduit(){
    this.contratproduitService.createLigneProduit(this.ligneProduit).subscribe( data =>{
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
