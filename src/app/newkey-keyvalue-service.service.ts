import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NewkeyKeyvalueService {
  apiURL : string = 'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/kvaas-giwjg/service/kvaas/incoming_webhook/new';
  constructor(private http: HttpClient) { }
  public newKey(): Observable<string> {
    return this.http.post(this.apiURL, "", {responseType : "text"});
  }
}
