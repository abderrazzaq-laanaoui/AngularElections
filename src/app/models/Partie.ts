import { Citoyen } from "./Citoyen";

export class Partie{
  private _nom:string;
  private _descr:string;
  private _dateCreation:string;
  private _citoyenVotes:Array<Citoyen>;

  constructor(nom: string, descr: string, dateCreation: string, citoyenVotes: Array<Citoyen>) {
    this._nom = nom;
    this._descr = descr;
    this._dateCreation = dateCreation;
    this._citoyenVotes = citoyenVotes;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get descr(): string {
    return this._descr;
  }

  set descr(value: string) {
    this._descr = value;
  }

  get dateCreation(): string {
    return this._dateCreation;
  }

  set dateCreation(value: string) {
    this._dateCreation = value;
  }

  get citoyenVotes(): Array<Citoyen> {
    return this._citoyenVotes;
  }

  set citoyenVotes(value: Array<Citoyen>) {
    this._citoyenVotes = value;
  }
}
