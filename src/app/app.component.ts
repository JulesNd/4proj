import { Component , OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public router: Router) {}
  title = 'TheGouvernanceProject';
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.router.navigate(['Admin']);
  }
  }
