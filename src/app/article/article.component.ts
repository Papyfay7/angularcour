import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit  {
  //titrecard: string="Mercedes"
  //textaltimg: string ="Mercedes"
 // prix: number=75000000
  //description: string="Ceci est une mercedes GLE 2021"
  //Image: string="https://source.unsplash.com/600x400/?computer"
 // nom: string="Awa Ndiaye"
   

  @Input() titrecard!: String;
  @Input() Textaltimg!: String;
  @Input() Prix!: number;
  @Input() time!: String;
  @Input() nom!: String;
  @Input() Description!: String;
  @Input() Image!: String;
  @Input() textaltimg!: String;

  constructor() {}

  ngOnInit(): void {}

  onLike() {
    
  }

}


