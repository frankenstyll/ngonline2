import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Subscription } from 'rxjs'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit , OnDestroy{
  private subs: Subscription
  title: string = 'About';
  name: string;
  info: any;
  age: number;
  profile = './assets/images/journey/0.jpg';

  picIndex = 0;

  course = [
    {name: 'PHP', price: 200},
    {name: 'ANGULAR', price: 600},
    {name: 'REACT', price: 700},
    {name: 'VUE.JS', price: 500},
  ];
  picture = [
    './assets/images/journey/1.jpg',
    './assets/images/journey/2.jpg',
    './assets/images/journey/3.jpg',
    './assets/images/journey/4.jpg',
    './assets/images/journey/5.jpg',
    './assets/images/journey/6.jpg',
    './assets/images/journey/7.jpg',
    './assets/images/journey/8.jpg',
    './assets/images/journey/9.jpg',
    './assets/images/journey/10.jpg',
    './assets/images/journey/12.jpg',
    './assets/images/journey/13.jpg',
    './assets/images/journey/14.jpg',
    './assets/images/journey/15.jpg',
    './assets/images/journey/16.jpg',
    './assets/images/journey/17.jpg'

];
imgWidth = 500;
isShow = false;

indexColor = 0;
currentColor = 'red'
colors =['yellow', 'blue' , 'pink']
isActive = false

constructor(private tb: Title) {
  this.age = 32;
  this.info = {
    email: 'frank@gmail.com',
    skill: 'Tongue'
  };

  }
  ngOnDestroy(){
    
  }
  ngOnInit() {
    this.name = 'Frank Kee';
    this.tb.setTitle('About F')
  }

  next() {
    if (this.picIndex >= this.picture.length) {
      this.picIndex = 0;
    }
    this.profile = this.picture[this.picIndex++];
  }

  changeClass(){
    this.isActive = true
  }

  changeColor(){
    if (this.indexColor >= this.colors.length) {
      this.indexColor = 0;
    }
    this.currentColor = this.colors[this.indexColor++];
  }

}
