import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Category } from '../category';
import { Article } from '../article';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryService {

  private backendUrl = 'http:\/\/localhost:3000';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) { }

  private handleError(error: any): Promise<any> {
    console.log('error');
    console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }

  getCategories(): Promise<Category[]> {
    const url =  `${this.backendUrl}/categories`;
    return this.http.get(url)
            .toPromise()
            .then(function(response){
              return response.json() as Category[];
           })
           .catch(this.handleError);
  }

  getArticlesByCategory(categoryId:string): Promise<Article[]> {

    if(!categoryId){
      categoryId = '1';
    }

    const url =  `${this.backendUrl}/categories/${categoryId}/articles`;
    console.log(url);
    return this.http.get(url)
            .toPromise()
            .then(function(response){
              return response.json() as Article[];
           })
           .catch(this.handleError);
  }

  update(updateInfo): Promise<Category> {
    const url =  `${this.backendUrl}/categories/${updateInfo.oldId}`;
    let category: Category = {
      'id': updateInfo.newId,
      'name': updateInfo.name
    };
    return this.http.put(url, JSON.stringify(category), {headers: this.headers})
               .toPromise()
               .then(()=> category)
               .catch(this.handleError);
  }

  create(category: Category): Promise<Category> {
    const url =  `${this.backendUrl}/categories/${category.id}`;
    return this.http.post(url, JSON.stringify(category), {headers: this.headers})
           .toPromise()
           .then(() => category)
           .catch(this.handleError)
  }

  delete(id: number): Promise<Category> {
    const url =  `${this.backendUrl}/categories/${id}`;
    return this.http.delete(url, {headers: this.headers})
           .toPromise()
           .then(() => null)
           .catch(this.handleError)
  }
}
