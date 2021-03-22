import { Injectable } from '@angular/core';
import {Citoyen} from '../models/Citoyen';
import {Partie} from '../models/Partie';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public parties:Array<Partie>;
  constructor() {
    this.parties=new Array<Partie>();
  }
  //Parties
  public ajouterPartie(partie:Partie): boolean{
    if(this.parties.find(p=>p===partie)!=undefined)
      return false;
    this.parties.push(partie);
    return true;
  }
  public  suprimerPartie(nomPartie:String):boolean{
    for (let i=0;i<this.parties.length;i++)
      if (this.parties[i].nom==nomPartie){
        this.parties.splice(i,1);
        return true;
      }
    return false;
  }
  public getParties():Array<Partie>{
    return this.parties;
  }
  //citoyen
  public voter(citoyen:Citoyen,nomPartie:String):boolean{
    for(let i=0;i<this.parties.length;i++){
      for (let j=0;j<this.parties[j].citoyenVotes.length;j++){
        if (this.parties[i].citoyenVotes[j].cin=citoyen.cin)
          return false
      }
      for (let i=0;i<this.parties.length;i++)
        if(this.parties[i].nom==nomPartie){
          this.parties[i].citoyenVotes.push(citoyen);
          return true;
        }
      return false;
    }
  }

}
