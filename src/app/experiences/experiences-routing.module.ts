import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExperiencesListComponent} from './experiences-list/experiences-list.component';

const routes: Routes = [
  { path: '', component: ExperiencesListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperiencesRoutingModule { }
