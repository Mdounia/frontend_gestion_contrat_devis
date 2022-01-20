import { Component, OnInit } from '@angular/core';
import {Contrat} from "../contrat";
import {ContratService} from "../service/contrat.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../service/client.service";

@Component({
  selector: 'app-update-contrat-status',
  templateUrl: './update-contrat-status.component.html',
  styleUrls: ['./update-contrat-status.component.css']
})
export class UpdateContratStatusComponent implements OnInit {

  // @ts-ignore
  id:number;
  // @ts-ignore
  contrat :Contrat;
  constructor(private contratService :ContratService,private route :ActivatedRoute,private clientService: ClientService,private router :Router) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];
    this.contratService.findById(this.id).subscribe(
      data =>{
        this.contrat = data;
      }
    );
  }
onSubmit(){

    this.contratService.updateStatus(this.id,this.contrat).subscribe(
      data =>{
        this.goToContratList();
      }
    );
}
  goToContratList(){
    this.router.navigate(['/contrats'])
  }
}
