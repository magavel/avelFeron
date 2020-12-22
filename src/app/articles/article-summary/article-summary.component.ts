import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Article} from '../../models/Article';
import {ArticleService} from '../../services/article.service';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-article-summary',
  templateUrl: './article-summary.component.html',
  styleUrls: ['./article-summary.component.scss']
})
export class ArticleSummaryComponent implements OnInit {
  isWAitingForServerResponse = false;
  error = null;

  @Input() article: Article;
  @Output() deleteSuccess = new EventEmitter<boolean>();

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
  }

  deleteArticle(article: Article): void {
    this.isWAitingForServerResponse = true;
    this.articleService
      .deleteArticle(article)
      .pipe(
        catchError(this.handlError)
      )
      .subscribe(
        data => {
          this.isWAitingForServerResponse = false;
          this.handleSucces(data);
        },
        err => {
          this.isWAitingForServerResponse = false;
          this.handlError(err);

        }
      );
  }
  handlError(err) {
    this.error = err;
    return throwError(this.error);
  }

  handleSucces(data): void {
    console.log('success', data);
    this.deleteSuccess.emit(true);
  }

}
