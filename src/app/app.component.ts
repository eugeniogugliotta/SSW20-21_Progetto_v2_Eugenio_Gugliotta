import { Component } from '@angular/core';
import { PostItKeyValueService } from './postit-keyvalue-service.service';
import { NewkeyKeyvalueService } from './newkey-keyvalue-service.service';

export class postIt {
  titolo: string;
  testo: string;
  importante: boolean;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titolo: string = 'Piattaforma di Post-It';
  msgErrore: string;
  post: Array<postIt>;
  newKey: string;
  code: string;
  constructor( private kvs: PostItKeyValueService, private newkvs: NewkeyKeyvalueService) {}
  login(key: string) {
    this.kvs
      .getData(key)
      .subscribe(
        (data : string) => (
          this.post = JSON.parse(data),
          this.titolo = 'Bentornato ' + key + ', è un piacere rivederti!',
          this.code = key
        ),
        err => (
          this.msgErrore = 'Il codice inserito non è valido',
          console.log('Errore: ' + err.message)
        ),
        () => {
          if(this.post.length === undefined) this.post = [];
        }
      );
  }
  getKey() {
    this.newkvs.newKey().subscribe(key => (
        this.newKey = JSON.parse(key),
        this.code = this.newKey,
        this.titolo = "Benvenuto!",
        this.post = []
      )
    )
  }
}