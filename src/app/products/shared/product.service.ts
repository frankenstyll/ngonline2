import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'https://codingthailand.com/api/get_courses.php';
  private courseDetailUrl = 'https://codingthailand.com/api/get_course_detail.php';

  //4f86d4dd44d24af98095e1505b8f899e , api keys
  constructor(private http: HttpClient) { }

  // return ข้อมูลแบบ Model
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

  // return ข้อมูลกลับแบบ any
   getProductDetail(id: number): Observable<any[]> {
    const productParam = {
      'course_id': id.toString()
    };

    return this.http.get<any[]>(this.courseDetailUrl, { params: productParam });
  }
}
