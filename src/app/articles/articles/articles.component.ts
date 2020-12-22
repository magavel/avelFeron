import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  article$ = null;

  constructor(private readonly articlesService: ArticleService) {}

  ngOnInit(): void {
    this.article$ = this.articlesService.getArticles();
  }

  reloadArticles(deletionSuccess): void {
    this.article$ = this.articlesService.getArticles();
  }
}
