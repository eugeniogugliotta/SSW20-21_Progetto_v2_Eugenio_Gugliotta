import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostItKeyValueService {
  apiURL : string = 'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/kvaas-giwjg/service/kvaas/incoming_webhook';
  apiKEY : string = '/get?key=';
  constructor(private http: HttpClient) { }
  public getData(keyUser : string): Observable<Object> {
    return this.http.get(this.apiURL+this.apiKEY+keyUser);
  }
}