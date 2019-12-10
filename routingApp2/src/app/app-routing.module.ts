import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { GmailComponent } from './gmail/gmail.component';


const routes: Routes = [

  { path : '', redirectTo :'/home' , pathMatch: 'full' },
  { path : 'home', component : MyHomeComponent },
  { path : 'gmail', component : GmailComponent },
  { path : 'login', component : LoginComponent },
  { path : 'signUp', component : SignupComponent },
  { path : '**', component : NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
