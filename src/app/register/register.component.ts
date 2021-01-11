import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  provinces: any[];

  constructor(private authService: AuthService, private route: Router) { }

  // two way binding
  user = {
    province: '3',
    fullname: 'franken',
    email: 'ng@hotmail',
    password: '554'
  };

  ngOnInit() {
    this.provinces = [
      { id: '1', name: 'กรุงเทพ' },
      { id: '2', name: 'เชียงใหม่' },
      { id: '3', name: 'ขอนแก่น' },
      { id: '4', name: 'เลย' },
      { id: '5', name: 'ชลบุรี' },
      { id: '6', name: 'ตาก'}
    ];
  }

  onRegister(formModel: any) {

    this.authService.register(formModel).subscribe(
      (resp) => {
        console.log(resp);
        if (resp.status === 'ok') {
          this.route.navigate(['/home']);
        } else {
          alert('Error ' + resp.message);
          this.route.navigate(['/home']);
        }
      }
    );
    

  }
}
