import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Project} from '../Projects/Project';
import * as firebase from 'firebase';
import {PostService} from '../../posts/post.service';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  projects: Observable<Project[]>;
  email: string;

  password: string;

  user: firebase.User;
  constructor(private postService: PostService, private auth: AuthService) { }
  ngOnInit() {
    this.projects = this.postService.getProjects();
    this.auth.getUserState().subscribe(user => {this.user = user; });
    this.auth.eventAuthError$.subscribe(data => {
      console.log(this);
    });
  }

}
