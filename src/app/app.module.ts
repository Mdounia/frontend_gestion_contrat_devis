import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContratListComponent } from './contrat-list/contrat-list.component';
import { CreateContratComponent } from './create-contrat/create-contrat.component';
import {FormsModule} from "@angular/forms";
import { StepsContratComponent } from './steps-contrat/steps-contrat.component';
import { LigneProduitContratComponent } from './ligne-produit-contrat/ligne-produit-contrat.component';
import { ContratDetailsComponent } from './contrat-details/contrat-details.component';
import { UpdateContratStatusComponent } from './update-contrat-status/update-contrat-status.component';
import { HomeComponent } from './home/home.component';
import { DevisListComponent } from './devis-list/devis-list.component';
import { CreateDevisComponent } from './create-devis/create-devis.component';
import { UpdateDevisComponent } from './update-devis/update-devis.component';
import { LigneProduitDevisComponent } from './ligne-produit-devis/ligne-produit-devis.component';
import { DevisDetailsComponent } from './devis-details/devis-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContratListComponent,
    CreateContratComponent,
    StepsContratComponent,
    LigneProduitContratComponent,
    ContratDetailsComponent,
    UpdateContratStatusComponent,
    HomeComponent,
    DevisListComponent,
    CreateDevisComponent,
    UpdateDevisComponent,
    LigneProduitDevisComponent,
    DevisDetailsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
