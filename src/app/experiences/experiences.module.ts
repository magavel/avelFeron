import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperiencesRoutingModule } from './experiences-routing.module';
import { ExperiencesListComponent } from './experiences-list/experiences-list.component';
import { ExperiencesDetailComponent } from './experiences-detail/experiences-detail.component';


@NgModule({
  declarations: [ExperiencesListComponent, ExperiencesDetailComponent],
  imports: [
    CommonModule,
    ExperiencesRoutingModule
  ]
})
export class ExperiencesModule { }
