import { Component, OnInit } from '@angular/core';
import { SignIn } from '../sign-in';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupModelForm = new SignIn('','','','','','','');

  userType : any = ['Admin','Student','Trainer'];

  constructor() { }

  ngOnInit() {
  }

}
