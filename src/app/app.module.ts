import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainappComponent } from './components/mainapp/mainapp.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './components/users/users.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { DdFormComponent } from './components/dd-form/dd-form.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { LoadusersComponent } from './components/loadusers/loadusers.component';
import { MaterialModule } from './material/material.module';
import { EditusersComponent } from './components/editusers/editusers.component';
;
@NgModule({
  // all components goes here
  declarations: [
    AppComponent,
    MainappComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    UserFormComponent,
    DdFormComponent,
    LoadusersComponent,
    EditusersComponent,

  ],
  // all modules goes here
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  // all services goes here
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
