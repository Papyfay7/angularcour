import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterComponent } from './ajouter/ajouter.component';
import { DetailComponent } from './detail/detail.component';
import { ListeComponent } from './liste/liste.component';


const routes: Routes = [
  { path: '', redirectTo: '/article', pathMatch: 'full' }, 
  { path: 'ajouter', component: AjouterComponent }, 
  { path: 'detail', component: DetailComponent }, 
  { path: 'liste', component: ListeComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], 
})
export class AppRoutingModule { }