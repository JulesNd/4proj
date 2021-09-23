import { Component, OnInit } from '@angular/core';
import {Project} from '../Project';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../../posts/post.service';
import {AuthService} from '../../../core/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
project: Project;
projects: Observable<Project[]>;
  public Show: boolean = false;
  email: string;
  title: string;
  image: string = null;
  content: string;
  published: string;
  password: string;

  user: firebase.User;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private auth: AuthService
  ) { }
  authError: any;
  ngOnInit() {
    this.getProject();
    console.log(this);
    this.auth.getUserState().subscribe(user => {this.user = user; });
    this.auth.eventAuthError$.subscribe(data => {
      this.authError = data;
    });
  }
  getProject() {
    const id = this.route.snapshot.paramMap.get('id');
    return this.postService.getProjectData(id).subscribe(data => this.project = data);
  }
  updateProject() {
    const formData = {
      title: this.project.title,
      content: this.project.content,
      image: this.project.image,
      published: this.project.published
    };
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.updateProject(id, formData);
  }
  delete() {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.delete(id);
  }
  alert() {
    alert('Updated :) !   ');
  }

  toggleShow() {
    this.Show = !this.Show;
  }
  scroll(el) {
    el.scrollIntoView({ behavior: 'smooth'});
  }
}
