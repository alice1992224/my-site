import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Category } from './../../category';
import { CategoryService } from './../../site/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @ViewChild('newNameInput') newNameInputEl: ElementRef;

  selectedCategory: Category;
  categories: Category[];
  categoriesNum: number;
  categoryForm: FormGroup;

  newCategoryName = new FormControl();
  
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private fb: FormBuilder,
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
    this.createForm();
  }

  createForm(): void {
    this.categoryForm = this.fb.group({
      id: ['', Validators.required], 
      name: ['', Validators.required],
    });
  }
  
  onSelect(category: Category): void {
    this.selectedCategory = category;
  }

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
}
