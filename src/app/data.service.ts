import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  Listearticle=[
  {
    titrecard:"Mercedes" ,
    Description:"Ceci est une mercedes",
    Prix:"prix2",
    nom:"Awa Ndiaye",
    Image:"https://images.caradisiac.com/images/3/9/0/6/203906/S0-la-nouvelle-mercedes-classe-e-2023-a-partir-de-64-750eur-766367.jpg",
    time:"Il ya 2h"
  },
   {
   titrecard:"Tesla",
   Description:"Ceci est Tesla",
   Prix:"prix1",
   nom:"Moussa TOP",
   Image:"https://www.challenges.fr/assets/img/2020/06/09/cover-r4x3w1200-5edf61a42b73d-dsc-0054-resultat-jpg.jpg",
   time:"Il ya 3h",
   },

   {
   titrecard:"Audi",
   Description:"Ceci est une Audi",
   Prix:"prix3",
   nom:"Mariama Diop",
   Image:"https://media.wired.com/photos/647a3a2ee416fd283a85c2ca/master/w_1600,c_limit/Audi-Q8-E-tron-Featured-Gear.jpg",
   time:"Il ya 5h",
   },
  ]
  constructor() { }
}
