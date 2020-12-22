import { Component, OnInit } from '@angular/core';
import {ExperienceService} from '../../services/experience.service';

@Component({
  selector: 'app-experiences-list',
  templateUrl: './experiences-list.component.html',
  styleUrls: ['./experiences-list.component.scss']
})
export class ExperiencesListComponent implements OnInit {
  experiences$ = null;

  constructor(private readonly expereinceService: ExperienceService) { }

  ngOnInit(): void {
    this.experiences$ = this.expereinceService.getExperience();
  }

}
