import {Component, Input, OnInit} from '@angular/core';
import {Partie} from '../../../models/Partie';
import {AppService} from '../../../services/app.service';

@Component({
  selector: '[app-resultat-row]',
  templateUrl: './resultat-row.component.html',
  styleUrls: ['./resultat-row.component.scss']
})
export class ResultatRowComponent implements OnInit {
  @Input() public partie:Partie;
  nbrCioyens: number;
  perCentCitoyens:number;

  constructor(private service:AppService) { }

  ngOnInit(): void {
    this.nbrCioyens=this.service.getVoters(this.partie.nom);
    this.perCentCitoyens=this.service.getVotersPercent(this.partie.nom);

  }

}
