import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  article$ = null;

  constructor(private readonly articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.article$ = this.articlesService.getArticles()
  }
}
