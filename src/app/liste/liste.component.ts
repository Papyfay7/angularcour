import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  Liste: any;
  
  constructor(private dataService:DataService){}
  ngOnInit(): void {
    this.Liste= this.dataService.Listearticle
  }
  

}
