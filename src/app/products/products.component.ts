import { ProductService } from './shared/product.service';
import { Title } from '@angular/platform-browser';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from './shared/product.model';

import { Subscription } from 'rxjs'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Product[];
  private sub: Subscription;

  constructor(
    private title: Title ,
    private productService: ProductService) {

  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  ngOnInit() {
    this.title.setTitle("Products")
    this.reloadProduct();
  }

  reloadProduct() {
    this.sub = this.productService.getProducts().subscribe(

      (productsData) => { //productsData คือ object ที่รับข้อมูลมา
        this.products = productsData;
      }
    );
  }

}
