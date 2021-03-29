import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../../../services/app.service';
import {Partie} from '../../../models/Partie';

@Component({
  selector: 'app-add-partie',
  templateUrl: './add-partie.component.html',
  styleUrls: ['./add-partie.component.scss']
})
export class AddPartieComponent implements OnInit {
  addForm = new FormGroup({
    nom : new FormControl('',[Validators.required,Validators.minLength(3)]),
    date : new FormControl('',Validators.required),
    description : new FormControl('',[Validators.required,Validators.minLength(10)])
  });
  errMessage: string ="";


  constructor(private service:AppService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let nom = this.addForm.getRawValue().nom.trim();
    let date = this.addForm.getRawValue().date.trim();
    let description = this.addForm.getRawValue().description.trim();
    if(this.addForm.valid)
        if(this.service.addPartie(new Partie(nom,description,date)))
          this.addForm.reset();
    }

  getErrorMessage():void {
    this.errMessage = "";
    if((<string>this.addForm.getRawValue().nom).trim().length < 3)
      this.errMessage += "<br> => Le nom doit avoir minimum 3 lettres";
    if((<string>this.addForm.getRawValue().date) =="" )
      this.errMessage += "<br> => Le champs date est vide";
    if((<string>this.addForm.getRawValue().description).trim().length < 10)
      this.errMessage += "<br> => Le nom doit avoir minimum 10 lettres";
    if(this.errMessage  != "")
      this.errMessage = "Merci de verifier les conditions suivants:" +this.errMessage ;

  }
}

