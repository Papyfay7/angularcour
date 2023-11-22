import { Component, OnInit,  } from '@angular/core';
import { DataService } from './data.service';
import {interval, Subscription} from 'rxjs'
import {map, filter} from 'rxjs/operators'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  Liste:any;
  title:any;
  compteurSubscription= Subscription;

  secondes:any;

  //prix1: number=75000000
 // prix2: number=20000000
 // prix3: number=30000000//
 constructor() {}
 ngOnInit(): void {
  const compteur = interval(1000).pipe(
    filter(value => value % 2 === 0),
    map(value => value % 2 === 0 ?
      `${value} est pair` :
      `${value} est impair`
    )
  );

  compteur.subscribe({
    next: (v) => this.secondes = v,
    error: (e) => console.error(e),
    complete: () => console.info('complete')
  });
 }

 // constructor(private dataService:DataService){}
 // ngOnInit(): void {
    //this.Liste= this.dataService.Listearticle }

}
