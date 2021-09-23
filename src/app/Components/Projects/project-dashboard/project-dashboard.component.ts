import { Component, OnInit } from '@angular/core';
import {PostService} from '../../../posts/post.service';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css']
})
export class ProjectDashboardComponent implements OnInit {
  title: string;
  image: string = null;
  content: string;
  published: string;
  constructor(private postService: PostService) { }

  ngOnInit() {
  }
  createProject() {
    const data = {
      content: this.content,
      image: this.image,
      title: this.title,
      published: this.published,
    };
    this.postService.createProject(data);
  }
  alert() {
    alert('Successfully published :D ! ');
  }
}
