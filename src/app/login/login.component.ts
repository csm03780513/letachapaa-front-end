import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;
  constructor() { }

  ngOnInit() {
  }

  checkLogin(somedata: any) {
    console.log('called function', this.username, this.password, somedata);
  }

}
