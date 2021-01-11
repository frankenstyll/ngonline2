import { ProductService } from '../shared/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  subs: Subscription;
  id: number;
  title: string;

  productDetails: any[];

  // ActivatedRoute คือตัวที่รับ param url
  constructor( private route: ActivatedRoute , private prodService: ProductService) { }

  ngOnInit() {
    // เครื่องหมาย + ข้างหน้าคือการแปลงจาก string ไปเป็น number
    this.id = +this.route.snapshot.paramMap.get('id'); // id คือชื่อที่ประกาศไว้ที่ app-routing-module.ts
    this.title = this.route.snapshot.paramMap.get('title');

    this.getProductDetail();
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  getProductDetail() {
    this.subs = this.prodService.getProductDetail(this.id).subscribe(
      (data) => { // data คือค่าที่ได้จาก backend
        this.productDetails = data;
      }
    );
  }

}
