import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';



import { Article } from '../article';
import { CategoryService } from '../category.service';


import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  articles: Article[] = [];
  articleBasePath: string = 'assets/contents';

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    
    this.route.params
      .switchMap((params: Params) => this.categoryService.getArticlesByCategory(params['id']))
      .subscribe((articles) => {this.articles = articles; console.log(this.articles);});
  }

  openArticle(selectArticle: Article): void {
    this.router.navigate(['/articles', selectArticle.id]);
  }

}
