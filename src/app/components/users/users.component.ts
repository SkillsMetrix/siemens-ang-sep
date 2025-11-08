import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  message:string=''

  count:number=0

  increment(){
    this.count=this.count+1
    this.message="Counter "+ this.count
  }
  decrement(){
    this.count=this.count-1
    this.message="Counter "+ this.count
  }

}
