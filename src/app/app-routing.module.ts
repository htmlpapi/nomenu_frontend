import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './routes/register/register.component';
import { LoginComponent } from './routes/login/login.component';
import { AppComponent } from './app.component';
import { authGuard } from './guard/auth.guard';
import { NotFoundComponent } from './routes/not-found/not-found.component';
import { HomeComponent } from './routes/home/home.component';
import { MenusComponent } from './routes/menus/menus.component';
import { CommentsComponent } from './routes/comments/comments.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent, canMatch: [authGuard]},
  { path: 'register', component: RegisterComponent },
  { path: 'menu', component: MenusComponent, canMatch: [authGuard]},
  { path: 'comments', component: CommentsComponent, canMatch: [authGuard]},
  { path: '**', component: NotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
