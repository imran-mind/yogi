import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes,CanActivate } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { AuthGuardService  } from './auth-guard.service';
import { AuthService  } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http'
import { JwtModule } from '@auth0/angular-jwt';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { UserService } from './user.service';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';


const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  },
  {
   path: '**',
   redirectTo: 'login'
 }
];

export function tokenGetter() {
  return localStorage.getItem('token');
}

export const AppRoutes = RouterModule.forRoot(appRoutes, { initialNavigation: false });
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        // whitelistedDomains: ['localhost:8080'],
        // blacklistedRoutes: ['localhost:8080/dashboard']
      }
    })
    ],
  providers: [
    UserService,
    CookieService,
    AuthGuardService,
    AuthService,
    JwtHelperService
],
  bootstrap: [AppComponent]
})


export class AppModule { }
