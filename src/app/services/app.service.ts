import { Injectable } from '@angular/core';
import {Partie} from '../models/Partie';
import {Citoyen} from '../models/Citoyen';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _praties: Array<Partie>;
  private _citoyens: Map<Citoyen, Partie>;

  constructor() {
    this._praties = new Array<Partie>();
    this._praties.push(new Partie("P01","partie naadeyaa","23/09/2009"));
    this._praties.push(new Partie("P02","partie 7ssen mnha","31/01/2012"));
    this._citoyens = new Map<Citoyen, Partie>();
  }

  get citoyens(): Map<Citoyen, Partie> {
    return this._citoyens;
  }

  set citoyens(value: Map<Citoyen, Partie>) {
    this._citoyens = value;
  }

  get praties(): Array<Partie> {
    return this._praties;
  }
  public partieExist(nom:string): boolean{
    return this.praties.find(p => p.nom === nom) !== undefined;

  }
  public citoyenVted(cin:string):boolean{
    for (let key of this._citoyens.keys()) {
      if(key.cin == cin)
        return true;
    }
    return false;
  }
  public addPartie(partie: Partie): boolean {
    if(this._praties.find(p => p.nom === partie.nom) != null)
      return false;
    this._praties.push(partie);
    return true;
  }

  public removePartie(partie: string): boolean {
    let tmpPartie =  this._praties.find(p => p.nom === partie);
    if(tmpPartie === undefined)
      return false;
    this._praties.splice(this._praties.indexOf(tmpPartie),1);
  }
public getVoters(nomPartie:string):number{
    let i = 0;
    this._citoyens.forEach(value => { if(value.nom == nomPartie) i+=1 })

    return i;
}
  public getVotersPercent(nomPartie:string):number{
    let i = 0;
    this._citoyens.forEach(value => { if(value.nom == nomPartie) i+=1 })
    let res = i/this._citoyens.size*100;
    return  isNaN(res )? 0: res  ;
  }
  public voter(citoyen:Citoyen, nomPartie: String):number {
    let partie = this._praties.find(p => p.nom === nomPartie);
    if( partie === undefined )
      return 1;
    if (this.citoyenVted(citoyen.cin))
      return 2;
    this._citoyens.set(citoyen, partie);
    return -1;
  }
}
