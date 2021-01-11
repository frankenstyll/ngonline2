import { NewsService } from '../news/shared/news.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article, News } from './shared/news.model';

// unsubscribe from rxjs
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {

  news: News; // object News ตัวแม่
  articles: Article[]; // object ลูกของ new.model.ts
  totalResult: number;
  subs: Subscription;
  isLoading: boolean;

  constructor(private service: NewsService) { }

  ngOnInit() {
    this.getNews();
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  getNews() {
    this.isLoading = true;
    this.subs = this.service.getNews().subscribe(
      (dataNews) => {
        this.articles = dataNews.articles;
        this.totalResult = dataNews.totalResults;
      }, (error) => {
        // when error response
        this.isLoading = false;
        console.log(error);
    }, () => {
        // when complete
        this.isLoading = false;
      }

    );
  }

}
