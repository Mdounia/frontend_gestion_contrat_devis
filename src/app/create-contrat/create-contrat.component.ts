import { Component, OnInit } from '@angular/core';
import {Contrat} from "../contrat";
import {ContratService} from "../service/contrat.service";
import {Router} from "@angular/router";
import {ClientService} from "../service/client.service";

@Component({
  selector: 'app-create-contrat',
  templateUrl: './create-contrat.component.html',
  styleUrls: ['./create-contrat.component.css']
})
export class CreateContratComponent implements OnInit {

  constructor(private contratService: ContratService,private router :Router,private clientService: ClientService) { }

  clients :any;
  contrat :Contrat = new Contrat();
  isShow = false;
  fieldsetDisabled = false

  ngOnInit(): void {
    this.getClients()
  }
  private getClients(){
    this.clientService.getAllClient().subscribe(
      data =>{
        this.clients=data;
      });
  }
  saveContrat(){
    this.contratService.createContrat(this.contrat).subscribe( data =>{
      console.log(data);
      //this.goToNextStep();
      this.isShow=true;
      this.fieldsetDisabled=true;
      },
      error => console.log(error));
  }
  goToContratList(){
    this.router.navigate(['/contrats'])
  }
  goToNextStep(){
    this.router.navigate(['/create-contrat-ligneProduit'])
  }
  onSubmit(){
    console.log(this.contrat);
    this.saveContrat();
  }
}
