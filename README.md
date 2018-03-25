# Welcome to yogi Dashboard
For running this project 
Node,Mongo,Angular(npm install -g @angular/cli)

step1) git clone https://github.com/imran-mind/yogi.git 
step2) cd yogi/server then do => npm install then run => node server.js

step3) cd yogi/ui 
       then do => npm install 
       then run => ng serve then listen browser (http://localhost:4200)

Tasks=>

Registration : Done
Login :Done 
RememberMe :Done 
Auth Guard :Done 
UI validation: Done 
Backend Validation :Done 
Login JWT Token (when login success) :Done.

features:=> UI =>

1.User Registration => If the username (email) is already exist in the system then it's able to show message like username is already exist please try other username.

=> If the username is unique then user is registered successfully.and redirected to login.

2.Login. => If the credentials do not belong to our system then system must be able to show message like Invalid username or password =>If the credentials are right then it must be on dashboard page. => Also having remember me feature.

3.Dashboard => This page shows you user information

4.LogOut =>Inside Dashboard you will be getting logout button after clicking that you would be redirected to login page.
Backend=> Apis

=> User Registration 
Request:=> 
Url : http://localhost:8080/register 
Method :POST 
Payload : { "firstName":"chota", "lastName":"bheem", "username":"chotabheem@example.com", "password":"bheem" }

Response:=>
{ "message": "success", "userExist": false, "statusCode": 201 }
=> User Login Request:=> Url : http://localhost:8080/login Method :POST Payload : { "username":"chotabheem@example.com", "password":"bheem" }

Response:=> { "statusCode": 200, "found": true, "message": "User Login Successfully", "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNWFiNmUyZjllY2QzNDE2ZGYzMmI2YTQxIiwidXNlcm5hbWUiOiJjaG90YWJoZWVtQGV4YW1wbGUuY29tIiwiaWF0IjoxNTIxOTM1MjA1LCJleHAiOjE1MjE5Mzg4MDV9.4o_4Oz6FWKeALgIHLFoPzQ0U53N0JiO8w-zd0NTu49o", "id": "5ab6e2f9ecd3416df32b6a41", "firstName": "chota", "lastName": "bheem", "username": "chotabheem@example.com" }
