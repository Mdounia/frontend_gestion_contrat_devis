import { Component, OnInit } from '@angular/core';
import {Contrat} from "../contrat";
import {ContratService} from "../service/contrat.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-contrat-list',
  templateUrl: './contrat-list.component.html',
  styleUrls: ['./contrat-list.component.css']
})
export class ContratListComponent implements OnInit {

  contrats:any;
  constructor(private contratService : ContratService,private router :Router) { }

  ngOnInit(): void {
    this.getContrats();
  }
private getContrats(){
    this.contratService.getAllContrat().subscribe(
      data =>{
        this.contrats=data;
      });
}
updateStatus(id:number){
  this.router.navigate(['/update-status-contrat',id]);
}
contratDetails(id:number){
  this.router.navigate(['/contrat-ligneProduit-details',id]);
}
deleteContrat(id:number){
  this.contratService.deleteContrat(id).subscribe(
    data =>{
      this.getContrats()
    }
  );
}
}
