import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Partie} from '../../models/Partie';
import {Citoyen} from '../../models/Citoyen';
import {Router} from '@angular/router';


@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent implements OnInit {
  parties = this.service.praties;
  voteForm: FormGroup;

  constructor(private service:AppService,private router: Router) { }

  ngOnInit(): void {
    this.voteForm = new FormGroup({
      cin: new FormControl(''),
      nom: new FormControl(''),
      prenom: new FormControl(''),
      partie: new FormControl(''),
    })
  };
  errMessage = "";

  onSubmit() {
    this.errMessage = "";
    let cin = this.voteForm.getRawValue().cin.trim();
    let nom = this.voteForm.getRawValue().nom.trim();
    let prenom = this.voteForm.getRawValue().prenom.trim();
    let partie = this.voteForm.getRawValue().partie.trim();
    console.log(cin,nom,partie,prenom);
    if(nom!== "" && prenom !== "" && cin !== "" && partie !== ""){
      console.log("dd");
      let res = this.service.voter(new Citoyen(cin, nom, prenom), partie);
      if(res === 1)
        this.errMessage = "Partie introuvable!";
      if(res === 2)
        this.errMessage = "Vous avez deja voter!";
      if(res === -1)
        this.router.navigate(['/resultat'])
      return;

    }
    this.errMessage = "Merci de remplir tout les champs!";
    ;
  }
}
