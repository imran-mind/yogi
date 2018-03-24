import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
   registerUrl = "http://localhost:8080/register";
  loginUrl = "http://localhost:8080/login";
  constructor(private http: Http) { }


  /*register user */
  registerUser(user: any): Promise<any> {
          console.log('-------model--------------');
          console.log(user);
          let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });
          return this.http.post(this.registerUrl, user,options)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  }

  /*register user */
  userLogin(user: any): Promise<any> {
          console.log('-------model--------------');
          console.log(user);
          let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });
          return this.http.post(this.loginUrl, user,options)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  }

/*login user */
  // userLogin(user: any): Observable<any> {
  //     let headers = new Headers({ 'Content-Type': 'application/json' });
  //     let options = new RequestOptions({ headers: headers });
  //     return this.http.post(this.loginUrl, user, options)
  //         .map(this.extractData)
  //         .catch(this.handleErrorObservable);
  // }

  private extractData(res: Response) {
        let body = res.json();
        console.log('*********************');
        console.log(body);
        return body || {};
    }

    private handleErrorObservable(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
  private handleError(error: any): Promise<any> {
      console.error('An error occurred*********', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }

}
