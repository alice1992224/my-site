import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Article } from './../../article';
import { ArticleService } from './../../site/article.service';
import { Category } from './../../category';
import { CategoryService } from './../../site/category.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  //@ViewChild('newNameInput') newNameInputEl: ElementRef;
  
  selectedArticle: Article;
  articles: Article[];
  articlesNum: number;
  articleForm: FormGroup;
  newArticleName = new FormControl();
  categories: Category[];

  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private router: Router,
    private fb: FormBuilder,) { }

  ngOnInit() {
    this.articleService.getArticles()
        .then(articles => {
          this.articles = articles;
          this.articlesNum = articles.length;
          console.log(this.articles);
        })
        .then(()=>{
          this.selectedArticle = this.articles[0];
        });

    this.categoryService.getCategories()
        .then(categories => {
          this.categories = categories;
          console.log(this.categories);
        });
        
    this.createForm();
  }

  createForm(): void {
    this.articleForm = this.fb.group({
      id: ['', Validators.required], 
      author: ['', Validators.required],
      title: ['', Validators.required],
      categoryId: ['', Validators],
      fileName: ['', Validators],
      publishTime: ['', Validators],
    });
  }

  onSelect(article: Article): void {
    this.selectedArticle = article;
  }

  /*
  add(name: string): void {
     
    let tmp: Category = {
      'id': this.categoriesNum+1,
      'name': name
    };

    this.categoryService.create(tmp)
        .then(category => {
          this.categoriesNum = this.categoriesNum+1;
          this.categories.push(tmp);
          this.newNameInputEl.nativeElement.value = null;
        })
  }

  delete(category: Category): void {
    this.categoryService.delete(category.id)
        .then(() => {
          this.categories = this.categories.filter( c => c != category);
          if( this.selectedCategory === category ) { this.selectedCategory = null; }
          this.categoriesNum = this.categoriesNum - 1;
        })
  }

  save(): void {

    var id = (this.categoryForm.get('id').value) ? 
              this.categoryForm.get('id').value : this.selectedCategory.id;
    var name = (this.categoryForm.get('name').value) ? 
              this.categoryForm.get('name').value : this.selectedCategory.name;

    let updateInfo = {
      'oldId': this.selectedCategory.id,
      'newId': id,
      'name': name,
    };

    this.categoryService.update(updateInfo)
        .then(newCategory => {
          this.categories.map(category => {
            if(category.id == updateInfo.oldId){
              category.id = newCategory.id;
              category.name = newCategory.name;
            }
          })
        });
  }
  */

}

