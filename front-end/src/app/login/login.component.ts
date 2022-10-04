import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required])
  })

  constructor( private accountService: AccountService) { }

  ngOnInit(): void {
  }

  login(){

    var email = this.loginForm.controls.email.value ||'';
    var password = this.loginForm.controls.password.value ||'';

    this.accountService.getAccount(email,password);

    return;
    
  }

  displayError(){}

}
