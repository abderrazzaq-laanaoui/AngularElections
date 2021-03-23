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
    this._praties.push(new Partie("P1","partie naadeyaa","23/09/2009"));
    this._praties.push(new Partie("P2","partie 7ssen mnha","31/01/2012"));
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
  public addPartie(partie: Partie): boolean {
    if(this._praties.find(p => p.nom === partie.nom) !== undefined)
      return false;
    this._praties.push(partie);
    return true;
  }

  public removePartie(partie: Partie): boolean {
    let tmpPartie =  this._praties.find(p => p === partie);
    if(tmpPartie === undefined)
      return false;
    this._praties.splice(this._praties.indexOf(tmpPartie),1);
  }

  public voter(citoyen:Citoyen, nomPartie: String) {
    let partie = this._praties.find(p => p.nom === nomPartie);
    if( partie === undefined )
      return false;
    if (this._citoyens.has(citoyen))
      return false;
    this._citoyens.set(citoyen, partie);
    return true;
  }
}
