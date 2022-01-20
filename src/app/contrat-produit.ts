import {Contrat} from "./contrat";
import {Produit} from "./produit";
import {ContratProduitKey} from "./contrat-produit-key";

export class ContratProduit {
  // @ts-ignore
  id:ContratProduitKey ;
  contrat:Contrat = new Contrat();
  produit:Produit = new Produit();
  quantite:number= 0;
  montant:number = 0;
}
