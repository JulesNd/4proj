import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../post.service';
import {Post} from '../post';
import {Observable} from 'rxjs';
import {AuthService} from '../../core/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  posts: Observable<Post[]>;
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
    this.getPost();
    console.log(this);
    this.auth.getUserState().subscribe(user => {this.user = user; });
    this.auth.eventAuthError$.subscribe(data => {
      this.authError = data;
    });
  }
  getPost() {
    const id = this.route.snapshot.paramMap.get('id');
    return this.postService.getPostData(id).subscribe(data => this.post = data);
  }
  updatePost() {
    const formData = {
      title: this.post.title,
      content: this.post.content,
      image: this.post.image,
      published: this.post.published
    };
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.update(id, formData);
  }

  delete() {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.delete(id);
  }
  alert() {
    alert('Updated :) !  ');
  }

  toggleShow() {
    this.Show = !this.Show;
  }
  scroll(el) {
    el.scrollIntoView({ behavior: 'smooth'});
  }


}


