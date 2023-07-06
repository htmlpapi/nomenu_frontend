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
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MenusComponent } from './routes/menus/menus.component';
import { CommentsComponent } from './routes/comments/comments.component';
import { CommentsTrackerComponent } from './components/comments-tracker/comments-tracker.component';
import { TopItemsComponent } from './components/top-items/top-items.component'
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { AddItemComponent } from './routes/add-item/add-item.component';
import { StoreComponent } from './routes/store/store.component';
import { StoreItemComponent } from './routes/store-item/store-item.component';

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
    SideNavComponent,
    MenusComponent,
    CommentsComponent,
    CommentsTrackerComponent,
    TopItemsComponent,
    AddItemComponent,
    StoreComponent,
    StoreItemComponent
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
    MatButtonToggleModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
