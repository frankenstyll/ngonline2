import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
    //Title เป็น class พื้นฐานที่ angular สร้างไว้ให้ set สำหรับหัว browser
  constructor(private title : Title) { }

  ngOnInit() {
    this.title.setTitle('Homepage F')
  }

}
