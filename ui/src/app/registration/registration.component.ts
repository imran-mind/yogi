import { Component, OnInit,ElementRef } from '@angular/core';
import { UserService } from '../user.service';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  model: any = {};
  error: any;
  serverResponse: any;
  successAlert: Boolean = false;
  alreadyExistAlert: Boolean = false;
  alertMessage: any;

  constructor(private userService: UserService, private http: Http,
    private router: Router, private el: ElementRef) { }

  ngOnInit() {
  }

  register() {
    console.log('<========Inside register function========>')
    this.userService.registerUser(this.model)
      .then(user => {
        this.serverResponse = user;
        if (this.serverResponse.statusCode !== 201 && this.serverResponse.statusCode !== 200) {
          console.log('something went wrong');
        }
        else if (this.serverResponse.statusCode === 201) {
          console.log(this.serverResponse.message);

          this.successAlert = true;
          this.alertMessage = "successfully created";
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000);
        }

        else  if (this.serverResponse.statusCode == 200 && this.serverResponse.userExist ==true) {
          console.log(this.serverResponse.message);
          this.alreadyExistAlert = true;
          this.alertMessage = "User already exist with this email please use another email";
          setTimeout(() => {
            this.alreadyExistAlert =false;
          }, 2000);
        }
      })
      .catch(error => {
        console.log('--------Error-In-SignUp----------');
      });
  }

}
