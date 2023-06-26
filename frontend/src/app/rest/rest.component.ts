
import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RestService } from '../rest.service';
import { Users } from '../users';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent {
  @Input() users! :Users;

 // users:Users[]=[];
 // constructor(public rs:RestService){

}
/*
  ngOnInit(): void {
    this.rs.getUsers().subscribe((response) =>{
    this.users = response;
  })
  }
}
*/

