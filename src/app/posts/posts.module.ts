import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {ProjectDetailsComponent} from '../Components/Projects/project-details/project-details.component';


const routes: Routes = [
  {path: 'Schools', component: PostListComponent},
  {path: 'Schools/:id', component: PostDetailComponent},
  {path: 'dashboard', component: PostDashboardComponent},
  {path: 'Members/:id', component: ProjectDetailsComponent}
];

@NgModule({
  declarations: [PostDashboardComponent, PostDetailComponent, PostListComponent],
  exports: [
    PostListComponent,
    PostDashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class PostsModule { }
