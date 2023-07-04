import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './routes/register/register.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LoginComponent } from './routes/login/login.component';
import { AccessAccountComponent } from './components/access-account/access-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NotFoundComponent } from './routes/not-found/not-found.component';
import { HomeComponent } from './routes/home/home.component';
import { SideNavComponent } from './components/side-nav/side-nav.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CreateAccountComponent,
    HeaderComponent,
    AccessAccountComponent,
    NotFoundComponent,
    HomeComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
