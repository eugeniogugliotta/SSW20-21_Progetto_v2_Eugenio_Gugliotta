import { Component, Input } from '@angular/core';
import { postIt } from '../../app.component';
import { UploadpostitKeyvalueServiceService } from '../uploadpostit-keyvalue-service.service';

@Component({
  selector: 'app-deletepostit',
  templateUrl: './deletepostit.component.html',
  styleUrls: ['./deletepostit.component.css']
})
export class DeletepostitComponent {
  @Input() post : Array<postIt>;
  @Input() deletePost : number;
  @Input() key : string;
  newjson : string;
  constructor(private update: UploadpostitKeyvalueServiceService) { }
  delete(){
    this.post.splice(this.deletePost, 1); 
    this.newjson = JSON.stringify(this.post)
    this.update.upload(this.key,this.newjson).subscribe();
  }
}