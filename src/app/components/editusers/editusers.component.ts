import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrl: './editusers.component.css'
})
export class EditusersComponent implements OnInit {
  ngOnInit(): void {
    if (this.data) {
      this.form.patchValue({
        uname: this.data.uname,
        email: this.data.email,
        pass: this.data.pass,
        city: this.data.city
      })
      console.log(this.form.value);
    }
  }
  form: FormGroup
  constructor(private fb: FormBuilder, private dr: MatDialogRef<EditusersComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('Dialog Data ', this.data);

    this.form = this.fb.group({
      uname: [this.data.uname],
      email: [this.data.email],
      pass: [this.data.pass],
      city: [this.data.city]
    })
    console.log(this.form.value);


  }
  save() {
    //console.log(this.form.value);

    this.dr.close(this.form.value)
  }
}
