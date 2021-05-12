import { Injectable } from '@angular/core';
/*import { User } from '../interfaces/Ilogin'; */
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { User } from 'firebase';
import { first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public user: User;
  //loggedIn = new BehaviorSubject(this.user);
  constructor(public afAuth: AngularFireAuth) { }

  async logIn(email: string, password: string){
    try
    {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      return result;
    }
    catch (error){console.log(error)}
  }


  
  async singUp(email: string, password: string){

    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(email,password);
      return result;
    }
    catch (error){console.log(error)}
  }

  async logOut(){
    try
    { 
      await this.afAuth.auth.signOut();
    }
   
    catch (error){console.log(error)}
  }
  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  /*isLoggedIn(): boolean {
    return true;
  }*/
}
