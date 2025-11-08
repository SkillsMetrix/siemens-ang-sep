import { Component } from '@angular/core';
import { UserDataService } from '../../shared/services/userdata.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditusersComponent } from '../editusers/editusers.component';
import { UserDetails } from '../../models/UserDetails';

@Component({
  selector: 'app-loadusers',
  templateUrl: './loadusers.component.html',
  styleUrl: './loadusers.component.css'
})
export class LoadusersComponent {
  constructor(private us: UserDataService, private dialog: MatDialog, private sb: MatSnackBar) {
    this.loadUsers()
  }
  displayedColumns: string[] = ['uname', 'email', 'city', 'actions']
  users: any
  loadUsers() {
    this.us.loadUsers().subscribe({
      next: (res) => (this.users = res)
    })
  }
  deleteUser(id) {
    const ok = window.confirm(`Delete user ${id} ?`)
    if (!ok) return
    this.us.deleteUser(id).subscribe({
      next: () => {
        this.sb.open(`Recored Deleted`, 'Close', { duration: 2200 })
        this.loadUsers()
      }
    })

  }
  editUser(id):void{
    const ref= this.dialog.open(EditusersComponent,{
      width: '380px',
      data: {...this.users}

    })
    ref.afterClosed().subscribe(result =>{
      if(result){
        this.us.updateUser(id,result).subscribe({
          next:()=>{
            this.sb.open(`Recored updated`, 'Close', { duration: 2200 })
          }
        })
      
      }
    })

  }
}
