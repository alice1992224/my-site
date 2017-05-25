import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


import { Article } from '../../article';
import { ArticleService } from '../article.service';


import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article = new Article();
  //article: Article;
  basePath: string = 'assets/contents';

  constructor(
    private articleService:ArticleService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    console.log('aaa');
    this.route.params
      .switchMap((params: Params) => this.articleService.getArticle(params['id']))
      .subscribe(article => this.article = article);
  }
}
