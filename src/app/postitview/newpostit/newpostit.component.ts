import { Component, Input, Output, EventEmitter } from '@angular/core';
import { postIt } from "../../app.component";
import { UploadpostitKeyvalueServiceService } from '../uploadpostit-keyvalue-service.service';

@Component({
  selector: 'app-newpostit',
  templateUrl: './newpostit.component.html',
  styleUrls: ['./newpostit.component.css']
})
export class NewpostitComponent {
  @Input() creaPost: boolean; 
  @Input() post : Array<postIt>;
  @Input() key : string;
  @Output() showNewPost = new EventEmitter<boolean>();
  msgErrore : string;
  newPost : postIt;
  newjson : string;
  constructor(private update: UploadpostitKeyvalueServiceService) {}
  save(titolo : string, testo : string, importante : boolean) {
    if(titolo === "" || testo === ""){
      this.msgErrore = "inserisci tutti i dati";
    } else {
      this.newPost = new postIt();
      this.newPost.titolo = titolo;
      this.newPost.testo = testo;
      this.newPost.importante = importante;
      this.post.push(this.newPost);
      this.newjson = JSON.stringify(this.post)
      this.update.upload(this.key,this.newjson).subscribe();
      this.showNewPost.emit(false);
    }
  }
}
