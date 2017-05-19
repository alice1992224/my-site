import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Category } from './category';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryService {

  private backendUrl = 'http:\/\/localhost:3000';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) { }

  private handleError(error: any): Promise<any> {
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
}
