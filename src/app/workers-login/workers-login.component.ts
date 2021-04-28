import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-workers-login',
  templateUrl: './workers-login.component.html',
  styleUrls: ['./workers-login.component.scss']
})
export class WorkersLoginComponent implements OnInit {
  
  LogInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authSvc: LoginService, private router: Router) { }

  ngOnInit() {
  }
  async onLogIn(){
    const{email, password } = this.LogInForm.value;
    try{
      const user = await this.authSvc.logIn(email, password);
      if (user){
        this.router.navigate(['workershome']);
      }
    }
    catch (error){
      console.log(error);
    }
    
    
  }
}
