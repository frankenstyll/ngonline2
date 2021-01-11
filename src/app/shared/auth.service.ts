import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // HttpErrorResponse เอาไว้รับ error
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs'; // throwError เอาไว้ throw error
import { catchError, retry } from 'rxjs/operators'; // ดักจับตัว error , retry เมื่อเรียกครั้งแรกไม่ได้,

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private HEADER_JSON = { 'Content-Type': 'application/json' };
  private HEADER_URLENCODED = { 'Content-Type': 'application/x-www-form-urlencoded' };

  // application/x-www-form-urlencoded
  private registerUrl = 'https://codingthailand.com/api/insert_user5.php';
  private loginUrl = 'https://dev-ixaoxc51.au.auth0.com/oauth/token'; // application -> NgOnline -> setting -> domain
  private getProfileUrl = 'https://dev-ixaoxc51.au.auth0.com/userinfo';

  constructor(private http: HttpClient) { }

  register(formValue: any): Observable<any> {
    return this.http.post<any>(this.registerUrl, formValue, { headers: this.HEADER_JSON } ); // แนบ header ที่เป็น json
  }

  login(loginForm: any): Observable<any> {

    // const body = `?grant_type=password&username=${loginForm.email}&
    // password=${loginForm.password}&audience=https://dev-ixaoxc51.au.auth0.com/api/v2/&
    // scope=openid&client_id=0vwgsdW1mmSqrDnViE1Tp1x1VG3r4qE6`;
    // console.log(body);

    // const body = `grant_type=password&username=nontapap.th@gmail.com&
    //  password=Newkumpon@21&audience=https://dev-ixaoxc51.au.auth0.com/api/v2/&
    //  scope=openid&client_id=0vwgsdW1mmSqrDnViE1Tp1x1VG3r4qE6`;

    const body = {
      grant_type: 'password',
      username: loginForm.email,
      password: loginForm.password,
      audience: 'https://dev-ixaoxc51.au.auth0.com/api/v2/', // api-> API Audience
      scope: 'openid',
      client_id: '0vwgsdW1mmSqrDnViE1Tp1x1VG3r4qE6' // application -> NgOnline -> setting -> client id
    };

    return this.http.post<any>(this.loginUrl, body, { headers: this.HEADER_JSON })
      .pipe(
        // วิธีใช้ operators ของ rxjs
        retry(1), // retry ก่นอ 1 รอบ
        catchError(this.handleError) // ถ้าเกิด error ให้โยนออกไป
      );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
  }

  isLogin(): boolean {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  getUserProfile(): Observable<any> {
    let tok = JSON.parse(localStorage.getItem('token'));

    return this.http.get<any>(this.getProfileUrl,
      {
        headers: {
          'Authorization': `Bearer ${tok.access_token}`
        }
      }
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error); // โยน error
  }
}
