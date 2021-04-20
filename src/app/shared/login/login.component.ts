import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/Ilogin';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LogInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  //user = {} as User;
  constructor(private authSvc: LoginService, private router: Router) { }

  ngOnInit() {
  }
  async onLogIn(){
    const{email, password } = this.LogInForm.value;
    try{
      const user = await this.authSvc.logIn(email, password);
      if (user){
        this.router.navigate(['home']);
      }
    }
    catch (error){
      console.log(error);
    }
    
    
  }

}
