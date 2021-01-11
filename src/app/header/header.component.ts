import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin: boolean;
  constructor(private auth: AuthService) { 
    if (this.auth.isLogin()) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  ngOnInit() {
  }

}
