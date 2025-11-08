import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { ValidationMessages } from '../../shared/utility/error-messages';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserDataService } from '../../shared/services/userdata.service';
import { UserDetails } from '../../models/UserDetails';

@Component({
  selector: 'app-dd-form',
  templateUrl: './dd-form.component.html',
  styleUrl: './dd-form.component.css'
})
export class DdFormComponent {
  myForm!: FormGroup
  uname!: FormControl
  pass!: FormControl
  email!: FormControl
  city!: FormControl

  createForm() {
    this.myForm = new FormGroup({
      uname: this.uname,
      pass: this.pass,
      email: this.email,
      city: this.city
    })
  }
  createFormControl() {
    this.uname = new FormControl('',[Validators.required,Validators.minLength(6)])
    this.pass = new FormControl('')
    this.email = new FormControl('',[this.emailDomainValidator])
    this.city = new FormControl('')
  }
constructor(private sb:MatSnackBar,private uds:UserDataService){
  this.createFormControl()
  this.createForm()
}
addUser(){
  this.sb.open('Record Saved Successfully...!','close',{
    duration:3000,
    horizontalPosition: 'center',
    verticalPosition:'top',
    panelClass: ['success-snackbar']
   
  })
/* const newUser= new UserDetails(this.myForm.value.uname,this.myForm.value.pass,
  this.myForm.value.email,this.myForm.value.city)
   */
  this.uds.addUser(this.myForm.value)
}
getErrorMeeage(controlName:string): string | null{
  const control= this.myForm.get(controlName)
  if(control && control.errors){
    const errors= control.errors
    for(const errorName in errors){
      if(ValidationMessages[controlName][errorName]){
        return ValidationMessages[controlName][errorName]
      }
    }
  }
  return null
}
emailDomainValidator(control:FormControl){
  let email= control.value
  if(email && email.indexOf('@')!=- 1){
  let [before,domain]= email.split('@')
    if(domain != 'siemens.com'){
      return {
        emailDomain:{
          pd: domain
        }
      }
    }
  }
return null
}

}
