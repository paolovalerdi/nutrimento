import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service'

@Component({
  selector: 'app-workers-singup',
  templateUrl: './workers-singup.component.html',
  styleUrls: ['./workers-singup.component.scss'],
  providers: [LoginService]
})
export class WorkersSingupComponent implements OnInit {
  singUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });  

  constructor(private authSvc: LoginService, private router: Router) { }

  ngOnInit(): void{} 

    async onSingUp(){
      const {email, password} = this.singUpForm.value;
      try{
        const user= await this.authSvc.singUp( email,password);
        if(user){
          this.router.navigate(['workerslogin']);
        }
      }
      catch (error){
        console.log(error);
      }
     
      //console.log('Form->', this.singUpForm.value);
    }
  }


