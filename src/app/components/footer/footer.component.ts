import { Component } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private us:UserService){
    this.users=this.us.loadUsers()
    this.userData= this.us.getUsers()
  }

  company='Siemens India'
  users
  userData:User[]=[]
}
