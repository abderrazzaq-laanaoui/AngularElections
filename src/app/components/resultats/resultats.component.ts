import { Component, OnInit } from '@angular/core';
import {Partie} from '../../models/Partie';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.scss']
})
export class ResultatsComponent implements OnInit {

  public parties: Array<Partie>;

  constructor(private service :AppService) {
  }

  ngOnInit(): void {
    this.parties = this.service.praties;
  }


}
