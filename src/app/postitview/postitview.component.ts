import { Component, Input } from '@angular/core';
import { postIt } from '../app.component';

@Component({
  selector: 'app-postitview',
  templateUrl: './postitview.component.html',
  styleUrls: ['./postitview.component.css']
})
export class PostitviewComponent {
  viewNewPost : boolean = false;
  viewImportantPost : boolean = false;
  toDelete : number;
  constructor() { }
  @Input() postUser: Array<postIt>;
  @Input() codeUser: string;
  logout() {
    window.location.reload();
  }
  toggleText(el: any) {
    if (el.style.display == 'none') el.style.display = 'block';
    else el.style.display = 'none';
  }
  postView(){
    if(this.viewImportantPost) return this.postUser.filter(post=>post.importante);
    else return this.postUser;
  }
}