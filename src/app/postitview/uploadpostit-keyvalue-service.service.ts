import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UploadpostitKeyvalueServiceService {
  apiURL : string = 'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/kvaas-giwjg/service/kvaas/incoming_webhook';
  apiKEY : string = '/post?key=';
  apiMSG : string = '&msg=';
  constructor(private http: HttpClient, ) { }
  public upload(keyUser : string, data : string): Observable<Object> {
    return this.http.post(this.apiURL+this.apiKEY+keyUser+this.apiMSG+data,"");
  }
}