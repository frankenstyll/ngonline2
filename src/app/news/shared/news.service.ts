import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newsUrl = 'https://newsapi.org/v2/top-headlines?country=th&apiKey=4f86d4dd44d24af98095e1505b8f899e';
  // https://newsapi.org/v2/top-headlines?country=th&apiKey=4f86d4dd44d24af98095e1505b8f899e

  constructor(private http: HttpClient) { }

  getNews(): Observable<News> {
    return this.http.get<News>(this.newsUrl);
  }
}
