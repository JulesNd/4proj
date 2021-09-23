import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import {Post} from './post';
import {Project} from '../Components/Projects/Project';
@Injectable({
  providedIn: 'root'
})
export class PostService {
postCollection: AngularFirestoreCollection<Post>;
projectCollection: AngularFirestoreCollection<Project>;
postDoc: AngularFirestoreDocument<Post>;
projectDoc: AngularFirestoreDocument<Project>;
  constructor(private afs: AngularFirestore) {
 this.postCollection = this.afs.collection('posts', ref =>
  ref.orderBy('published', 'desc'));
 this.projectCollection = this.afs.collection('projects', ref => ref.orderBy('published', 'desc'));
  }

  getPosts() {
    // tslint:disable-next-line:no-shadowed-variable
    return this.postCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }
  getProjects() {
    // tslint:disable-next-line:no-shadowed-variable
    return this.projectCollection.snapshotChanges().pipe(map(actions => {
      // @ts-ignore
      // @ts-ignore
      // @ts-ignore
      // @ts-ignore
      return actions.map(a => {
        const data = a.payload.doc.data() as Project;
        const id = a.payload.doc.id;
        return{id, ...data};
        // @ts-ignore
      }).sort((b, a) => a.published - b.published);
    }));
  }
    getPostData(id: string) {
    this.postDoc = this.afs.doc<Post>(`posts/${id}`);
    return this.postDoc.valueChanges();
    }
    getProjectData(id: string) {
    this.projectDoc = this.afs.doc<Project>(`projects/${id}`);
    return this.projectDoc.valueChanges();
  }

  create(data: { image: string; published: string; title: string; content: string }) {
      // tslint:disable-next-line:no-unused-expression
      this.postCollection.add(data).then(r => {data; } );
    }

  createProject(data: { image: string; published: string; title: string; content: string }) {
      // tslint:disable-next-line:no-unused-expression
    this.projectCollection.add(data).then(r => {data; } );
    }
    getPost(id: string) {
    return this.afs.doc<Post>(`posts/${id}`);
    }
    getProject(id: string) {
    return this.afs.doc<Project>(`projects/${id}`);
    }
    delete(id: string) {
      return this.getPost(id).delete();
    }
    deleteProject(id: string) {
    return this.getProject(id).delete();
    }
    update(id: string, formData) {

      return this.getPost(id).update(formData);
    }
  updateProject(id: string, formData) {

    return this.getProject(id).update(formData);
  }

}
