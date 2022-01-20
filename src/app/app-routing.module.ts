import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContratListComponent} from "./contrat-list/contrat-list.component";
import {HttpClientModule} from "@angular/common/http";
import {CreateContratComponent} from "./create-contrat/create-contrat.component";
import {LigneProduitContratComponent} from "./ligne-produit-contrat/ligne-produit-contrat.component";
import {ContratDetailsComponent} from "./contrat-details/contrat-details.component";
import {UpdateContratStatusComponent} from "./update-contrat-status/update-contrat-status.component";
import {HomeComponent} from "./home/home.component";
import {DevisListComponent} from "./devis-list/devis-list.component";
import {CreateDevisComponent} from "./create-devis/create-devis.component";
import {DevisDetailsComponent} from "./devis-details/devis-details.component";
import {UpdateDevisComponent} from "./update-devis/update-devis.component";

const routes: Routes = [
  {path :'contrats' , component : ContratListComponent},
  {path :'create-contrat' , component : CreateContratComponent},
  {path : '',redirectTo: ' ',pathMatch: 'full'},
  {path :'create-contrat-ligneProduit' , component : LigneProduitContratComponent},
  {path :'contrat-ligneProduit-details/:id' , component : ContratDetailsComponent},
  {path :'update-status-contrat/:id' , component : UpdateContratStatusComponent},
  {path :' ' , component : HomeComponent},
  {path :'devis' , component : DevisListComponent},
  {path :'create-devis' , component : CreateDevisComponent},
  {path :'devis-ligneProduit-details/:id' , component : DevisDetailsComponent},
  {path :'update-status-devis/:id' , component : UpdateDevisComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
