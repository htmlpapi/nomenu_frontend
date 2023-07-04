import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './routes/register/register.component';
import { LoginComponent } from './routes/login/login.component';
import { AppComponent } from './app.component';
import { authGuard } from './guard/auth.guard';
import { NotFoundComponent } from './routes/not-found/not-found.component';
import { HomeComponent } from './routes/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canMatch: [authGuard]},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: '**', component: LoginComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
