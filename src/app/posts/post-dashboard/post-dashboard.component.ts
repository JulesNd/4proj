import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Observable, observable, Subscription} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {
  title: string;
  image: string = null;
  content: string;
  published: string;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  constructor(private postService: PostService, private storage: AngularFireStorage) { }

  ngOnInit() {
  }
  createPost() {
  const data = {
    content: this.content,
    image: this.image,
    title: this.title,
    published: this.published,
  };
  this.postService.create(data);
  }
  alert() {
    alert('School successfully added ! ');
  }
}
