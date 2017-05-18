import { Component, OnInit } from '@angular/core';

export class Category {
	id: number;
	name: string;
}

@Component({
  selector: 'app-site-leftbar',
  templateUrl: './site-leftbar.component.html',
  styleUrls: ['./site-leftbar.component.css']
})
export class SiteLeftbarComponent implements OnInit {

  selectedCategory: Category;
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

  constructor() { }

  ngOnInit() {
  }

  onSelect(category: Category): void {
    console.log('select category');
    this.selectedCategory = category;
  }

}
