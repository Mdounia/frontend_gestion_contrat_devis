import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContratListComponent} from "./contrat-list/contrat-list.component";
import {HttpClientModule} from "@angular/common/http";
import {CreateContratComponent} from "./create-contrat/create-contrat.component";
import {LigneProduitContratComponent} from "./ligne-produit-contrat/ligne-produit-contrat.component";
import {ContratDetailsComponent} from "./contrat-details/contrat-details.component";
import {UpdateContratStatusComponent} from "./update-contrat-status/update-contrat-status.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path :'contrats' , component : ContratListComponent},
  {path :'create-contrat' , component : CreateContratComponent},
  {path : '',redirectTo: ' ',pathMatch: 'full'},
  {path :'create-contrat-ligneProduit' , component : LigneProduitContratComponent},
  {path :'contrat-ligneProduit-details/:id' , component : ContratDetailsComponent},
  {path :'update-status-contrat/:id' , component : UpdateContratStatusComponent},
  {path :' ' , component : HomeComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
