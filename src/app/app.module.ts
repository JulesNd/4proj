import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ArticlesPageComponent } from './Components/articles-page/articles-page.component';
import { ProjectsPageComponent } from './Components/projects-page/projects-page.component';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { ContactPageComponent } from './Components/contact-page/contact-page.component';
import { ProjectsComponent } from './Components/projects-page/projects/projects.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdminComponent } from './Components/admin/admin.component';
import { UserComponent } from './Components/user/user.component';
import {FormsModule} from '@angular/forms';
import { PostingComponent } from './Components/posting/posting.component';
import { SignupComponent } from './Components/signup/signup.component';
import { PostsModule } from './posts/posts.module';
import {RouterModule, Routes} from '@angular/router';
import { ProjectListComponent } from './Components/Projects/project-list/project-list.component';
import {ProjectDetailsComponent} from './Components/Projects/project-details/project-details.component';
import {ProjectDashboardComponent} from './Components/Projects/project-dashboard/project-dashboard.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { PartnersComponent } from './Components/partners/partners.component';

const routes: Routes = [



];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ArticlesPageComponent,
    ProjectsPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    ProjectsComponent,
    NavbarComponent,
    AdminComponent,
    UserComponent,
    PostingComponent,
    SignupComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    ProjectDashboardComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    SharedModule,
    FormsModule,
    PostsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ {
    provide: LocationStrategy, useClass: HashLocationStrategy,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
