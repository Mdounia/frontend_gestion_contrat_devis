import { Component, OnInit } from '@angular/core';
import {DevisService} from "../service/devis.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-devis-list',
  templateUrl: './devis-list.component.html',
  styleUrls: ['./devis-list.component.css']
})
export class DevisListComponent implements OnInit {

  devis:any;
  constructor(private devisService:DevisService,private router :Router) { }

  ngOnInit(): void {
    this.getAllDevis();
  }

  private getAllDevis(){
    this.devisService.getAllDevis().subscribe(
      data =>{
        this.devis = data;
      }
    );
  }
deleteDevis(id:number){
  this.devisService.deleteDevis(id).subscribe(
    data=>{
      this.getAllDevis();
    }
  );
}
devisDetails(id:number){
  this.router.navigate(['/devis-ligneProduit-details',id]);

}
updateStatus(id:number){
  this.router.navigate(['/update-status-devis',id]);
}
}
