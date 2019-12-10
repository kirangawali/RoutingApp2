import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { NotFoundComponent } from './not-found/not-found.component'; 

import { GmailComponent } from './gmail/gmail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatrialModule } from './matrial/matrial.module';
import { MainDataService } from './main-data.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatrialModule,
    HttpClientModule
   // MatFormFieldModule,
    //MatInputModule,
  //  MatButtonModule,

  ],

  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MyHomeComponent,
    NotFoundComponent,
    GmailComponent
  ],
  providers: [MainDataService],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
