import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Category } from '../category';
import { Article } from '../article';

import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ArticleService {

  private backendUrl = 'http:\/\/localhost:3000';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }

  getArticles(): Promise<Article[]> {
    const url =  `${this.backendUrl}/articles`;
    return this.http.get(url)
            .toPromise()
            .then(function(response){
              return response.json() as Article[];
           })
           .catch(this.handleError);
  }

  getArticle(articleId:string): Promise<Article> {
    const url =  `${this.backendUrl}/articles/${articleId}`;
    return this.http.get(url)
            .toPromise()
            .then(function(response){
              return response.json() as Article;
           })
           .catch(this.handleError);
  }

  getArticleContent(articleId:number): Promise<any> {
    const url =  `${this.backendUrl}/articles/${articleId}/content`;
    return this.http.get(url)
               .toPromise()
               .then(res => {
                 return res.text();
               });
  }

  modifyArticleContent(updateInfo): Promise<any> {
    var articleId = updateInfo.articleId;
    const url =  `${this.backendUrl}/articles/${articleId}/content`;
    let data = {
      'content': updateInfo.content
    };
    return this.http.put(url, JSON.stringify(data), {headers: this.headers})
               .toPromise()
               .then( res => res)
               .catch(this.handleError);
  }
}
