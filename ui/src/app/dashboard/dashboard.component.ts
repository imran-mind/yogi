import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService  } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userId :String;
  firstName : String;
  lastName :String;
  username :String;
  jwtToken :String;

  constructor(private router :Router ,private auth :AuthService) {
    this.userId = localStorage.getItem('userId');
    this.firstName = localStorage.getItem('firstName');
    this.lastName = localStorage.getItem('lastName');
    this.username = localStorage.getItem('username');
    this.jwtToken = localStorage.getItem('token');
  }

  ngOnInit() {
  }

  signOut(){
    // localStorage.setItem('token',null);
    alert('sign out');
    localStorage.removeItem('token');
    // this.auth.logout();
    this.router.navigate(['login']);
  }



}
