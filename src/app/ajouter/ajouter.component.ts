import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  titletoAdd= new FormControl('');
  prixtoAdd= new FormControl('');

  constructor() {}

  ngOnInit(): void {
    
  } 
  onSubmit(form:NgForm) {
    const newtitle= this.titletoAdd.value;
    const newprix = this.prixtoAdd.value;
    console.log ("newtiltle : " +newtitle)
    console.log ("newprix : " +newprix)
  }

}
