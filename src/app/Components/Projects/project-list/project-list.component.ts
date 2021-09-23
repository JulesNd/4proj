import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Project} from '../Project';
import {PostService} from '../../../posts/post.service';
import {AuthService} from '../../../core/auth.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
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
  deleteProject( id: string) {
    this.postService.deleteProject(id);
  }

}
