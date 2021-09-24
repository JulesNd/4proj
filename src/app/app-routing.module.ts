import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './Components/home-page/home-page.component';
import {ContactPageComponent} from './Components/contact-page/contact-page.component';
import {AboutPageComponent} from './Components/about-page/about-page.component';
import {ProjectsPageComponent} from './Components/projects-page/projects-page.component';
import {AdminComponent} from './Components/admin/admin.component';
import {PostingComponent} from './Components/posting/posting.component';
import {PostDashboardComponent} from './posts/post-dashboard/post-dashboard.component';
import {PartnersComponent} from './Components/partners/partners.component';

const routes: Routes = [
  {path: 'Scanner', component: HomePageComponent},
  {path: 'Members', component: ProjectsPageComponent},
  {path: 'Contact', component: ContactPageComponent},
  {path: 'About', component: AboutPageComponent},
  {path: 'Admin', component: AdminComponent},
  {path: 'Posting', component: PostingComponent},
  {path: 'dashboard', component: PostDashboardComponent},
  {path: 'partners', component: PartnersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
