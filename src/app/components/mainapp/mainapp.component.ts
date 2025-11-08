import { Component, ViewChild } from '@angular/core';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-mainapp',
  templateUrl: './mainapp.component.html',
  styleUrl: './mainapp.component.css'
})
export class MainappComponent {
  newcity='mumbai'

  @ViewChild(UsersComponent)
  private users={} as UsersComponent


  inc(){
    this.users.increment()
  }
  dec(){
    this.users.decrement()
  }

  imageurl='https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg'
}
