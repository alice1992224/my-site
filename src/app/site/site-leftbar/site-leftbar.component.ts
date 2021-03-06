import { Component, OnInit } from '@angular/core';

import { Category } from '../../category';
import { Article } from '../../article';

import { CategoryService } from '../category.service';

@Component({
  selector: 'app-site-leftbar',
  templateUrl: './site-leftbar.component.html',
  styleUrls: ['./site-leftbar.component.css']
})

export class SiteLeftbarComponent implements OnInit {

  selectedCategory: Category;
  latestArticles: Article[] = [];
  categories: Category[] = [];

  /*
  categories: Category[] = [
  	{
  		id: 1,
  		name: '前端技術'
  	},
  	{
  		id: 2,
  		name: '美食旅遊'
  	},
  	{
  		id: 3,
  		name: '關注健康'
  	},
  	{
  		id: 4,
  		name: '閱讀計畫'
  	},
  	{
  		id: 5,
  		name: '生活小語'
  	}
  ]
  */

  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories()
        .then(categories => this.categories = categories)
        .then(()=>{
          this.selectedCategory = this.categories[0];
          this.categoryService.getArticlesByCategory(this.selectedCategory.id.toString())
            .then(articles => this.latestArticles = articles);
        });
    
  }

  onSelect(category: Category): void {
    this.selectedCategory = category;
    this.categoryService.getArticlesByCategory(this.selectedCategory.id.toString())
        .then((articles) => {this.latestArticles = articles; console.log(this.latestArticles);});
  }

}
