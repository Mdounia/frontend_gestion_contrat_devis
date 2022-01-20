import {DevisProduitKey} from "./devis-produit-key";
import {Devis} from "./devis";
import {Produit} from "./produit";

export class DevisProduit {
  // @ts-ignore
  id:DevisProduitKey;
  devis:Devis = new Devis();
  produit:Produit = new Produit();
  quantite:number= 0;
  montant:number = 0;
}
