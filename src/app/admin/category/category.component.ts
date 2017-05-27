import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { Category } from './../../category';
import { CategoryService } from './../../site/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  selectedCategory: Category;
  categories: Category[];
  categoriesNum: number;

  newCategoryName = new FormControl();
  
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ){};

  ngOnInit() {
    this.categoryService.getCategories()
        .then(categories => {
          this.categories = categories;
          this.categoriesNum = categories.length;
        })
        .then(()=>{
          this.selectedCategory = this.categories[0];
        });
  }
  
  onSelect(category: Category): void {
    this.selectedCategory = category;
  }

  add(name: string): void {
    console.log('in add');
    console.log(name);
    // id = categoriesNum+1
    // add new category in database
    // categoriesNum++
  }

  delete(category: Category): void {
    console.log('delete category:'+category.name);
  }

  /*
  
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    console.log('gotoDetail');
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.heroService.create(name)
      .then( hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      })
  }

  delete(hero: Hero): void {
    this.heroService.delete(hero.id)
      .then( () => {
        this.heroes = this.heroes.filter( h => h != hero);
        if( this.selectedHero === hero ) { this.selectedHero = null; }
      });
  }
  */

}
