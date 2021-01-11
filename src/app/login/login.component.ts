import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subs: Subscription;
  isLogin = false;
  showMessage = false;
  profile: any;

  errorMessage: string;
  showError = false;

  loginForm = this.formBuild.group({
    email: ['', [Validators.email, Validators.required] ],
    password: ['', [Validators.required, Validators.minLength(3)] ]
  });

  constructor(private formBuild: FormBuilder, private authService: AuthService , private route: Router) {
    if (this.authService.isLogin()) {
      this.isLogin = true;
      this.profile = JSON.parse(localStorage.getItem('profile'));
    }
  }

  ngOnInit() {
    if (this.authService.isLogin()) {

    }
  }
  logoutClick() {
    this.authService.logout();
    this.isLogin = false;

    this.route.navigate(['/home']);
  }
  loginClick() {
    console.log(this.loginForm.value);
    this.subs = this.authService.login(this.loginForm.value).subscribe(
      (auth_token) => {
        console.log(auth_token);
        this.isLogin = true;
        this.showMessage = true;

        localStorage.setItem('token', JSON.stringify(auth_token));

        // get user profile
        this.authService.getUserProfile().subscribe(
          (prof) => {
            if (prof) {
              localStorage.setItem('profile', JSON.stringify(prof));
              this.profile = JSON.parse(localStorage.getItem('profile'));
            }
          }
        );

        setTimeout(() => { this.showMessage = false; }, 1000);

      }, 
      (error) => {
        // เมื่อโยน error มาจาก authservice กรณีที่เกิด error จะเข้า method นี้
        console.log(error.error.error_description);
        this.showError = true;
        this.errorMessage = error.error.error_description;
        setTimeout(() => { this.showError = false; }, 2000);
      }
    );
  }

}
