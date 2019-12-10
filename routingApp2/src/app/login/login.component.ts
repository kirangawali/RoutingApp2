import { Component, OnInit } from '@angular/core';
import { LogIn } from '../log-in';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { first } from 'rxjs/operators';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl : String = '';
  loginModelForm = new LogIn('','');

  constructor(private routr : Router,
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

login()
{
  console.log('before login..');
  this.routr.navigate([this.returnUrl]);
  console.log('after a login..');
}

}
