import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [],
  imports: [
    MatInputModule,
    MatFormFieldModule, MatCardModule,
    MatButtonModule, MatSnackBarModule, MatTableModule,
    CommonModule
  ],
  exports: [MatInputModule,
    MatFormFieldModule, MatCardModule,
    MatButtonModule, MatSnackBarModule, MatTableModule,MatIconModule,MatDialogModule,
    CommonModule]
})
export class MaterialModule { }
