import {Client} from "./client";

export class Contrat {

  // @ts-ignore
  id:number ;
  description: string = "";
  dateDebut: Date = new Date();
  dateFin: Date = new Date();
  status: string ="";
  client: Client = new Client();


}
