import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../post';
import {PostService} from '../post.service';
import {AuthService} from '../../core/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
   email: string;

  password: string;
  user: firebase.User;
  posts: Observable<Post[]>;
  constructor(private postService: PostService, private auth: AuthService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.auth.getUserState().subscribe(user => {this.user = user; });
    this.auth.eventAuthError$.subscribe(data => {
      console.log(this);
    });
  }
  delete( id: string) {
    this.postService.delete(id);
  }

}
