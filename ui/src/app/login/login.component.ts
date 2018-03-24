import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // user: User;
      errorMessage: String;
      customResponse: any;
      login: any = {};
      errorAlert: Boolean = false;
      unauthorizeUser: any;
      serverResponse: any;
      response: any;
      error: any;
      googleAuthUrl: any;
      windwOpenForLogin: any;
      token: string;

  constructor(private router: Router,
    private userService: UserService,
   private _cookieService:CookieService) {
     console.log("******** "+_cookieService.get('remember'));
     if(_cookieService.get('remember')){
      this.login.username=this._cookieService.get('username');
      this.login.password=this._cookieService.get('password');
      this.login.rememberme=this._cookieService.get('remember');
      }
    }

  ngOnInit() {
  }


  userLogin() {
    console.log('<========Inside register function========>');
    console.log ("-----> login object ",this.login);
    if(this.login.rememberme ==true){
      this._cookieService.put('username',this.login.username);
      this._cookieService.put('password',this.login.password);
      this._cookieService.put('remember',this.login.rememberme);
    }
    this.userService.userLogin(this.login)
      .then(user => {
        // this.serverResponse = user;
        this.customResponse = <any>user;
        console.log(this.customResponse);
        if (this.customResponse) {
            if (this.customResponse.statusCode === 200 && this.customResponse.found == false) {
                console.log('..........invalid........');
                this.errorAlert = true;
                this.unauthorizeUser = "invalid username or pasword";
                setTimeout(() => {
                  this.errorAlert =false;
                }, 2000);
            }
            else if (this.customResponse.statusCode === 200) {
                localStorage.setItem('token', this.customResponse.access_token);
                localStorage.setItem('firstName', this.customResponse.firstName);
                localStorage.setItem('lastName', this.customResponse.lastName);
                localStorage.setItem('username', this.customResponse.username);
                localStorage.setItem('userId', this.customResponse.id);
                this.router.navigate(['dashboard']);
            } else {
                this.router.navigate(['']);
            }
        }
      })
      .catch(error => {
        console.log('--------Error-In-SignUp----------');
      });
  }
  // userLogin() {
  //         this.userService.userLogin(this.login)
  //             .subscribe(res => {
  //                 this.customResponse = <any>res;
  //                 console.log(this.customResponse);
  //                 if (this.customResponse) {
  //                     if (this.customResponse.statusCode === 401) {
  //                         console.log('..........invalid........');
  //                         this.router.navigate(['/']);
  //                         this.errorAlert = true;
  //                         this.unauthorizeUser = "invalid user name or pasword";
  //                     }
  //                     if (this.customResponse.statusCode === 200) {
  //                         localStorage.setItem('token', 'Bearer ' + this.customResponse.token);
  //                         localStorage.setItem('name', this.customResponse.name);
  //                         localStorage.setItem('userId', this.customResponse.id);
  //                         this.router.navigate(['dashboard']);
  //                     } else {
  //                         this.router.navigate(['']);
  //                     }
  //                 }
  //             },
  //             error => {
  //                 this.errorMessage = <any>error
  //                 console.log('------------------------caught error-------------------', JSON.stringify(this.errorMessage));
  //             });
  //     }
}


interface CustomResponse {
    statusCode: number;
    token: string;
    message: string;
    name: string;
    id: string
}
