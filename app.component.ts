import { Component } from '@angular/core';
import {UsersDataService} from './services/users-data.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Api fetch';
  users:any;
 
 
  constructor(userData:UsersDataService){
    userData.users().subscribe((data)=>{
      console.warn("data",data)
      this.users=data
    });
    //console.warn(this.users)
  }
 
}
