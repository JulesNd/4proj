import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  email: string;

  password: string;

  user: firebase.User;

  constructor(private auth: AuthService) { }
  authError: any;
  ngOnInit() {
    this.auth.getUserState().subscribe(user => {this.user = user; });
    this.auth.eventAuthError$.subscribe(data => {
      this.authError = data;
    });
  }
  login(frm) {
    // tslint:disable-next-line:no-unused-expression
    this.auth.login(frm.value.email, frm.value.password);
  }
  logout() {
    this.auth.logout();
  }
}
